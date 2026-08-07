const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const { PDFParse } = require('pdf-parse');
const mammoth = require('mammoth');

const prisma = new PrismaClient();

const sourceDir = "c:\\Users\\FredrikBeckman\\OneDrive - Skyddsprodukter i Sverige AB\\Tor Finans\\Skyddsprodukter\\Antigravity projects\\Autocom\\MCF dokument";
const markdownOutputDir = path.join(sourceDir, "markdown");

if (!fs.existsSync(markdownOutputDir)) {
  fs.mkdirSync(markdownOutputDir, { recursive: true });
}

// Stop words for keyword frequency extraction
const swedishStopWords = new Set([
  'och', 'att', 'det', 'i', 'en', 'ett', 'vi', 'de', 'som', 'har', 'inte', 'om', 'med', 'men', 'för', 'den', 'till', 'av', 'på', 'eller', 'ett', 'är', 'var', 'ska', 'skulle', 'kan', 'kunna', 'man', 'dessa', 'under', 'över', 'vid', 'från', 'mot', 'samt', 'sig', 'sin', 'sitt', 'sina', 'här', 'där', 'då', 'nu', 'ut', 'in', 'upp', 'ner', 'eller', 'än', 'när', 'hur', 'varför', 'vad', 'vem', 'vilka', 'vilken', 'vilket'
]);

// Special skyddsrum terms to prioritize as keywords
const shelterKeywords = [
  'skyddsrum', 'skyddsdörr', 'karm', 'lucka', 'luftsluss', 'ventil', 'övertrycksventil', 'stigschakt', 
  'pelare', 'betong', 'armering', 'ritning', 'beräkning', 'explosion', 'stötbalk', 'gasfilter', 'aktivt kol',
  'avlopp', 'vatten', 'renslucka', 'belysning', 'splitterskydd', 'stötstång', 'gasmask', 'tappställe',
  'golvbrunn', 'tilluftskanal', 'reservutgång', 'betongelement', 'igensättning', 'skyddsplåt', 'avveckling',
  'skyddsrumssakkunnig', 'slutbesiktning', 'kontroll', 'tillsyn', 'sandfilter', 'tryckvåg', 'splitter'
];

// Reusable function to get all files recursively
function getFiles(dir, files_ = []) {
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      // Skip the output markdown directory
      if (name.includes('/markdown') || name.includes('\\markdown')) continue;
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}

// Extract keywords from text
function extractKeywords(text, limit = 8) {
  const words = text.toLowerCase()
    .replace(/[^\w\såäöé-]/g, ' ')
    .split(/\s+/);
  
  const frequency = {};
  
  // 1. Prioritize predefined shelter terms
  const foundShelterTerms = new Set();
  shelterKeywords.forEach(term => {
    if (text.toLowerCase().includes(term)) {
      foundShelterTerms.add(term);
    }
  });

  // 2. Count other words
  words.forEach(word => {
    if (word.length > 3 && !swedishStopWords.has(word) && !shelterKeywords.includes(word)) {
      frequency[word] = (frequency[word] || 0) + 1;
    }
  });

  // Sort and select top words
  const sortedWords = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);
  
  // Combine predefined shelter terms and top frequent words
  const result = Array.from(foundShelterTerms);
  let idx = 0;
  while (result.length < limit && idx < sortedWords.length) {
    if (!result.includes(sortedWords[idx])) {
      result.push(sortedWords[idx]);
    }
    idx++;
  }
  
  return result.slice(0, limit);
}

// Clean and truncate text for summary
function generateSummary(text) {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= 250) return clean;
  return clean.substring(0, 247) + '...';
}

// Parse YAML frontmatter back if file exists to save computation
function parseMarkdownFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const match = fileContent.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)/);
  if (!match) return null;
  
  const yamlText = match[1];
  const markdownContent = match[2];
  
  const metadata = {};
  yamlText.split('\n').forEach(line => {
    const parts = line.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      let val = parts.slice(1).join(':').trim();
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.substring(1, val.length - 1);
      }
      if (key === 'keywords') {
        // Parse array notation e.g. ["a", "b"]
        try {
          metadata[key] = JSON.parse(val.replace(/'/g, '"'));
        } catch (e) {
          metadata[key] = val.split(',').map(k => k.replace(/[\[\]"]/g, '').trim());
        }
      } else {
        metadata[key] = val;
      }
    }
  });
  
  return { metadata, content: markdownContent };
}

// Capitalize and format filenames into nice titles
function formatTitle(filename) {
  const base = path.basename(filename, path.extname(filename));
  // Replace dashes and underscores with spaces and capitalize
  return base
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

async function main() {
  console.log("Finding all files in MCF dokument...");
  const allFiles = getFiles(sourceDir);
  
  // Filter for PDFs and DOCX files
  const docFiles = allFiles.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.pdf' || ext === '.docx';
  });
  
  console.log(`Found ${docFiles.length} documents to process.`);
  let count = 0;
  
  for (const file of docFiles) {
    count++;
    const ext = path.extname(file).toLowerCase();
    const relativePath = path.relative(sourceDir, file);
    
    // Determine category based on parent folder name
    const parentFolder = path.basename(path.dirname(file));
    const category = parentFolder === 'MCF dokument' ? 'Övrigt' : parentFolder;
    
    const targetMdFile = path.join(markdownOutputDir, relativePath.replace(ext, '.md'));
    const targetMdDir = path.dirname(targetMdFile);
    
    let title = formatTitle(file);
    let text = "";
    let keywords = [];
    let summary = "";
    let isProcessed = false;
    
    // 1. Speed up: if markdown file already exists, parse it directly
    if (fs.existsSync(targetMdFile)) {
      try {
        const parsed = parseMarkdownFile(targetMdFile);
        if (parsed && parsed.metadata && parsed.content) {
          title = parsed.metadata.title || title;
          text = parsed.content;
          keywords = parsed.metadata.keywords || [];
          summary = parsed.metadata.summary || generateSummary(text);
          isProcessed = true;
        }
      } catch (err) {
        console.warn(`Could not parse existing Markdown for ${relativePath}, reprocessing...`);
      }
    }
    
    // 2. Extract text if not already processed
    if (!isProcessed) {
      try {
        if (ext === '.pdf') {
          const dataBuffer = fs.readFileSync(file);
          const parser = new PDFParse({ data: dataBuffer });
          const pdfData = await parser.getText();
          text = pdfData.text;
          await parser.destroy();
        } else if (ext === '.docx') {
          const docxResult = await mammoth.extractRawText({ path: file });
          text = docxResult.value;
        }
        
        // Post-processing text
        text = text.trim();
        if (!text) {
          text = "[Tomt dokument eller kunde inte extrahera text]";
        }
        
        keywords = extractKeywords(text);
        summary = generateSummary(text);
        
        // Create folder if not exists
        if (!fs.existsSync(targetMdDir)) {
          fs.mkdirSync(targetMdDir, { recursive: true });
        }
        
        // Write Markdown file
        const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
category: "${category}"
originalFile: "${relativePath.replace(/\\/g, '/')}"
fileType: "${ext.substring(1).toUpperCase()}"
keywords: ${JSON.stringify(keywords)}
summary: "${summary.replace(/"/g, '\\"').replace(/\n/g, ' ')}"
---

${text}`;
        
        fs.writeFileSync(targetMdFile, frontmatter, 'utf8');
      } catch (err) {
        console.error(`Error processing file [${count}/${docFiles.length}] ${relativePath}:`, err.message);
        continue;
      }
    }
    
    // 3. Update database via Prisma
    try {
      await prisma.document.upsert({
        where: { filePath: relativePath },
        update: {
          title,
          category,
          mdPath: path.relative(sourceDir, targetMdFile),
          content: text,
          summary,
          keywords: keywords.join(', '),
          fileType: ext.substring(1).toUpperCase()
        },
        create: {
          title,
          category,
          filePath: relativePath,
          mdPath: path.relative(sourceDir, targetMdFile),
          content: text,
          summary,
          keywords: keywords.join(', '),
          fileType: ext.substring(1).toUpperCase()
        }
      });
      
      console.log(`[${count}/${docFiles.length}] ${isProcessed ? 'Indexed' : 'Processed & Indexed'}: ${relativePath}`);
    } catch (dbErr) {
      console.error(`Database error indexing ${relativePath}:`, dbErr.message);
    }
  }
  
  console.log("Extraction and indexing process finished!");
}

main()
  .catch(e => {
    console.error("Critical error in main loop:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
