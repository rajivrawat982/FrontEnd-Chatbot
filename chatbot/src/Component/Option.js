import React, { Component } from 'react';
import '../Css/Option.css';

class Option extends Component {
    state = {
        display_option: false
    }
    
    render() {
        console.log("option render()");
        return (
            <div>
            {this.state.display_option ? 
            <div>
                <p className="option">
                    <span className="iconify" data-icon="carbon:dot-mark" data-inline="true" style={{color: "#FF8D2B", marginRight: "4px"}}></span> 
                    {this.props.children} 
                    
                </p>                
            </div> : null }

            </div>
        )
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState(
                {display_option: true}
            )
        }, this.props.rendertime)
    }
}

export default Option;
