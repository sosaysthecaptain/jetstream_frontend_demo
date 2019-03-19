import React, { Component } from 'react';

import * as b from 'bloomer';

import SelectorPanel from './components/SelectorPanel.js'
import MainDisplay from './components/MainDisplay.js'

import sample_data from './sample_data.json';
import './App.scss';
import "../node_modules/prismjs/themes/prism.css"

class App extends Component {
	state = {
		sample_data: {},
		field0: "message",
		pair_selectors: [
			{after: "an hour ago"},
			{message: ""}
		]
	}
	
	render() {
		
		return (
			<div>
				<b.Hero isColor="success" isSize="small">
					<b.HeroBody>
						<b.Title isSize="4">Jetstream</b.Title>
					</b.HeroBody>
				</b.Hero>
			
			
			<b.Columns>
				<b.Column isSize='1/4'>
					<SelectorPanel pairs={this.state.pair_selectors}></SelectorPanel>
				</b.Column>

				<b.Column>
					<MainDisplay sample_data={sample_data.rows} field0={this.state.field0}></MainDisplay>
				</b.Column>

			</b.Columns>


			{/* // <div>
			// 	<div style={{width: "300px", backgroundColor: "lightgreen"}}>
			// 		asdasdsa
			// 		<SelectorPanel></SelectorPanel>
			// 	</div> */}


			</div>
		);
	}

	componentDidMount() {
		this.setState({sample_data: sample_data})
	}
}

export default App;
