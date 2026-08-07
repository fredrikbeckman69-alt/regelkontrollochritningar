import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';

  try {
    const whereClause: any = {};
    
    if (category && category !== 'all') {
      whereClause.category = category;
    }

    if (query) {
      whereClause.OR = [
        { title: { contains: query } },
        { content: { contains: query } },
        { keywords: { contains: query } },
        { category: { contains: query } },
      ];
    }

    const [documents, categoriesRaw] = await Promise.all([
      prisma.document.findMany({
        where: whereClause,
        select: {
          id: true,
          title: true,
          category: true,
          filePath: true,
          mdPath: true,
          summary: true,
          keywords: true,
          fileType: true,
          createdAt: true,
        },
        orderBy: {
          title: 'asc',
        },
        take: 100, // limit to 100 results for frontend performance
      }),
      prisma.document.groupBy({
        by: ['category'],
      })
    ]);

    const categories = categoriesRaw.map((c: any) => c.category).filter(Boolean);

    return NextResponse.json({ documents, categories });
  } catch (error: any) {
    console.error("Search API error:", error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}
