import React, { Component } from "react";
import Bob from "./Bob";

class PassingPropsToState extends Component {
	constructor(props) {
		super();
		this.state = {
			name: "Almaz",
			group: 2,
			batch: props.batch,
			sampletext: "sample text"
		};
	}



	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
				<h2>{this.state.group}</h2>
				<h3>{this.state.batch}</h3>
				<Bob text={this.state.name} />
			</div>
		);
	}
}

export default PassingPropsToState;