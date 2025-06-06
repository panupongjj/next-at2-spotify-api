import { NextResponse } from 'next/server';
import spotifyApiController from '@/lib/spotifyApiController';
import singletonArtistList from '@/lib/artistsController';

export async function GET() {

  try {
    await singletonArtistList.generateArtistList();
    //const arrArtistList = await singletonArtistList.getArtistIdList();
    const artistsObject = await singletonArtistList.getArtistListsObject();
    //console.log("--------- artistsObject ------------");
    //console.log(artistsObject);
    
    //return NextResponse.json({ artistObject: artistsObject, arrArtistList:arrArtistList }, { status: 200 });
    return NextResponse.json({ artistObject: artistsObject}, { status: 200 });
  } catch (error) {
    console.error('Error in /api/spotify/getArtist:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}