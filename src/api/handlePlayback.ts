import { Writable, writable } from "svelte/store"
import { invoke } from "@tauri-apps/api/tauri"

const selectedSong: Writable<MusicObject> = writable()
const showSongPlayback = writable(false)

const selectSongToPlay = async(song: MusicObject) => {
    showSongPlayback.set(true)
    selectedSong.set(song)
    
    invoke("play_audio", {filePath: song.filePath})
}

selectedSong.subscribe(value => {
    console.log(`To play: ${value?.title}`)
})

export {
    selectSongToPlay,
    showSongPlayback,
    selectedSong
}