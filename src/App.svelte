<script lang="ts">
import About from "./components/prompts/About.svelte";
import TitleBar from "./components/titlebar/TitleBar.svelte";
import { showAboutPrompt } from "./data/prompts";
import Empty from "./pages/Empty.svelte";
</script>

<main class="{$showAboutPrompt ? "about-shown" : ""}">
	<TitleBar/>
	<Empty/>
</main>

{#if $showAboutPrompt}
	<About/>
{/if}

<style lang="scss">
	.about-shown {
		filter: blur(5px);
	}
</style>