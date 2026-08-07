import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q') || '';

    let whereClause = {};
    if (query) {
      whereClause = {
        OR: [
          { customName: { contains: query } },
          { customerNumber: { contains: query } },
          { salesOrderNumber: { contains: query } },
          { customerName: { contains: query } },
          { rawText: { contains: query } },
          { reductoMarkdown: { contains: query } }
        ]
      };
    }

    const docs = await prisma.uploadedDocument.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Self-poll check: trigger status check for any processing docs in the background
    for (const doc of docs) {
      if (doc.complianceStatus === 'processing') {
        const pollUrl = `${req.nextUrl.origin}/api/compliance/poll?docId=${doc.id}`;
        fetch(pollUrl).catch(err => console.error("Error in archive self-poll:", err));
      }
    }

    return NextResponse.json(docs, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    });
  } catch (err: any) {
    console.error("Failed to fetch archive:", err);
    return NextResponse.json({ error: "Kunde inte hämta arkivet." }, { status: 500 });
  }
}
