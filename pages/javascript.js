import React from "react";
import PersistentDrawerLeft from "./components/sidebar";

function Javascript() {
	let data = [
		{
			headerData: {
				title: "Main",
				DATAS: ["abc", "b", "c", "abc", "b", "abc", "b", "b"],
			},
		},
		{
			headerData: {
				title: "Main",
				DATAS: ["abc", "b", "c", "abc", "b", "abc", "b", "abc"],
			},
		},
	];
	return <PersistentDrawerLeft data={data} />;
}

export default Javascript;
