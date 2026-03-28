import { proxy } from "valtio";

const state = proxy({
	intro: true,
	color: "#8643D7",
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: "./logo-white.png",
	fullDecal: "./threejs.png",
});

export default state;
