import React from "react";
import { Input, Label } from "reactstrap";
import Slider from "react-input-slider";
import { Button, Tooltip, Switch } from "ui-neumorphism";
import "../styles/ServicePage.css";
import { coldEmail } from "../backend-calls/services";

class CodeDebug extends React.Component {
    constructor () {
        super ()
        this.state = {
            code: "",
            error: "",
            reply: "",
            tone: "",
            seo: false,
            words: 0
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
                <Tooltip bottom content={<div> </div>}>
                    CODE DEBUGGING
                </Tooltip>
                </div>
                <div className="page-container">
                    <div className="page-card card">
                        <div className="page-card-heading">ENTER THE CODE DETAILS</div>
                        <div className="page-card-label">Code</div>
                        <Input className="input mailBox" placeholder="Enter the code here" onChange={onChange} value={this.state.code} name="code" type="textarea" />
                        <div className="page-card-label">Error Received</div>
                        <Input className="input mailBox" placeholder="eg. Can not access undefined variable" onChange={onChange} value={this.state.error} name="error" type="textarea" />
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
                            Generate Correct Code
                        </Button>
                    </div>
                    <div className="page-card card">
                        <div className="page-card-heading">SEE THE RESULTS HERE</div>
                        <div className="page-card-label">Reply</div>
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

export default CodeDebug