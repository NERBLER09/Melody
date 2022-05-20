<script lang="ts">
import { showAboutPrompt } from "../../data/prompts";

  const handleAboutPrompt = () => {
    showAboutPrompt.set(true)
  }
</script>

<div class="menu">
  <div class="theme-selector">
      <img src="images/menu-items/theme-system.svg" alt="">
      <img src="images/menu-items/theme-white.svg" alt="">
      <img src="images/menu-items/theme-dark.svg" alt="">
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
    position: relative;

    right: 25%;

    border-radius: 20px;

    background-color: $bg-color;

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
        background-color: $focus-color;
      }
      &:hover:not(:active) {
        background-color: $hover-color;
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
