<script lang="ts">
import About from "./components/prompts/About.svelte";
import TitleBar from "./components/titlebar/TitleBar.svelte";
import { showDarkMode, shownUi } from "./data/controller";
import { showAboutPrompt } from "./data/prompts";
import Albums from "./pages/Albums.svelte";
import Empty from "./pages/Empty.svelte";
import Home from "./pages/Home.svelte";
import Playlists from "./pages/Playlists.svelte";
import Songs from "./pages/Songs.svelte";
</script>

<main class="{$showAboutPrompt ? "about-shown" : ""} {$showDarkMode ? "dark-mode" : ""}">
	<TitleBar/>
	<Empty/>

	{#if $shownUi === "home"}
		<Home/>	
	{:else if $shownUi === "songs"}
		<Songs/>
	{:else if $shownUi === "albums"}
		<Albums/>
	{:else if $shownUi === "playlists"}
		<Playlists/>
	{/if}
</main>

{#if $showAboutPrompt}
	<About/>
{/if}

<style lang="scss">
	@import "./styles/variables.scss";

	.about-shown {
		filter: blur(5px);
	}
	main {
		background-color: var(--bg-color);	
		height: 100%;
	}
</style>