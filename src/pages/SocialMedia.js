import React from "react";
import { Input, Label } from "reactstrap";
import { Card, Button, Tooltip, Switch } from "ui-neumorphism";
import "../styles/ServicePage.css";

class SocialMedia extends React.Component {
    constructor () {
        super ()
        this.state = {
            title: "",
            reply: "Dear Saber, Thanks for inviting me to your wedding ! Will surely attend it.Thanks.Regards",
            tone: "",
            seo: false
        }
    }
    render () {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState ({[name]: value})
        }
        const onChangeSeo = (event) => {
            this.setState ({seo: event.checked})
        }
        const toggleAdvanced = () => {
            this.setState ({showAdvancedOptions: !this.state.showAdvancedOptions})
        }
        return (
            <div>
                <div className="page-heading">
                <Tooltip bottom content={<div>Looking for some creative social media advert ideas for your online
                    campaigns on Facebook, Twitter or Instagram? We got you.</div>}>
                    SOCIAL MEDIA ADVERTS
                </Tooltip>
                </div>
                <div className="page-container">
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">WHAT IS YOUR AD CAMPAIGN ABOUT?</div>
                        <div className="page-card-label">Subject or Title</div>
                        <Input className="input" placeholder="eg. Samsung S12 Mobile Phone" onChange={onChange} value={this.state.title} name="title" />
                        <div>Describe the subject or title for the ad campaign.</div>
                        <div onClick={toggleAdvanced} className="advanced-options">Advanced Options <i style={{padding:"5px"}} className="fa fa-angle-down"></i></div>
                        <div className={this.state.showAdvancedOptions ? `` : `display-options`}>
                            <Switch onChange={onChangeSeo} color="var(--success)" value={this.state.seo} /> Use keyword optimization for SEO? <br /> 
                            <Label style={{margin:"10px"}}>Tone of the Email</Label>
                            <Input style={{width:"250px", margin: "0px 0px 10px 10px"}} onChange={onChange} value={this.state.tone} name="tone" className="input" type="select">
                                <option value="Friendly">Friendly</option>
                                <option value="Professional">Professional</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Sales">Sales</option>
                            </Input>
                        </div>
                        <Button style={{marginTop: "1rem", width:"100%"}}>
                            Generate Ad
                        </Button>
                    </Card>
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">SEE THE RESULTS HERE</div>
                        <div className="page-card-label">Reply</div>
                        <Input className="input mailBox" disabled={true} height={320} value={this.state.reply} type="textarea" />
                        <Button style={{marginTop: "1rem"}}>
                            Copy
                        </Button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default SocialMedia