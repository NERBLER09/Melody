<script lang="ts">
import { showDarkMode } from "../../data/controller";
import { onMount } from "svelte";
import {invoke} from "@tauri-apps/api/tauri"

    export let filePath: string
    export let title: string 
    export let artist: string
    export let album: string
</script>

<div class="song-item {$showDarkMode ? "dark-mode" : ""}">
    <p>{title}</p>
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