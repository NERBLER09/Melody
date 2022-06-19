<script>
import { showDarkMode } from "../data/controller";
</script>

<div class="album-preview {$showDarkMode ? "dark-mode" : ""}">
    <header>
        <div class="text">
            <h1>[Album]</h1>
            <h2>[Artist]</h2>
        </div>
        <div class="buttons">
            <button>[Play]</button>
        </div>
    </header>

    <div class="songs">
        <p>[Songs placeholder]</p>
    </div>
</div>

<style lang="scss">
    @import "../styles/variables.scss";
    @import "../styles/components/index";

    .album-preview {
        padding-left: 20px;
        padding-right: 20px;

        header {
            display: flex;
            align-items: center;
            .buttons {
                margin-left: auto;
            }
        }
    }
</style>