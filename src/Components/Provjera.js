import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class FormImePrezime extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, username, password } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Did we get everything OK?" />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Username"
                            secondaryText={username}
                        />
                        <ListItem
                            primaryText="Password"
                            secondaryText={password}
                        />

                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm"
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

export default FormImePrezime
