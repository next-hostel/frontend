import React, { Component } from "react";
import {
    Form,
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardFooter
} from "reactstrap";
import Step1 from '../components/PG Post/Step1/Step1'
import Step2 from '../components/PG Post/Step2/Step2'
import Step3 from '../components/PG Post/Step3/Step3'
import Step4 from '../components/PG Post/Step4/Step4'
import Step5 from '../components/PG Post/Step5/Step5'
import Step6 from '../components/PG Post/Step6/Step6'
import Step7 from '../components/PG Post/Step7/Step7'
import Step8 from '../components/PG Post/Step8/Step8'
// import Step9 from '../components/PG Post/Step9/Step9'
import Step10 from '../components/PG Post/Step10/Step10'
import MultiStepProgressBar from "../components/PG Post/MultiStepProgressBar/MultiStepProgressBar";



const pgPost = () => {

    function constructor(props) {


        // Set the intiial input values
        this.state = {
            currentStep: 1,
            email: "",
            username: "",
            password: ""
        };

        // Bind the submission to handleChange()
        this.handleChange = this.handleChange.bind(this);

        // Bind new functions for next and previous
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    // Use the submitted data to set the state
    // handleChange(event) {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // }

    // Trigger an alert on form submission
    // handleSubmit = event => {
    //     event.preventDefault();
    //     const { email, username, password } = this.state;
    //     alert(`Your registration detail: \n 
    //       Email: ${email} \n 
    //       Username: ${username} \n
    //       Password: ${password}`);
    // };

    // Test current step with ternary
    // _next and _previous functions will be called on button click
    function _next() {
        let currentStep = this.state.currentStep;

        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        });
    }

    function _prev() {
        let currentStep = this.state.currentStep;
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        });
    }

    // The "next" and "previous" button functions
    function previousButton() {
        let currentStep = this.state.currentStep;

        // If the current step is not 1, then render the "previous" button
        if (currentStep !== 1) {
            return (
                <Button color="secondary float-left" onClick={this._prev}>
                    Previous
                </Button>
            );
        }

        // ...else return nothing
        return null;
    }

    function nextButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 3) {
            return (
                <Button color="primary float-right" onClick={this._next}>
                    Next
                </Button>
            );
        }
        // ...else render nothing
        return null;
    }

    function submitButton() {
        let currentStep = this.state.currentStep;

        // If the current step is the last step, then render the "submit" button
        if (currentStep > 2) {
            return <Button color="primary float-right">Submit</Button>;
        }
        // ...else render nothing
        return null;
    }


    return (
        <>
            <Form >
                <Card>
                    <CardBody>
                        <CardTitle>
                            <MultiStepProgressBar />

                        </CardTitle>
                        <CardText />
                        <Step1

                        />
                        <Step2

                        />
                        <Step3

                        />
                        <Step4

                        />
                        <Step5

                        />
                        <Step6

                        />
                        <Step7

                        />
                        <Step8

                        />
                        {/* <Step9

                        /> */}
                        <Step10

                        />

                    </CardBody>
                    <CardFooter>

                    </CardFooter>
                </Card>
            </Form>

        </>
    )
}

export default pgPost
