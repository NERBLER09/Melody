<script>
import SongItem from "../components/song/SongItem.svelte";
import { showDarkMode } from "../data/controller";
import { music } from "../data/data";
</script>
<div class="songs {$showDarkMode ? "dark-mode" : ""}">
    <h1>Songs</h1>

    <div class="song-list">
        {#each $music as song}
            <SongItem {...song}/>
        {/each}
    </div>
</div>

<style lang="scss">
    @import "../styles/variables.scss";
    .song-list {
        display: flex;
        // flex-wrap: wrap;
        flex-direction: column;

        height: 100%;
        // width: 100%;

        justify-content: center;

        padding-left: 10%;
        padding-right: 10%;
    }
    h1 {
        margin-left: 30px;
    }
</style>