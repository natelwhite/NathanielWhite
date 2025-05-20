function resizeMain() {
	const navWidth = document.getElementsByTagName("nav")[0].getBoundingClientRect().width;
	const main = document.getElementsByTagName("main")[0];
	const paddingSum = 16;
	main.style.marginLeft = `calc(${navWidth}px + ${paddingSum}px)`;
	main.style.width = `calc(100vw - (${navWidth}px+${paddingSum}px))`;
}
