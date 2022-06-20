<script lang="ts">
  import { getAlbums } from "../api/local";
  import AlbumItem from "../components/album/AlbumItem.svelte";

  import SongItem from "../components/song/SongItem.svelte";
  import { showDarkMode, shownUi } from "../data/controller";
  import { music } from "../data/data";

  const exitSearchViaButton = () => shownUi.set("home");

  let searchQuery = "";
  let searchedSongs: MusicObject[] = [];
  let searchedAlbums: AlbumObject[] = [];

  const searchForItems = () => {
    searchedSongs = $music.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    searchedAlbums = getAlbums().filter((item) =>
      item.album.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
</script>

<div class="search {$showDarkMode ? 'dark-mode' : ''}">
  <div class="search-box">
    <input
      type="text"
      placeholder="Search"
      bind:value={searchQuery}
      on:keyup={() => searchForItems()}
    />
    <button class="suggested" on:click={exitSearchViaButton}>Exit</button>
  </div>

  {#if searchQuery !== ""}
    <h2>Albums</h2>
    <div class="albums">
      {#each searchedAlbums as album}
        <AlbumItem {...album} />
      {/each}
    </div>
  {/if}

  {#if searchQuery !== ""}
    <h2>Songs</h2>
    <div class="songs">
      {#each searchedSongs as song}
        <SongItem {...song} />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  @import "../styles/variables";
  @import "../styles/components/index";

  .search {
    .search-box {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;

      input {
        color: var(--text-color);

        background-color: var(--hover-color);

        width: 50%;

        border-radius: 5px;
        padding: 8px;
      }
      button {
        // margin: 0px;
        margin-bottom: 8px;
        margin-left: 20px;
      }
    }

    
    .songs {
      display: flex;
      flex-direction: column;

      height: 100%;

      justify-content: center;

      padding-left: 10%;
      padding-right: 10%;
    }

    .albums {
      display: flex;
      align-items: center;

      height: 223px;
      overflow: auto;
    }
  }
</style>
