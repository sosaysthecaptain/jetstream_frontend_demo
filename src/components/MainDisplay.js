import React, { Component } from 'react'

import * as b from 'bloomer';

import LogItem from './LogItem'



export class MainDisplay extends Component {
	render() {

		const logs = []

		this.props.sample_data.forEach((log) => {
			logs.push(<LogItem log={log}></LogItem>)
		})
		
		const header = this.get_header_object()

		return (
			<div>
				
				<div style={{margin: "10px"}}>
					{header}
					{logs}				
				</div>
			</div>
		)
	}

	get_header_object() {
		return (
			<div>
				<b.Title isSize="6" className="inline" style={{width: "200px"}}>timestamp</b.Title>
				<b.Title isSize="6" className="inline">{this.props.field0}</b.Title>

			</div>
		)
	}

	
}

export default MainDisplay
