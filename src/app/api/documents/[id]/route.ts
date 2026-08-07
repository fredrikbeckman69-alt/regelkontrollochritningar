import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const document = await prisma.document.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        title: true,
        category: true,
        content: true,
        fileType: true,
        filePath: true,
        keywords: true,
        summary: true,
      }
    });

    if (!document) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 });
    }

    return NextResponse.json(document);
  } catch (error: any) {
    console.error("Document API error:", error);
    return NextResponse.json({ error: 'Failed to fetch document' }, { status: 500 });
  }
}
