import React, { Component } from "react";

import Select from "react-select";
import api from "../../sevices/api";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MembersActions from "../../store/ducks/members";

import { MembersList } from "./styles";
import Modal from "../Modal";
import Button from "../../styles/components/Button";

class Members extends Component {
  state = {
    roles: [],
  };

  async componentDidMount() {
    const { getMembersRequest } = this.props;
    getMembersRequest();
    const response = await api.get("roles");
    this.setState({
      roles: response.data,
    });
  }

  handleRolesChange = (id, roles) => {
    const { updateMemberRequest } = this.props;
    updateMemberRequest(id, roles);
  };
  render() {
    const { closeMembersModal, members } = this.props;
    const { roles } = this.state;
    return (
      <Modal>
        <h1>Membros</h1>
        <form>
          <MembersList>
            {members.data.map((member) => (
              <li key={member.id}>
                <strong>{member.user.name}</strong>
                <Select
                  isMulti
                  options={roles}
                  value={member.roles}
                  getOptionLabel={(role) => role.name}
                  getOptionValue={(role) => role.id}
                  onChange={(value) => this.handleRolesChange(member.id, value)}
                />
              </li>
            ))}
          </MembersList>
          <Button onClick={closeMembersModal} filled={false} color="gray">
            Cancelar
          </Button>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  members: state.members,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(MembersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Members);
