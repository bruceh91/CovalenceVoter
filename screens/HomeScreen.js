import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
            this.setState({
                projects:[
                    {name: 'Test Project 1', description: 'coolio proj'},
                    {name: 'Test Project 2', description: 'coolio proj'},
                    {name: 'Test Project 3', description: 'coolio proj'},
                    {name: 'Test Project 4', description: 'coolio proj'}

                ]
            })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                { this.state.projects.map((project, index) => {
                    return <Text key={project.index}>{ project.name }</Text>
                }) }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10
    }
})