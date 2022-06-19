<script lang="ts">
import { onMount } from "svelte";
import { getAlbums } from "../api/local";
import AlbumItem from "../components/album/AlbumItem.svelte";

import { showDarkMode } from "../data/controller";

let albumOfTheDay: AlbumObject = {album: "", artist: ""}
let topAlbums: AlbumObject[] = []

onMount(() => {
    const albums = getAlbums()

    const getAlbumOfTheDay = (): AlbumObject => {
        const index = Math.floor(Math.random() * albums.length)
        const item = albums[index]
        return item 
    }

    const getTopAlbums = (): AlbumObject[] => {
        const tempList = []

        for(let i = 0; i<8; i++) {
            const index = Math.floor(Math.random() * albums.length)
            const item = albums[index]
            tempList.push(item)
        }

        return tempList
    }

    albumOfTheDay = getAlbumOfTheDay()
    topAlbums = getTopAlbums()
})
</script>
<div class="home {$showDarkMode ? "dark-mode" : ""}">
    <h1>Album of the day</h1>
    <header>
        <div class="content">
            <p class="album">{albumOfTheDay.album}</p>
            <p class="artist">{albumOfTheDay.artist}</p>
        </div>
        <div class="button">
            <button>Play</button>
        </div>
    </header>

    <hr>

    <h2>Why not listen to: </h2>
    <div class="top-albums">
        {#each topAlbums as topAlbum}
            <AlbumItem {...topAlbum}/>
        {/each}
    </div>
</div>

<style lang="scss">
    @import "../styles/variables.scss";
    @import "../styles/components/index";

    .home {
        padding-left: 20px;
        padding-right: 20px;
        .top-albums {
            display: flex;
            flex-wrap: none;
            overflow:auto;
        }

        header {
            display: flex;
            align-items: center;
            .content {
                p.album {
                    font-size: 18px;
                    margin-top: 0px;
                }
            }

            .button {
                margin-left: auto;
            }
       }
    }
</style>