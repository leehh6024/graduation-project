import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useState } from "react";

export default function Temp(props) {
	const { state, setState } = useContext(GlobalContext);
	const eachdata = state.selected;

	return (
		<>
			<h1>{state.selected[0].title}</h1>
			<h1>{state.selected[0].class}</h1>
			<Image src={state.selected[0].img}></Image>
		</>
	);
}

function Image(props) {
	const [img, setImage] = useState(null);
	useEffect(() => {
		setImage(props.img);
	}, [props.src]);
	return <img src={img} style={{ width: "10em", height: "10em" }}></img>;
}
