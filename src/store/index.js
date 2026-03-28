import { proxy } from "valtio";

const state = proxy({
	intro: true,
	color: "#1E3A5F",
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: "./logo-sm.png",
	fullDecal: "./threejs.png",
});

export default state;
