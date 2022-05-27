<script>

import { showDarkMode, shownUi } from "../data/controller";

const exitSearchViaButton = () => shownUi.set("home")
</script>
<div class="search {$showDarkMode ? "dark-mode" : ""}">
    <div class="search-box">
        <input type="text" placeholder="Search">
    </div>

    <button class="suggested" on:click="{exitSearchViaButton}">Exit</button>
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
        }

        button {
            position: fixed;
            bottom: 50px;
            left: 50%;

            margin-left: auto;
            margin-right: auto;
        }
    }
</style>