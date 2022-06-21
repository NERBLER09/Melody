import { Writable, writable } from "svelte/store"

const selectedSong: Writable<MusicObject> = writable()
const showSongPlayback = writable(false)

const selectSongToPlay = (song: MusicObject) => {
    showSongPlayback.set(true)
    selectedSong.set(song)
}

selectedSong.subscribe(value => {
    console.log(`To play: ${value?.title}`)
})

export {
    selectSongToPlay,
    showSongPlayback
}