<script lang="ts">
import { showDarkMode } from "../../data/controller";
import { onMount } from "svelte";
import {invoke} from "@tauri-apps/api/tauri"

    export let name: string
    export let path: string

    let songName: string

    onMount(async() => {
        // Create backend call to fetch music metadata
        invoke("read_song_metadata", {filePath: path}).then((data: string[]) => {
            songName = data[0]
        })
    })
</script>

<div class="song-item {$showDarkMode ? "dark-mode" : ""}">
    <p>{songName}</p>
</div>

<style lang="scss">
    @import "../../styles/variables";
    @import "../../styles/components/buttons";

    .song-item {
        @include button;
        // width: 20ch;

        height: 200px;
        min-width: 200px;
        max-width: 200px;
    }
</style>