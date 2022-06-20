<script lang="ts">
  import { appWindow } from "@tauri-apps/api/window";
  import { onMount } from "svelte";
  import {
    albumToPreview,
    showDarkMode,
    shownUi,
    uiView,
  } from "../../data/controller";
  import Menu from "./Menu.svelte";

  let isAppMaximized;

  const closeWindow = () => {
    appWindow.close();
  };
  const maximizeRestoreWindow = async () => {
    if (await appWindow.isMaximized()) {
      appWindow.unmaximize();
      isAppMaximized = !(await appWindow.isMaximized());
    } else {
      appWindow.maximize();
      isAppMaximized = !(await appWindow.isMaximized());
    }
  };
  const minimizeWindow = () => {
    appWindow.minimize();
  };

  onMount(async () => {
    isAppMaximized = screen.availHeight == window.outerHeight;
  });

  const goBack = () => shownUi.set("home");
</script>

<div
  class="title-bar {$showDarkMode ? 'dark-mode' : ''}"
  data-tauri-drag-region
>
  <div class="start" on:click={goBack}>
    <img
      src="images/window-controls/back-arrow-{$showDarkMode
        ? 'dark'
        : 'light'}.svg"
      alt="Search"
      class="title-button search"
    />
  </div>
  <div class="title">
    <p class="header">{$albumToPreview.album}</p>
    <p class="sub-header">{$albumToPreview.artist}</p>
  </div>
  <div class="window-controls">
    <img
      src="images/window-controls/minimize-{$showDarkMode
        ? 'dark'
        : 'light'}.svg"
      alt="Minimize"
      on:click={minimizeWindow}
    />
    <img
      src="images/window-controls/{!isAppMaximized
        ? 'maximize'
        : 'restore'}-{$showDarkMode ? 'dark' : 'light'}.svg"
      alt="Maximize"
      on:click={maximizeRestoreWindow}
    />
    <img
      src="images/window-controls/close-{$showDarkMode ? 'dark' : 'light'}.svg"
      alt="Close"
      on:click={closeWindow}
    />
  </div>
</div>

<style lang="scss">
  @import "../../styles/variables.scss";

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
    background-color: var(--bg-color);
    cursor: pointer;

    border-radius: 5px;

    &:active {
      background-color: var(--focus-color);
    }
    &:hover:not(:active) {
      background-color: var(--hover-color);
    }
  }

  p {
    margin: 0;
  }

  .menu-container {
    position: relative;
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
  }

  .title-bar {
    display: flex;
    align-items: center;
    height: 32px;
    padding: 5px;
    background-color: var(--bg-color);

    position: sticky;
    top: 0;

    width: 100%;
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
    flex-direction: column;

    .header {
        font-weight: bold
    } 
  }

  .window-controls {
    @include title-bar-image;

    img {
      border-radius: 100%;
      padding: 5px;
      margin: 0;

      &:active {
        background-color: var(--focus-color);
      }
    }
  }
</style>
