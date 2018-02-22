import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import ProjectCard from '../components/ProjectCard'

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Covalence Projects'
    }

    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        this.setState({
            projects: [
                { name: 'Test Project 1', description: 'coolio proj' },
                { name: 'Test Project 2', description: 'coolio proj' },
                { name: 'Test Project 3', description: 'coolio proj' },
                { name: 'Test Project 4', description: 'coolio proj' }

            ]
        })
    }

    navigate(project) {
        this.props.navigation.navigate('ProjectDetail', { project: project });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.state.projects.map((project, index) => {
                    return <ProjectCard key={index} project={project} 
                                Navigate={ () => {this.navigate(project)} } 
                            />
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    }
})