import React, { Component } from 'react'
import { Card, Button, Text } from 'react-native-elements'

export default class PeopleCard extends Component {

    render() {
        return(
            <Card>
                <Text>{this.props.team.firstname} {this.props.team.lastname}</Text>
                <Text>{this.props.team.email}</Text>
            </Card>
        )
    }
}