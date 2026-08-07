import { NextRequest } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const filePath = params.path.join('/');
    const absolutePath = path.join(process.cwd(), 'public', 'uploads', filePath);
    console.log(`[API Uploads Route] Serving file: ${filePath} from path: ${absolutePath}`);
    
    const buffer = await readFile(absolutePath);
    
    // Determine content type
    let contentType = 'application/octet-stream';
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.pdf') {
      contentType = 'application/pdf';
    } else if (ext === '.png') {
      contentType = 'image/png';
    } else if (ext === '.jpg' || ext === '.jpeg') {
      contentType = 'image/jpeg';
    } else if (ext === '.gif') {
      contentType = 'image/gif';
    } else if (ext === '.webp') {
      contentType = 'image/webp';
    }
    
    return new Response(buffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': 'inline', // Ensure browser displays inline
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Length': buffer.length.toString(),
        'Accept-Ranges': 'bytes'
      }
    });
  } catch (err: any) {
    console.error(`[API Uploads Route] Error reading file: ${err.message || err}`);
    return new Response('File not found', { status: 404 });
  }
}
