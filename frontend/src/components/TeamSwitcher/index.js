import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TeamActions from "../../store/ducks/teams";

import { Container, TeamList, Team } from "./styles";

class TeamSwitcher extends Component {
  componentDidMount() {
    const { getTeamsRequest } = this.props;
    getTeamsRequest();
  }
  render() {
    const { teams } = this.props;
    return (
      <Container>
        <TeamList>
          {teams.data.map((team) => (
            <Team key={team.id}>
              <img
                src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
                alt={team.name}
              />
            </Team>
          ))}
        </TeamList>
      </Container>
    );
  }
}

const mapStatetoProps = (state) => ({
  teams: state.teams,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TeamActions, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(TeamSwitcher);
