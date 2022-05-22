import { Writable, writable } from "svelte/store";

const showDarkMode: Writable<boolean> = writable(JSON.parse(localStorage.getItem("isDarkMode")) || false )

showDarkMode.subscribe(value => {
    localStorage.setItem("isDarkMode", JSON.stringify(value))
})

export type uiView = "home" | "songs" | "albums" | "playlists"
const shownUi: Writable<uiView> = writable("home")

export {
    showDarkMode,
    shownUi
}