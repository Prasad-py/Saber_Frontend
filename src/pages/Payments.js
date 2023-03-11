import React, { useEffect, useState } from "react";
import "../styles/Payments.css";
import { plans, services, usage, pricing, integration, description } from "../data/Payments"
import { Divider, Card } from "ui-neumorphism";
import { Button } from "reactstrap";
import PaymentsPart from "../components/PaymentsPart";
import { axiosAuthInstance } from "../backend-calls/axiosInstance";
import userContext from "../context/user";
import { useContext } from "react";


const Payments = () => {
    const [mode, setMode] = useState ("")
    const {userData} = useContext(userContext)

    useEffect (() => {
        setMode(localStorage.getItem("mode"))
    }, [])

    const onSubscribe = async (planName) => {
        const res = await axiosAuthInstance.post('api/payment',{
            "planName" : planName
          });
          if(res.data.error){
            alert("Something went wrong!!")
          }else{
            window.location.href = res.data.data.url
          }
    }

        return (
            <div style={{marginBottom:"3rem"}}>
                <div className={`page-heading card-${mode}`}>
                    PLANS
                </div>
                <div style={{display:"flex", margin: "auto", width:"80%"}}>
                    <div style={{width:"25%"}}>

                    </div>
                    {plans.map((eachPlan) => {
                        return (
                            <div key={eachPlan} className="payment-plan-container">
                                <div className="payment-plan-name" key={eachPlan}>
                                    {eachPlan}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Divider />
                <div style={{width:"80%", margin:"auto"}}>
                <div className="payment-field-heading">Description</div>
                    <Card dark={mode === "dark" ? true : false} inset style={{display:"flex", margin:"1rem", padding:"1rem"}}>
                        <div style={{width:"25%"}}>
                           
                        </div>
                        {description.map(eachValue => {
                            return (
                                <div className="payment-field-text" key={eachValue}>
                                    {eachValue}
                                </div>
                            )
                        })}
                    </Card>
            </div>
                <PaymentsPart elementName="Pricing" element={pricing} />
                <PaymentsPart elementName="Usage" element={usage} />
                <PaymentsPart elementName="Services" element={services} />
                <PaymentsPart elementName="Integrations" element={integration} />
                <div style={{display:"flex", margin: "auto", width:"80%"}}>
                    <div style={{width:"25%"}}>

                    </div>
                    <div className="payment-plan-container">
                        <div className="payment-plan-name">
                            FREE
                        </div>
                    </div>
                    <div style={{width:"25%"}}>
                        {userData.planName !== "Starter Plan" && <div style={{display:"flex", justifyContent:"center"}}>
                            <Button style={{fontSize:"1.25rem"}} color="danger" onClick={() => onSubscribe("Starter Plan")}>
                                SUBSCRIBE
                            </Button>
                        </div>} <br />
                        {userData.planName !== "Starter Plan One Time" && <div style={{display:"flex", justifyContent:"center"}}>
                            <Button style={{fontSize:"0.75rem"}} onClick={() => onSubscribe("Starter Plan One Time")}>
                                TRY FOR 1 MONTH
                            </Button>
                        </div>}
                    </div>
                    <div style={{width:"25%"}}>
                        {userData.planName !== "Premium Plan" && <div style={{display:"flex", justifyContent:"center"}}>
                            <Button style={{fontSize:"1.25rem"}} color="danger" onClick={() => onSubscribe("Premium Plan")}>
                                SUBSCRIBE
                            </Button>
                        </div> }
                        <br />
                        {userData.planName !== "Premium Plan One Time" && <div style={{display:"flex", justifyContent:"center"}}>
                            <Button style={{fontSize:"0.75rem"}} onClick={() => onSubscribe("Premium Plan One Time")}>
                                TRY FOR 1 MONTH
                            </Button>
                        </div>}
                    </div>
                </div>
            </div>
        )
}

export default Payments