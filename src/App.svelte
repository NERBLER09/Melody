<script lang="ts">
import About from "./components/prompts/About.svelte";
import TitleBar from "./components/titlebar/TitleBar.svelte";
import { showDarkMode } from "./data/controller";
import { showAboutPrompt } from "./data/prompts";
import Empty from "./pages/Empty.svelte";
</script>

<main class="{$showAboutPrompt ? "about-shown" : ""} {$showDarkMode ? "dark-mode" : ""}">
	<TitleBar/>
	<Empty/>
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