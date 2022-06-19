import { Writable, writable } from "svelte/store";

const showDarkMode: Writable<boolean> = writable(JSON.parse(localStorage.getItem("isDarkMode")) || false )

showDarkMode.subscribe(value => {
    localStorage.setItem("isDarkMode", JSON.stringify(value))
})

export type uiView = "home" | "songs" | "albums" | "playlists" | "search" | "album-preview"
const shownUi: Writable<uiView> = writable("home")

const albumToPreview: Writable<AlbumObject> = writable() 

export {
    showDarkMode,
    shownUi,
    albumToPreview
}