import type { FileEntry } from "@tauri-apps/api/fs"
import { invoke } from "@tauri-apps/api/tauri"

export const getMusicMetadata = async(filePath: string): Promise<MusicObject> => {
    const metadata = await invoke("read_song_metadata", {filePath})

    console.table(metadata)

    const data: MusicObject = {
        title: metadata[0],
        artist: metadata[1],
        album: metadata[2],
        filePath
    }

    return data
}

export const addMetadataToSongsList = async(fileList: FileEntry[]) => {
    const musicTemp: MusicObject[] = []

    for(const item of fileList) {
        const newItem = await getMusicMetadata(item.path)
        musicTemp.push(newItem)
    }

    return musicTemp
}