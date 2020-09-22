import React, { Component } from 'react';
import '../Css/Chat.css';
import Option from './Option';



class Chatbot extends Component {
    state = {
        color: "white",
        display_top: false,
        display_bottom: false,
        display_button: false

    }
        

    render() {
        console.log("chatbot render()")

        return (
            <div className="container-fluid">
                <div className="chatbot">
                    <div className="topSection" style={{backgroundColor:  this.state.color}}>
                        { this.state.display_top ? 
                        <div className="upperPara">
                        <div >
                            <h2 style={{marginBottom: "0px"}}>IRIS</h2>
                            <h3 style={{marginTop: "3px", display: 'block'}}>Hello <span className="iconify" data-icon="emojione-waving-hand" data-inline="true" style={{marginLeft: "10px"}}></span></h3>
                            
                            <p>
                                <h4 style={{marginBottom: "0px"}}>I am Iris, a Virtual Assistant</h4>
                                <h4 style={{marginTop: "0px"}}>How may I help you?</h4>
                            </p>
                        </div>
                        
                        <div id="avatar"></div>
                        </div> : null
                        }
                    </div>

                    { this.state.display_bottom ?
                    <div className="bottomSection">
                        <div className="bottomChild">
                            <div className="transformChild">
                            <div id="avatarCopy"></div>
                            <h5 style={{marginLeft: "20px", marginBottom: "0px"}}>Frequently Asked Questions 
                                <span class="iconify" data-icon="el:question-sign" data-inline="true" style={{color: "orange", marginLeft: "5px"}}></span>
                            </h5>
                            
                            <div>
                            <Option rendertime={2000}>Can I Redeem my FB before the Original term?</Option>
                            <Option rendertime={4000}>How do I pay my Credit card bill?</Option>
                            <Option rendertime={6000}>How can I get my Account Statement?</Option>
                            <Option rendertime={8000}>What is the tenure of Fixed Deposit?</Option>
                            </div>
                            </div>
                            
                            {this.state.display_button ?
                                <button  id="ask" className="askMe">
                                <span className="iconify" data-icon="mdi-light:message-text" data-inline="true" style={{marginRight: "4px"}}></span>
                                Start a new Conversation
                                </button> : null }
                            
                        </div>
                    </div> : null
                    }
                </div>
            </div>
        )
    }

    componentDidMount () {
        
        setTimeout(() => {
            this.setState(
                {color: "#FA7111"}
            )
        }, 1000)
        setTimeout(() => {
            this.setState(
                {display_top: true}
            )
        }, 2000)
        
        setTimeout(() => {
            this.setState(
                {display_bottom: true}
            )
        }, 3500)
        setTimeout(() => {
            this.setState(
                {display_button: true}
            )
        }, 13000)
    };
}

export default Chatbot;
