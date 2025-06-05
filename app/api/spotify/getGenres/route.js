import { NextResponse } from 'next/server';
import spotifyApiController from '@/lib/spotifyApiController';

export async function GET() {
  try {
    const token = await spotifyApiController.getToken();
    const genres = await spotifyApiController.getGenres(token);
    return NextResponse.json({ genres });

  } catch (error) {
    console.error('Error in /api/spotify/getGenres:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}