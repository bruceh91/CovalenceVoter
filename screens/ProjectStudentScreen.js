import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import PeopleCard from '../components/PeopleCard'

export default class ProjectStudentScreen extends Component {

    constructor (props) {
        super(props);
        this.project = this.props.screenProps.project;
        this.state = {
            team: [],
            betterTeam: []
        };
    }

    async componentDidMount() {
        let team = await this.fetchTeam(this.project.id);
        this.setState({ team });
        this.setState({ betterTeam: team[0] }) 
    }

    async fetchTeam(id) {
        try {
            let result = await fetch({ url: `https://gravity.covalence.io/api/graduation/teams/${id}` });
            let team = await result.json();
            return team;
        } catch(e) {
            console.log(this.state.team)
            console.log(e);
            return;
        }
    }

    render(){
        return(
            <ScrollView>
                {this.state.betterTeam.map((team, index) => {
                return <PeopleCard key={index} team={team} />
            })}
            </ScrollView>
        )
    }
}