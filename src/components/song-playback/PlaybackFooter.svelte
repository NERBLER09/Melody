<script>
import { selectedSong } from "../../api/handlePlayback";

  import { showDarkMode } from "../../data/controller";

  $: title = $selectedSong.title 
  $: artist = $selectedSong.artist
</script>

<div class="playback-footer {$showDarkMode ? 'dark-mode' : ''}">
  <div class="song-info">
    <p class="header">{title}</p>
    <p class="sub-header">{artist}</p>
  </div>
  <div class="media-control">
      <div class="playback-control">
        <button>[Back]</button>
        <button>[Play/Pause]</button>
        <button>[Skip]</button>
      </div>
      <div class="placement-control">
        <p>[Start Time]</p>
        <input type="range" min="0" max="300" class="placement-input"/>
        <p>[End Time]</p>
      </div>
  </div>
  <div class="que-control">
    <button>[Shuffle]</button>
    <button>[Loop]</button>
    <button>[Menu dropdown]</button>
    <button>[Expand playback]</button>
  </div>
</div>

<style lang="scss">
  @import "../../styles/variables";
  @import "../../styles/components/index";

  .playback-footer {
    position: fixed;
    bottom: 0;

    width: 100%;
    background-color: var(--bg-color);
    padding: 5px 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .song-info {
        width: 15%;
      .header {
        font-weight: bold;
        font-size: 18px;
      }

      
    }

    .placement-control, .que-control {
        display: flex;
        align-items: center;
    }

    .placement-control {
        p {
            margin-left: 10px;
            margin-right: 10px;
        }
        .placement-input {
            min-width: 150px;
            width: 100%;
            max-width: 500px;
        }
    }
    .media-control {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;

        width: 40%;

        div {
            width: 100%;
        }
    }

    .playback-control {
        display: flex;

        justify-content: center;
        align-items: center;
    }
  }
</style>
