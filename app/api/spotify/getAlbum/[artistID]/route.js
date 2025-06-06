import { NextResponse } from 'next/server';
import spotifyApiController from '@/lib/spotifyApiController';

export async function GET(request, { params }) {

  try {
    const { artistID } = await params ;
    const token = await spotifyApiController.getToken();
    const playlists = await spotifyApiController.getAlbum(token, artistID);
    return NextResponse.json({ playlists });

  } catch (error) {
    console.error('Error in /api/spotify/getAlbum:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}