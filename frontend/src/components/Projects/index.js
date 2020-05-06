import React, { Component } from "react";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import ProjectsActions from "../../store/ducks/projects";
import MembersActions from "../../store/ducks/members";

import Button from "../../styles/components/Button";
import Modal from "../Modal";
import Members from "../Members";
import { Container, Project } from "./styles";

class Projects extends Component {
  state = {
    newProject: "",
  };
  componentDidMount() {
    const { activeTeam, getProjectsRequest } = this.props;
    if (activeTeam) {
      getProjectsRequest();
    }
  }
  handleInputchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleCreateProject = (e) => {
    e.preventDefault();
    const { createProjectRequest } = this.props;
    const { newProject } = this.state;
    createProjectRequest(newProject);
  };

  render() {
    const { newProject } = this.state;
    const {
      activeTeam,
      projects,
      openProjectModal,
      openMembersModal,
      members,
      closeProjectModal,
    } = this.props;
    if (!activeTeam) return null;
    return (
      <Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Button onClick={openProjectModal}>+ Novo</Button>
            <Button onClick={openMembersModal}>Membros</Button>
          </div>
        </header>
        {projects.data.map((project) => (
          <Project key={project.id}>
            <p>{project.title}</p>
          </Project>
        ))}
        {projects.projectModalOpen && (
          <Modal>
            <h1>Criar Projeto</h1>
            <form onSubmit={this.handleCreateProject}>
              <span>Nome</span>
              <input
                type="text"
                name="newProject"
                value={newProject}
                onChange={this.handleInputchange}
              />

              <Button size="big" type="submit">
                Salvar
              </Button>
              <Button size="small" color="gray" onClick={closeProjectModal}>
                Cancelar
              </Button>
            </form>
          </Modal>
        )}
        {members.memberModalOpen && <Members />}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTeam: state.teams.active,
  members: state.members,
  projects: state.projects,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...ProjectsActions, ...MembersActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
