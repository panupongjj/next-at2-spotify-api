import { NextResponse } from 'next/server';
import spotifyApiController from '@/lib/spotifyApiController';

export async function GET(request, { params }) {

  try {
    console.log("Request received for /api/spotify/getAlbum with params:", params);
    console.log("Type of params:", typeof params);
    const { artistID } = await params ;
    const token = await spotifyApiController.getToken();
    const playlists = await spotifyApiController.getAlbum(token, artistID);
    return NextResponse.json({ playlists });

  } catch (error) {
    console.error('Error in /api/spotify/getPlaylist:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}