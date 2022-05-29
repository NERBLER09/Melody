<script lang="ts">
import { showDarkMode } from "../../data/controller";

    export let name: string
</script>

<div class="song-item {$showDarkMode ? "dark-mode" : ""}">
    <p>{name}</p>
</div>

<style lang="scss">
    @import "../../styles/variables";
    @import "../../styles/components/buttons";

    .song-item {
        @include button;
        // width: 20ch;

        height: 200px;
        min-width: 200px;
        max-width: 200px;
    }
</style>