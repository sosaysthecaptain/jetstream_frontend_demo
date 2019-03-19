import React, { Component } from 'react'

import * as b from 'bloomer';
import Selector from './Selector';

export class SelectorPanel extends Component {
  
  
	render() {
		let selectors = []
		this.props.pairs.forEach((pair) => {
			selectors.push(<Selector pair={pair}></Selector>)
		})



		return (
			<div>
				{selectors}
			</div>
		)
	}
}

export default SelectorPanel
