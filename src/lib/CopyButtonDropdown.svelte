<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
	import CopyButton from '$lib/CopyButton.svelte'
	let { 
		dropperText,
		buttons
	}: {
		dropperText: string
		buttons: CopyButtonInterface[]
	} = $props();
	interface CopyButtonInterface {
		copyValue: string;
		text: string;
	};
	let dropped: boolean = $state(false);
	let classState: string = $derived(dropped ? "dropped" : "");
</script>


<div class={classState}>
	<button onclick={() => {dropped = !dropped}}>
		{#if dropped}
			<Fa icon={faFolderOpen} />
		{:else}
			<Fa icon={faFolder} />
		{/if}
		{ dropperText }
	</button>
	<ul>
		{#each buttons as button}
			<li>
			<CopyButton
				text={button.text}
				copyValue={button.copyValue}/>
			</li>
		{/each}
	</ul>
</div>

<style>
div {
	background-color: var(--black);
}
button {
	width: 100%;
	margin: 0;
	padding: 0 8px;
	line-height: 3;
	font-size: 12pt;

	text-align: left;
	color: var(--paragraph);
	background-color: var(--black);
	border: none;
	border-radius: 0;
}
button {
	border-bottom: 1px solid var(--orange);
}
.dropped button {
	color: var(--orange);
}

button:hover {
	background-color: var(--grey);
	color: var(--header);
	cursor: pointer;
}

ul {
	display: none;
	margin: 0 0 0 var(--indent);
	padding: 0;

	list-style-type: none;
	background-color: var(--black);
}
.dropped ul {
	display: grid;
}
@media screen and (min-device-width: 601px) and (max-device-width: 1200px) {
	button {
		border: none;
		line-height: 3;
	}
}
@media screen and (max-device-width: 600px) {
	button {
		text-align: center;
		border: none;
		line-height: 3;
		background-color: var(--grey);
	}
	button:hover {
		background-color: var(--light-grey);
	}
}
</style>
