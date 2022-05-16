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
    <li class="menu-item">About Melody</li>
  </ui>
</div>

<style lang="scss">
  .menu {
    position: relative;

    right: 25%;

    border-radius: 20px;

    background-color: white;

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
        background-color: hsl(0, 0%, 93%);
      }
      &:hover {
        background-color: hsl(0, 0%, 83%);
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
