<script lang="ts">
import { showDarkMode } from "../../data/controller";

    export let artist: string
    export let album: string
</script>

<div class="album-item {$showDarkMode ? "dark-mode" : ""}">
    <p class="album">{album}</p>
    <p class="artist">{artist}</p>
</div>

<style lang="scss">
    @import "../../styles/variables";
    @import "../../styles/components/buttons";

    .album-item {
        @include button;
        // width: 20ch;

        height: 200px;
        min-width: 200px;
        max-width: 200px;

        p {
            text-align: center;

            &.artist {
                padding-top: 5px;
            }

            &.album {
                font-size: 18px;
            }
        }
    }
</style>