import React from "react";
import { Button, Input } from "reactstrap";
import "../styles/ServicePage.css";

class EmailGen extends React.Component {
    constructor () {
        super ()
        this.state = {
            previousMail: "",
            bulletPoints: "",
            reply: "Dear Saber, Thanks for inviting me to your wedding ! Will surely attend it.Thanks.Regards"
        }
    }
    render () {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState ({[name]: value})
        }
        return (
            <div>
                <div className="page-heading">EMAIL GENERATION</div>
                <div className="page-description">
                    The Saber writing will allow you to generate full fledged 
                    emails out of bullet points using GPT3’ s advance text 
                    generation AI.  
                </div>
                <div className="page-container">
                    <div className="page-card">
                        <div className="page-card-heading">ENTER THE INPUT HERE</div>
                        <div className="page-card-label">Enter Previous Email (optional)</div>
                        <Input className="mailBox" placeholder="Dear Saber, Thank you for writing to us ...." onChange={onChange} value={this.state.previousMail} name="previousMail" />
                        <div className="page-card-label">Enter Bullet Points</div>
                        <Input placeholder="eg. Meeting, 8 am, tomorrow" onChange={onChange} value={this.state.bulletPoints} name="bulletPoints" />
                        <Button className="page-action-buttons">
                            Generate Email
                        </Button>
                    </div>
                    <div className="page-card">
                        <div className="page-card-heading">SEE THE RESULTS HERE</div>
                        <div className="page-card-label">Reply</div>
                        <Input disabled={true} className="mailBox" value={this.state.reply} />
                        <Button className="page-action-buttons">
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmailGen