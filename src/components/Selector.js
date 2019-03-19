import React, { Component } from 'react'
import * as b from 'bloomer';


export class Selector extends Component {
  render() {
    let pair = this.props.pair
    
    // Options list with correct option selected
    const options_list = this.generate_options_list(this.props.pair.key)

    return (
            <div>
                <b.Container style={card_style}>

                    <b.Field className="inline" style={{padding: "5px", width: "175px"}}>
                        {/* <b.Label>Select:</b.Label> */}
                        <b.Control>
                            <b.Select>
                                {options_list}
                            </b.Select>
                        </b.Control>
                    </b.Field>

                    <b.Field  className="inline" style={{padding: "5px"}}>
                        {/* <b.Label>Select:</b.Label> */}
                        <b.Control>
                            <b.Input value={this.props.pair.value} placeholder="enter query here">
                                
                            </b.Input>
                        </b.Control>
                    </b.Field>

                    <b.Delete onClick={this.props.delete_me} value={this.props.pair.key} className="inline" style={{marginLeft: "10px", marginTop: "12px"}}>

                    </b.Delete>
                </b.Container>
            
            </div>
        )
    }

    generate_options_list(selected_key) {
        const options = []
        this.props.options_list.forEach((option) => {
            if (selected_key == option) {
                options.push(<option selected="selected"> {option}</option>)
            } else {
                options.push(<option> {option}</option>)
            }
        })

        return options
    }
}



const card_style = {
    // marginTop: "10px",
    // marginBottom: "10px"
}

export default Selector
