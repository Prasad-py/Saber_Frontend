import React from "react";
import { Input, Spinner } from "reactstrap";
import { Button, Tooltip, Alert } from "ui-neumorphism";
import { askMeAnything } from "../backend-calls/services";
import "../styles/ServicePage.css";

class AskMeAnything extends React.Component {
    constructor() {
        super()
        this.state = {
            text: "",
            reply: "",
            mode: "",
            isLoading: false,
            alert: ""
        }
    }
    componentDidMount() {
        this.setState({ mode: localStorage.getItem("mode") })
    }
    render() {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }
        const submitAskMeAnything = async () => {
            const { text } = this.state
            this.setState ({isLoading: true})
            const res = await askMeAnything(text)
            if (res.error) {
                this.setState({ alert: res.error })
                setTimeout(() => this.setState({ alert: "" }), 3000)
            } else {
                this.setState({ reply: res.data, isLoading: false })
            }
        }
        const copyToClipBoard = () => {
            navigator.clipboard.writeText(this.state.reply)
        }
        return (
            <div>
                <div className="page-heading">
                    <Tooltip dark={this.state.mode === "dark" ? true : false} bottom content={<div>Generate what's on your mind!</div>}>
                        <b>Ask Me Anything</b>
                    </Tooltip>
                </div>
                <div style={{ margin: "auto", width: "max-content" }}>
                    {this.state.alert &&
                        <Alert dark={this.state.mode === "dark" ? true : false} type="error">
                            {this.state.alert}
                        </Alert>}
                </div>
                <div className="page-container">
                    <div className={`page-card card-${this.state.mode}`}>
                        <div className="page-card-heading"><b>What do you want to ask?</b></div>
                        <div className="page-card-label">Text</div>
                        <Input className={`input-${this.state.mode}`} style={{ height: "12rem" }} placeholder="eg. how to make maggie" onChange={onChange} value={this.state.text} name="text" type="textarea" />
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={submitAskMeAnything} style={{ marginTop: "1rem", width: "100%" }}>
                        {this.state.isLoading ? <Spinner /> : "Get your answer here"}
                        </Button>
                    </div>
                    <div className={`page-card card-${this.state.mode}`}>
                        <div className="page-card-heading"><b>See The Answer here:</b></div>
                        <div className="page-card-label">Generated answer</div>
                        <Input className={`input-${this.state.mode}`} style={{ height: "30rem" }} value={this.state.reply} type="textarea" />
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={copyToClipBoard} style={{ marginTop: "1rem" }}>
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AskMeAnything