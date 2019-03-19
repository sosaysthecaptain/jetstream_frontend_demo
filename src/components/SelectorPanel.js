import React, { Component } from 'react'

import * as b from 'bloomer';
import Selector from './Selector';

export class SelectorPanel extends Component {
  
  
	render() {
		let selectors = []
		this.props.pairs.forEach((pair) => {
			selectors.push(<Selector delete_me={this.props.delete_me} pair={pair} options_list={this.props.options_list}></Selector>)
		})



		return (
			<div style={{marginTop: "20px", marginLeft: "10px"}}>
				{selectors}
				<b.Button style={{marginTop: "20px", marginLeft: "5px", float: "left"}}isColor="primary">Search</b.Button>
				<b.Button onClick={this.props.add_another} style={{marginTop: "20px", marginLeft: "20px", float: "left"}}>Add another constraint</b.Button>
			</div>
		)
	}
}

export default SelectorPanel
