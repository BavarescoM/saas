import React from "react";

import TeamSwitcher from "../../components/TeamSwitcher";
import { Container } from "./styles";
import Projects from "../../components/Projects";

function Main() {
  return (
    <Container>
      <TeamSwitcher />
      <Projects />
    </Container>
  );
}

export default Main;
