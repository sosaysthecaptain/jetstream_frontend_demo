import React, { Component } from 'react';

import * as b from 'bloomer';

import SelectorPanel from './components/SelectorPanel.js'
import MainDisplay from './components/MainDisplay.js'

import sample_data from './sample_data.json';
import './App.scss';

class App extends Component {
	constructor(props) {
		super(props)

		this.delete_me = this.delete_me.bind(this)
		this.add_another = this.add_another.bind(this)
	}
	
	state = {
		sample_data: {},
		field0: "message",
		pair_selectors: [
			{key: "after", value: "an hour ago"},
			{key: "message", value: ""},
		],
		options_list: ["after", "message", "fiber_id", "level", "app_version", "server_call_id", "current_user_id", "environment_name", "current_user_email"]
	}
	
	render() {
		
		return (
			<div>
				<b.Hero isColor="primary" isSize="small">
					<b.HeroBody>
						<b.Title isSize="4">Jetstream</b.Title>
					</b.HeroBody>
				</b.Hero>
			
			
			<b.Columns>
				<b.Column isSize='1/3'>
					<SelectorPanel pairs={this.state.pair_selectors} options_list={this.state.options_list} delete_me={this.delete_me} add_another={this.add_another}></SelectorPanel>
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

	delete_me(e) {
		
		let index = 0
		let pair_selectors = JSON.parse(JSON.stringify(this.state.pair_selectors))
		pair_selectors.forEach((pair) => {
			if (pair.key === e.target.value) {
				pair_selectors.splice(index, 1 );
			}
			index += 1
		})
		this.setState({pair_selectors: pair_selectors})
	}

	add_another() {
		const new_pair = {key: "", value: ""}
		let pair_selectors = JSON.parse(JSON.stringify(this.state.pair_selectors))
		pair_selectors.push(new_pair)
		this.setState({pair_selectors: pair_selectors})
	}
}

export default App;
