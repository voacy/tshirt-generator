import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
	const snap = useSnapshot(state);
	return (
		<div className="absolute left-full ml-3">
			<SketchPicker
				color={snap.color}
				disableAlpha
				onChange={(color) => (state.color = color.hex)}
				presetColors={[
					"#cf1c0e",
					"#82ae78",
					"#1977b9",
					"#2ec16c",
					"#7e48e5",
					"#b5aea5",
					"#ecbd3e",
					"#d76b0a",
					"#cca1b0",
					"#24f1fc",
					"#f42dee",
					"#ca5813",
				]}
			/>
		</div>
	);
};

export default ColorPicker;
