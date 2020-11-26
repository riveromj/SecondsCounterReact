import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";
import "../../styles/index.scss";

//create your first component

export function Home() {
	return (
		<div className="First-container row">
			<div className="col-sm-12">
				<div className="container-fluid card">
					<h1>
						<i className="fab fa-react react" />
						Counter with React
					</h1>

					<div className="row justify-content-center time container-md">
						<i className="far fa-clock icono boxnumber" />
						<SecondsCounter n={100000000} />
						<SecondsCounter n={10000000} />
						<SecondsCounter n={1000000} />
						<SecondsCounter n={100000} />
						<SecondsCounter n={10000} />
						<SecondsCounter n={1000} />
					</div>
				</div>
			</div>
		</div>
	);
}
