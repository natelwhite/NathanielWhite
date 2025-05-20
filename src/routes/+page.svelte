<script lang="ts">
// custom components
import HyperlinkDropdown from '$lib/HyperlinkDropdown.svelte'
import CopyButtonDropdown from '$lib/CopyButtonDropdown.svelte'
import Article from '$lib/Article.svelte'
import Project from '$lib/Project.svelte'

// markdown for academic history
import snhuMD from './snhu.md?raw';
import msuMD from './msu.md?raw';

// markdown for projects
import furthingsMD from './furthings.md?raw';
import drawMachineMD from './drawMachine.md?raw';
import helleboreMD from './hellebore.md?raw';
import palettableMD from './palettable.md?raw';

import { resizeMain } from '$lib/index.ts';
import { onMount } from 'svelte';
onMount(() => {
	resizeMain();
});
</script>

<nav>
	<HyperlinkDropdown 
		dropperText="academic-history"
		contents={[
			{href:"#southern-new-hampshire-university/", html:"southern-new-hampshire-university/"},
			{href:"#missouri-state-university/", html:"missouri-state-university/"},
		]}
	/>
	<HyperlinkDropdown 
		dropperText="projects"
		contents={[
			{href:"#furthings/", html:"furthings/"},
			{href:"#draw-machine/", html:"draw-machine/"},
			{href:"#hellebore/", html:"hellebore/"},
			{href:"#palettable/", html:"palettable/"},
		]}
	/>
	<CopyButtonDropdown 
		dropperText="socials"
		buttons={[ {
				copyValue:"natelwhite01@gmail.com",
				text:"email",
			}, {
				copyValue:"deadlyorchard",
				text:"discord",
		}, ]}
	/>
</nav>

<main>
	<h1 class="pageTitle custom">./NathanielWhite/</h1>
	<h1 class="section-hdr custom">academic-history/</h1>
	<section>
		<Article 
			title="southern-new-hampshire-university/"
			md={snhuMD}/>
		<Article 
			title="missouri-state-university/"
			md={msuMD}/>
	</section>
	<section>
		<h1 class="section-hdr">projects/</h1>
		<Project 
			title="furthings/"
			md={furthingsMD}
			showcase={[ 'furthings_0.png', 'furthings_1.png', 'furthings_2.png' ]}
			link={{href:"https://github.com/furthings/furthings.art", html:"github"}}/>
		<Project 
			title="draw-machine/"
			md={drawMachineMD}
			showcase={[ 'drawMachine_0.png', 'drawMachine_1.gif', 'drawMachine_2.png' ]}
			link={{href:"https://github.com/natelwhite/DrawMachine", html:"github"}}/>
		<Project 
			title="hellebore/"
			md={helleboreMD}
			showcase={[ 'hellebore_0.png', 'hellebore_1.gif', 'hellebore_2.png' ]}
			link={{href:"https://itch.io/jam/queer-winter-jam-2024-25/rate/3245651", html:"itch.io"}}/>
		<Project 
			title="palettable/"
			md={palettableMD}
			showcase={[ 'palettable_0.png', 'palettable_1.png', 'palettable_2.png' ]}
			link={{href:"https://github.com/natelwhite/Palettable", html:"github"}}/>
	</section>
</main>

<style>
main {
	background-color: var(--black);

	border-left: var(--orange) 2px solid;
	line-height: 1.5;
}
nav {
	position: fixed;
	display: grid;
	width: max-content;
	height: 100%;
	align-content: center;
}

.pageTitle {
  color: var(--orange);

  margin: 0;
  text-indent: var(--indent);
}

section {
	background-color: var(--black);
}

.section-hdr {
  font-size: 21pt;
  color: var(--header);
  background-color: var(--black);

  margin: 0;
  line-height: 2;
  padding-left: calc(var(--indent) * 2);
}

@media screen and (min-device-width: 601px) and (max-device-width: 1200px) {
	main {
		width: 100vw;
		margin-left: 0 !important;
		border: none;
	}
	nav {
		position: relative;
		width: 100vw;
		top: 0;
		transform: none;
	}
}

@media screen and (max-device-width: 600px) {
	main {
		width: 100vw;
		margin-left: 0 !important;
		border: none;
	}
	nav {
		position: relative;
		width: 100vw;
		top: 0;
		transform: none;
	}
	.pageTitle {
		text-align: center;
	}
	.section-hdr {
		text-align: center;
	}
}
</style>
