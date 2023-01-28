import React from "react";
import { Card, TextField, Button } from "ui-neumorphism";
import "../styles/ServicePage.css";

class SocialMedia extends React.Component {
    constructor () {
        super ()
        this.state = {
            title: "",
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
                <div className="page-heading">SOCIAL MEDIA ADVERTS</div>
                <div className="page-description">
                    Looking for some creative social media advert ideas for your online
                    campaigns on Facebook, Twitter or Instagram? We got you.
                </div>
                <div className="page-container">
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">WHAT IS YOUR AD CAMPAIGN ABOUT?</div>
                        <div className="page-card-label">Subject or Title</div>
                        <TextField placeholder="eg. Samsung S12 Mobile Phone" onChange={onChange} value={this.state.title} name="title" />
                        <div>Describe the subject or title for the ad campaign.</div>
                        <Button>
                            Generate Ad
                        </Button>
                    </Card>
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">SEE THE RESULTS HERE</div>
                        <div className="page-card-label">Reply</div>
                        <TextField disabled={true} height={320} value={this.state.reply} />
                        <Button>
                            Copy
                        </Button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default SocialMedia