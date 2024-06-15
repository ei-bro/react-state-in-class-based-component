import React, { Component } from "react";

class MyWillMountAndDidMount extends Component {
	constructor() {
		super();
		this.state = {
			randomText: "Loading ...",
		};
	}



	componentDidMount() {
		alert("component mounted")
	}

	render() {
		return (
			<div>
				<h1>Component Will Mount & Component Did Mount Example</h1>
				<br />
				<h1>{this.state.randomText}</h1>
			</div>
		);
	}
}

export default MyWillMountAndDidMount;
