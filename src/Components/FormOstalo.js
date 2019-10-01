import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import pokerChips from '../Components/pokerChips.jpeg'

export class FormOstalo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="What's your name?" />
                    <TextField
                        hintText="Enter your email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br />
                    <TextField
                        hintText="Enter your username"
                        floatingLabelText="User Name"
                        onChange={handleChange('username')}
                        defaultValue={values.username}
                    />
                    <br />
                    <TextField
                        hintText="Enter your password"
                        floatingLabelText="Password"
                        onChange={handleChange('password')}
                        defaultValue={values.password}
                    />
                    <br />
                    <TextField
                        hintText="Confirm your password"
                        floatingLabelText="Confirm your password"
                        onChange={handleChange('passwordConfirm')}
                        defaultValue={values.passwordConfirm}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <br />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <img src={pokerChips} alt="pokerChips" />
                </React.Fragment>

            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormOstalo
