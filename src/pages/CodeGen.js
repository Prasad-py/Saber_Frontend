import React from "react";
import { Card, TextField, Button } from "ui-neumorphism";
import "../styles/ServicePage.css";

class CodeGen extends React.Component {
    constructor () {
        super ()
        this.state = {
            usecase: "",
            language: "",
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
                <div className="page-heading">CODE GENERATION</div>
                <div className="page-description">
                    Generate code by giving the usecase.
                </div>
                <div className="page-container">
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">WHAT IS YOUR CODE's PURPOSE?</div>
                        <div className="page-card-label">Describe the usecase of your code</div>
                        <TextField placeholder="eg. Swap 2 variables" onChange={onChange} value={this.state.usecase} name="usecase" />
                        <div className="page-card-label">Programming Language</div>
                        <TextField placeholder="eg. Python" onChange={onChange} value={this.state.language} name="language" />
                        <Button>
                            Generate Code
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

export default CodeGen