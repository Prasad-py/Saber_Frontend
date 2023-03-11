import React from "react";
import { Input, Spinner } from "reactstrap";
import { Button, Tooltip, Alert } from "ui-neumorphism";
import { tweetGen } from "../backend-calls/services";
import "../styles/ServicePage.css";

class GenTweets extends React.Component {
    constructor() {
        super()
        this.state = {
            tweet: "",
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
        const submitTweet = async () => {
            const { tweet } = this.state
            this.setState ({isLoading: true})
            const res = await tweetGen(tweet)
            console.log(res)
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
                    <Tooltip dark={this.state.mode === "dark" ? true : false} bottom content={<div>Start generating tweet ideas with hashtags for your online social media campaigns on twitter.
                        Create endless unique tweet ideas, no more writers block.</div>}>
                        <b>GENERATE TWEETS</b>
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
                        <div className="page-card-heading"><b>What Is Your Tweet About?</b></div>
                        <div className="page-card-label">Tweet Prompt</div>
                        <Input className={`input-${this.state.mode}`} style={{ height: "12rem" }} placeholder="eg. CRM Software" onChange={onChange} value={this.state.tweet} name="tweet" type="textarea" />
                        <div>Enter topic or subject you would like to generate tweets for.</div>
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={submitTweet} style={{ marginTop: "1rem", width: "100%" }}>
                        {this.state.isLoading ? <Spinner /> : "Get Recommendations"}
                        </Button>
                    </div>
                    <div className={`page-card card-${this.state.mode}`}>
                        <div className="page-card-heading"><b>See The Tweet Here:</b></div>
                        <div className="page-card-label">Generated Tweet</div>
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

export default GenTweets