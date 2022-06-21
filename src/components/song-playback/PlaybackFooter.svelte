<script>
  import { showDarkMode } from "../../data/controller";
</script>

<div class="playback-footer {$showDarkMode ? 'dark-mode' : ''}">
  <div class="song-info">
    <p class="header">[Title]</p>
    <p class="sub-header">[Artist]</p>
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
      .header {
        font-weight: bold;
        font-size: 18px;
      }

      p {
        max-width: 15ch;
      }
    }

    .placement-control, .que-control, .playback-control {
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
            max-width: 300px;
        }
    }
    .media-control {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
    }
  }
</style>
