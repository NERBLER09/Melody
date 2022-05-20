<script lang="ts">
import { showDarkMode } from "../../data/controller";

import { showAboutPrompt } from "../../data/prompts";

  const handleAboutPrompt = () => {
    showAboutPrompt.set(true)
  }

  const setThemeDark = () => showDarkMode.set(false)
  const setThemeLight = () => showDarkMode.set(true)
  const setThemeSystem = () => {
    const isUsingDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    showDarkMode.set(isUsingDark)
  }
</script>

<div class="menu {$showDarkMode ? "dark-mode" : ""}">
  <div class="theme-selector">
      <img src="images/menu-items/theme-system.svg" alt="system theme" on:click="{setThemeSystem}">
      <img src="images/menu-items/theme-white.svg" alt="light theme" on:click="{setThemeLight}">
      <img src="images/menu-items/theme-dark.svg" alt="dark theme" on:click="{setThemeDark}">
  </div>
  <hr>
  <ui>
    <li class="menu-item">Preferences</li>
    <li class="menu-item">Manage Spotify Account</li>
    <hr>
    <li class="menu-item" on:click="{handleAboutPrompt}">About Melody</li>
  </ui>
</div>

<style lang="scss">
  @import "../../styles/variables.scss";

  .menu {
    position: absolute;

    left: -90px;

    border-radius: 20px;

    background-color: var(--bg-color);

    box-shadow: 0px 1px 1px 1px black;

    padding: 10px;

    width: 23ch;

    li {
      list-style-type: none;

      padding-left: 10px;
      padding-right: 5px;
      padding-top: 10px;
      padding-bottom: 10px;

      border-radius: 5px;

      margin-top: 5px;
      margin-bottom: 5px;

      &:active {
        background-color: var(--focus-color);
      }
      &:hover:not(:active) {
        background-color: var(--hover-color);
      }
    }

    .theme-selector {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        img {
            width: 50px;
            height: 50px;
        }

        img:first-child {
            rotate: -45deg;
        }
    }
  }
</style>
