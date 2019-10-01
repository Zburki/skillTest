import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import monkeySun from '../Components/monkeySun.jpg'


export class Uspjeh extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="..aaand we're done!" />
                    <h1>Thank you for registering!</h1>
                    <p>A confirmation link has been sent to your email adress</p>
                    <img src={monkeySun} alt="Monkey" />
                </React.Fragment>

            </MuiThemeProvider>
        )
    }
}

export default Uspjeh
