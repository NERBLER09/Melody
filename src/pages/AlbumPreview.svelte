<script lang="ts">
import { onMount } from "svelte";
import SongItem from "../components/song/SongItem.svelte";

import { albumToPreview, showDarkMode } from "../data/controller";
import { music } from "../data/data";

const album = $albumToPreview.album
const artist = $albumToPreview.artist
let songsInAlbum: MusicObject[] = []

onMount(() => {
    songsInAlbum = $music.filter(item => item.album === album) 
})
</script>

<div class="album-preview {$showDarkMode ? "dark-mode" : ""}">
    <header>
        <div class="text">
            <h1>{album}</h1>
            <h2>{artist}</h2>
        </div>
        <div class="buttons">
            <button>[Play]</button>
        </div>
    </header>

    <div class="songs">
        {#each songsInAlbum as song}
            <SongItem {...song}/>
        {/each}
    </div>
</div>

<style lang="scss">
    @import "../styles/variables.scss";
    @import "../styles/components/index";

    // FIXME: Not being able to scroll down to final item on overflow

    .album-preview {
        padding-left: 20px;
        padding-right: 20px;
        height: fit-content;

        header {
            display: flex;
            align-items: center;
            .buttons {
                margin-left: auto;
            }
        }

        .songs {
            display: flex;
            flex-direction: column;

            justify-content: center;

            padding-left: 10%;
            padding-right: 10%;
        }
    }
</style>