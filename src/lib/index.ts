// place files you want to import through the `$lib` alias in this folder.
export function resizeMain(): void {
	const navWidth: number = document.getElementsByTagName("nav")[0].getBoundingClientRect().width;
	const paddingSum: number = 16;
	const main: HTMLElement = document.getElementsByTagName("main")[0];
	main.style.marginLeft = `calc(${navWidth}px + ${paddingSum}px)`;
	main.style.width = `calc(100vw - (${navWidth}px+${paddingSum}px))`;
}
