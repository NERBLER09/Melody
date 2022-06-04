import { Writable, writable } from "svelte/store";

const music: Writable<MusicObject[]> = writable([])

export {
    music
}