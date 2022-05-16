<script lang="ts">
    import {appWindow, availableMonitors} from "@tauri-apps/api/window"
import { onMount } from "svelte";
import Menu from "./Menu.svelte";

    let isAppMaximized

    const closeWindow = () => {
        appWindow.close()
    }
    const maximizeRestoreWindow = async() => {
        if(await appWindow.isMaximized()) {
            appWindow.unmaximize()
        isAppMaximized = !await appWindow.isMaximized()
        }
        else {
            appWindow.maximize()
            isAppMaximized = !await appWindow.isMaximized()
        }
        console.log(isAppMaximized)

        // isAppMaximized = await appWindow.isMaximized()

    }
    const minimizeWindow = () => {
        appWindow.minimize()
    }

    onMount(async() => {
        isAppMaximized = screen.availHeight == window.outerHeight 
    }) 

    let isMenuShown = false
    const showMenu = () => isMenuShown = !isMenuShown
</script>

<div class="title-bar" data-tauri-drag-region>
    <div class="start">
        <img src="images/window-controls/search.svg" alt="Search" class="title-button search">
    </div>
    <div class="title">
        <button class="nav-button active">
            <p>Home</p>
        </button>
        <button class="nav-button">
            <p>Songs</p>
        </button>
        <button class="nav-button">
            <p>Albums</p>
        </button>
        <button class="nav-button">
            <p>Playlists</p>
        </button>
    </div>
    <div class="end">
        <img src="images/window-controls/menu.svg" alt="Open menu" class="title-button menu-button {isMenuShown ? "active" : ""}" on:click="{showMenu}">

        {#if isMenuShown}
            <div class="menu-container"><Menu/></div>
        {/if}
    </div>
    <div class="window-controls">
        <img src="images/window-controls/minimize.svg" alt="Minimize" on:click="{minimizeWindow}">
        <img src="images/window-controls/{!isAppMaximized ? "maximize" : "restore"}.svg" alt="Maximize" on:click="{maximizeRestoreWindow}">
        <img src="images/window-controls/close.svg" alt="Close" on:click="{closeWindow}">
    </div>
</div>

<style lang="scss">
    @mixin title-bar-image {
        margin-left: 20px;
        img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
            margin-left: 5px;
            cursor: pointer;
        }
    }    
    
    @mixin button {
        border: none;
        height: 32px;
        margin: 8px;
        background-color: white;
        cursor: pointer;

        border-radius: 5px;

        &:active {
            background-color: lightgrey;
        }
   }

    p {
        margin: 0;
    }

    .menu-container {
        position: absolute;
    }

    .title-button {
        @include button;
        @include title-bar-image; 

        width: 20px;
        height: 20px;
        
        &.search {
            width: 30px;
            height: 30px;
            margin-left: 0;
        }
        &.menu-button {
            padding: 5px;
            margin-right: 0;

            &.active {
                background-color: hsl(0, 0%, 88%);
            }
        }
    }

    .title-bar {
        display: flex;
        align-items: center;
        height: 32px;
        padding: 5px;
    } 

   .nav-button {
        @include button;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;

    }
    
    .title {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        .nav-button.active{
            background: hsl(0, 0%, 83%);
        }
    }


    .window-controls {
        @include title-bar-image; 

        img {
            border-radius: 100%;
            padding: 5px;
            margin: 0;

            &:active {
                background-color: lightgrey;
            }
        } 
    }
</style>