import React from "react";
import { Input, Label } from "reactstrap";
import Slider from "react-input-slider";
import { Button, Tooltip, Switch } from "ui-neumorphism";
import "../styles/ServicePage.css";
import { coldEmail } from "../backend-calls/services";

class ColdEmail extends React.Component {
    constructor () {
        super ()
        this.state = {
            companyName: "",
            serviceDescription: "",
            reply: "",
            tone: "",
            seo: false,
            words: 150
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
        const submitEmail = async () => {
            const { companyName, serviceDescription} = this.state
            const res = await coldEmail(companyName, serviceDescription)
            if(res.error){
                alert(res.msg)
            }else{
                this.setState ({reply: res.data})
            }
        }
        const copyToClipBoard = () => {
            navigator.clipboard.writeText(this.state.reply)
        }
        return (
            <div>
                <div className="page-heading">
                <Tooltip bottom content={<div>This is perfect for marketing agents or companies who need fresh ideas
                    daily on cold email content that is created by AI technology.  </div>}>
                    <b>COLD EMAIL TEMPLATE</b>
                </Tooltip>
                </div>
                <div className="page-container">
                    <div className="page-card card">
                        <div className="page-card-heading"><b>Enter the email details here:</b></div>
                        <div className="page-card-label">Company Name</div>
                        <Input className="input" placeholder="eg. Saber AI" onChange={onChange} value={this.state.companyName} name="companyName" />
                        <div className="page-card-label">Services Provided</div>
                        <Input className="input mailBox" height={320} placeholder="eg. AI based email and content writing" onChange={onChange} value={this.state.serviceDescription} name="serviceDescription" type="textarea" />
                        <div>Describe the service you provide for the email content.</div>
                        <div onClick={toggleAdvanced} className="advanced-options" style={{boxShadow:"5px 5px 12px #BEC8E4, -4px -4px 10px #FFFFFF", padding: "0.5rem 1rem", borderRadius:"0.5rem", width:"max-content"}}>Advanced Options <i style={{padding:"5px"}} className="fa fa-angle-down"></i></div>
                        <div className={this.state.showAdvancedOptions ? `` : `display-options`}>
                        <Switch onChange={onChangeSeo} color="var(--success)" value={this.state.seo} />  Use keyword optimization for SEO? <br /> 
                            <Label style={{margin:"10px"}}>Tone of the Email</Label>
                            <Input style={{width:"250px"}} onChange={onChange} value={this.state.tone} name="tone" className="input" type="select">
                                <option value="Friendly">Friendly</option>
                                <option value="Professional">Professional</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Sales">Sales</option>
                            </Input>
                            <Label style={{margin:"10px"}}>Specify number of words</Label> <br />
                            <Slider style={{marginLeft:"1.5rem"}} axis="x" onChange={({x}) => this.setState({words: x})} x={this.state.words} xstep={50} xmin={100} xmax={1000} /> <br />
                            {this.state.words} words <br />
                        </div>
                        <Button onClick={submitEmail} style={{marginTop: "1rem", width:"100%"}}>
                            Generate Email
                        </Button>
                    </div>
                    <div className="page-card card">
                        <div className="page-card-heading"><b>See the generated email here:</b></div>
                        <div className="page-card-label">Generated email</div>
                        <Input className="input mailBox" disabled={true} height={320} value={this.state.reply} type="textarea" />
                        <Button onClick={copyToClipBoard} style={{marginTop: "1rem"}}>
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ColdEmail