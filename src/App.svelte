<script lang="ts">
import { FileEntry, readDir } from "@tauri-apps/api/fs";
import { audioDir } from "@tauri-apps/api/path";
import { onMount } from "svelte";
import * as _ from "lodash"

import About from "./components/prompts/About.svelte";
import TitleBar from "./components/titlebar/TitleBar.svelte";
import { showDarkMode, shownUi } from "./data/controller";
import { music } from "./data/data";
import { showAboutPrompt } from "./data/prompts";
import Albums from "./pages/Albums.svelte";
import Empty from "./pages/Empty.svelte";
import Home from "./pages/Home.svelte";
import Playlists from "./pages/Playlists.svelte";
import Search from "./pages/Search.svelte";
import Songs from "./pages/Songs.svelte";
import { addMetadataToSongsList } from "./api/local";

onMount(async() => {
	const musicDir = await audioDir()
	let musicTemp = await readDir(musicDir, {recursive: true})
	
	const isMusicFile = (file: FileEntry): boolean => {
		const re = /(?:\.([^.]+))?$/ // Gets the file extension 
		const fileExt = re.exec(file.name)[0]
		if(fileExt === ".mp3"  || fileExt === ".flac"){
			return true
		}

		return false	
	}

	const isFile = (fileName: string): boolean => {
		const re = /(?:\.([^.]+))?$/ // Gets the file extension 
		const fileExt = re.exec(fileName)[0]

		return fileExt !== ""

	}

	const addSubItems = (object: FileEntry[]) => {
		for(let item of object) {
			const isItemHidden = item.name[0] === "."
			if(item?.children !== [] && !isItemHidden && !isFile(item.name)) {
				const subItemsTemp: FileEntry[] = []

				for(const subItem of item.children) {
					subItemsTemp.push(subItem)	
					if(subItem?.children !== [] && !isItemHidden && !isFile(subItem.name)) {
						addSubItems(item?.children)
					}
				}

				musicTemp.push(...subItemsTemp)
			}
		}
	}

	addSubItems(musicTemp)
	musicTemp = musicTemp.filter(isMusicFile)
	musicTemp = musicTemp.filter((file) => isFile(file.name))
	musicTemp = _.uniq(musicTemp)

	addMetadataToSongsList(musicTemp).then((value) => {
		console.table(value)
		music.set(value)
	})
}) 
</script>

<TitleBar/>
<main class="{$showAboutPrompt ? "about-shown" : ""} {$showDarkMode ? "dark-mode" : ""}">
	{#if $music.length === 0}
		<Empty/>
	{:else}
		{#if $shownUi === "home"}
			<Home/>	
		{:else if $shownUi === "songs"}
			<Songs/>
		{:else if $shownUi === "albums"}
			<Albums/>
		{:else if $shownUi === "playlists"}
			<Playlists/>
		{:else if $shownUi === "search"}
			<Search/>
		{/if}
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
		overflow: auto;
	}
</style>