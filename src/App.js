import React from "react";
import styled from "styled-components";
import TodoList from "./Components/TodoList/TodoList";

const Component = styled.div`
  display: flex;
  background.color: white;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 2.5rem;
`;

const App = () => {
  return (
    <Component>
      <Wrapper>
        <Header>LISTA DE TAREAS</Header>
        <TodoList></TodoList>
      </Wrapper>
    </Component>
  );
};

export default App;
