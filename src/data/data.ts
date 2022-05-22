import type { FileEntry } from "@tauri-apps/api/fs";
import { Writable, writable } from "svelte/store";

const music: Writable<FileEntry[]> = writable([])

export {
    music
}