import type { FileEntry } from "@tauri-apps/api/fs";
import { invoke } from "@tauri-apps/api/tauri";
import { get } from "svelte/store";
import { music } from "../data/data";

const getMusicMetadata = async (filePath: string): Promise<MusicObject> => {
  const metadata = await invoke("read_song_metadata", { filePath });

  const data: MusicObject = {
    title: metadata[0],
    artist: metadata[1],
    album: metadata[2],
    filePath,
  };

  return data;
};

const addMetadataToSongsList = async (fileList: FileEntry[]) => {
  const musicTemp: MusicObject[] = [];

  for (const item of fileList) {
    const newItem = await getMusicMetadata(item.path);
    musicTemp.push(newItem);
  }

  return musicTemp;
};

const getAlbums = (): AlbumObject[] => {
  const itemTemp: AlbumObject[] = [];
  const musicItems = get(music);

  for (const item of musicItems) {
    const data = {
      album: item.album,
      artist: item.artist,
    };

    let index = musicItems.indexOf(item);
    index = index > 2 ? index - 1 : index;
    if (musicItems[index].album !== item.album) {
      itemTemp.push(data);
    }
  }
  return itemTemp
};

export { addMetadataToSongsList, getMusicMetadata, getAlbums };
