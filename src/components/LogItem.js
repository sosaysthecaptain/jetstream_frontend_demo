import React, { Component } from 'react'

import * as b from 'bloomer';
import Moment from 'moment';

export class LogItem extends Component {

	state = {
		expanded: false
	}
	
	render() {
		const human_date = Moment.unix(this.props.log.created).format('MMMM Do, h:mm:ss a')	
		let ret = this.get_not_expanded()
		
		
		if (this.state.expanded) {
			ret = this.get_expanded()
		} 

		return (
			
			<b.Container onClick={this.click_handler} style={card_style}>
				<div className="inline" style={{width: "200px", verticalAlign: "top"}}>{human_date}</div>
				
				<div className="inline">{ret}</div>
			</b.Container>
		)

        
	}
	
	click_handler = (e) => {
		this.setState({expanded: (!this.state.expanded)})
	}

	get_not_expanded() {
		return this.props.log.tags.message
	}

	get_expanded() {
		const json = JSON.stringify(this.props.log, null, 4)
		return (<pre style={json_style}>{json}</pre>)
	}

	componentDidMount() {
		this.setState({expanded: false})
	}
}

const json_style = {
	
	backgroundColor: "white",
	lineHeight: "10pt",
	
}

const card_style = {
    border: "none",
	fontSize: "10pt",
}
export default LogItem


