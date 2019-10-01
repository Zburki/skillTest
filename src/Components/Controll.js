import React, { Component } from 'react'
import FormImePrezime from './FormImePrezime'
import FormOstalo from './FormOstalo'
import Provjera from './Provjera'
import Uspjeh from './Uspjeh'


export class Controll extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        passwordConfirm: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, username, password, passwordConfirm } = this.state;
        const values = { firstName, lastName, email, username, password, passwordConfirm }

        switch (step) {
            case 1:
                return (
                    <FormImePrezime
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormOstalo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Provjera
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return <Uspjeh />;

            default:
        }
    }
}

export default Controll
