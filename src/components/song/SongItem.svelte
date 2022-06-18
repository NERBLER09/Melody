<script lang="ts">
import { showDarkMode } from "../../data/controller";

    export let filePath: string
    export let title: string 
    export let artist: string
    export let album: string
</script>

<div class="song-item {$showDarkMode ? "dark-mode" : ""}">
    <p class="title">{title}</p>
    <p class="artist">{artist}</p>
    <p class="album">{album}</p>
</div>

<style lang="scss">
    @import "../../styles/variables";
    @import "../../styles/components/buttons";

    .song-item {
        @include button;
        height: 25px;

        display: flex;
        align-items: center;
        
        p.title {
            margin-left: 20px;
            margin-right: 10px;

            width: 33.3%;
        }

        p.artist {
            width: 33.3%;
        }

        p.album {
            margin-right: 20px;
            margin-left: 10px;

            width: 33.3%;
        }
    }
</style>