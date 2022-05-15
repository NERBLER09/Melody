<div class="title-bar" data-tauri-drag-region>
    <div class="start">
        <button class="title-button"><img src="" alt="Search"></button>
    </div>
    <div class="title">
        <button class="nav-button">
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
        <button class="title-button"><img src="" alt="Menu"></button>
    </div>
    <div class="window-controls"></div>
</div>

<style lang="scss">
    p {
        margin: 0;
    }

    @mixin button {
        border: none;
        height: 40px;
        padding: 5px, 10px, 5px, 10px;
        background-color: white;

        &:click{
            background-color: lightgrey; 
        }
    }

    .title-bar {
        display: flex;
        align-items: center;
        height: 50px;
    } 

    button.title-button{
        @include button;
    }
    .nav-button {
        @include button;
    }
    
    .title {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        cursor: pointer;
    }
</style>