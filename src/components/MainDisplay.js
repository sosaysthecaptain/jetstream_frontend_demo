import React, { Component } from 'react'

import * as b from 'bloomer';
import Moment from 'moment';

export class MainDisplay extends Component {
	render() {

		const logs = []

		this.props.sample_data.forEach((log) => {
			const new_log = this.generate_log_object(log)
			logs.push(new_log)
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

	generate_log_object(log) {
		const human_date = Moment.unix(log.created).format('MMMM Do, h:mm:ss a')
		
		
		return (
			<b.Container style={card_style}>
			
				
				{/* <div className="inline" style={{width: "200px"}}>{log.created}</div> */}
				<div className="inline" style={{width: "200px"}}>{human_date}</div>
				{/* <div className="inline" style={{width: "100px", fontWeight: "bold"}}>{this.props.field0}</div> */}
				<div className="inline" style={{display: "inline-block"}}>{log.tags.message}</div>
				
			</b.Container>
		)
	}

	get_header_object() {
		return (
			<div>
				<b.Title isSize="6" className="inline" style={{width: "200px"}}>timestamp</b.Title>
				<b.Title isSize="6" className="inline" style={{width: "200px"}}>{this.props.field0}</b.Title>

			</div>
		)
	}

	
}

const card_style = {
	border: "none",
	fontSize: "10pt"
}

export default MainDisplay
