<script lang="ts">
    import {app} from "@tauri-apps/api"
import { onMount } from "svelte"
import { showDarkMode } from "../../data/controller";
import { showAboutPrompt } from "../../data/prompts";

    let version: string

    onMount(async() => {
        version = await app.getVersion() 
    })

    const closeAbout = () => showAboutPrompt.set(false)
</script>

<div class="about {$showDarkMode ? "dark-mode" : ""}">
    <img src="" alt="">
    <p class="name">Melody</p>
    <p class="version">{version}</p>
    <p class="description">A clean and simple music player.</p>
    <p class="copyright">Copyright © 2022 Finnegan Beaudin</p>
    <p class="license"></p>
    <button on:click="{closeAbout}">Close</button>
</div>

<style lang="scss">
    @import "../../styles/variables";
    @import "../../styles/components/index";

    .about {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--bg-color);
        border: 1px solid black;
        border-radius: 20px;

        padding: 40px;
        
        width: 100%;
        max-width: 50%;

        text-align: center;

        .name {
            font-weight: bold;
        }
    }
</style>