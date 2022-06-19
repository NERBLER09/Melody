<script lang="ts">
  import { onMount } from "svelte";
  import * as _ from "lodash";

  import AlbumItem from "../components/album/AlbumItem.svelte";
  import { showDarkMode } from "../data/controller";
  import { music } from "../data/data";
import { getAlbums } from "../api/local";

  let albumList: AlbumObject[] = $music;

  onMount(() => {
    albumList = getAlbums()
  });
</script>

<div class="albums {$showDarkMode ? 'dark-mode' : ''}">
  <h1>Albums</h1>

  <div class="song-list">
    {#each albumList as song}
      <AlbumItem {...song} />
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../styles/variables.scss";

  .song-list {
    display: flex;
    flex-wrap: wrap;

    height: 100%;
    width: 100%;

    justify-content: center;
  }
  h1 {
    margin-left: 30px;
  }
</style>
