import React from "react";
import styled from "styled-components/macro";

import Filter from "./Filter";
import Input from "./Input";
import List from "./List";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  min-width: 400px;
`;

class TodoList extends React.Component {
  state = {
    mode: "all",
    editValue: "",
    items: [
      {
        id: 1,
        label: "Ir al gimnasio",
        completed: false,
      },
      {
        id: 2,
        label: "Terminar la lista de tareas",
        completed: false,
      },
      {
        id: 3,
        label: "Tomar un cafe",
        completed: true,
      },
    ],
  };

  Edit = (string, id) => () => {
    this.setState({ editValue: string });

    const filteredItems = this.state.items.filter((item) => item.id !== id);

    this.setState({ items: filteredItems });
  };
  handleModeChange = (mode) => () => {
    this.setState({ mode });
  };

  handleTaskAdd = (value) => {
    const task = { id: uuidv4(), label: value, completed: false };

    const newItems = [task, ...this.state.items];

    this.setState({ items: newItems });
  };

  handleComplete = (id) => () => {
    const newItems = [...this.state.items];

    const filteredItem = newItems.filter((item) => item.id === id)[0];

    filteredItem.completed = !filteredItem.completed;

    this.setState({ item: newItems });
  };

  handleDelete = (id) => () => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);

    this.setState({ items: filteredItems });
  };

  resEdit = (emptyString) => {
    this.setState({ editValue: emptyString });
  };

  render() {
    const { mode, items } = this.state;

    let filteredItems = [];

    if (mode === "completed") {
      filteredItems = items.filter((items) => items.completed === true);
    } else if (mode === "active") {
      filteredItems = items.filter((item) => item.completed === false);
    } else {
      filteredItems = items;
    }

    return (
      <Wrapper>
        <Filter mode={mode} onModeChange={this.handleModeChange}></Filter>
        <Input
          edit={this.state.editValue}
          onTaskAdd={this.handleTaskAdd}
          resetEdit={this.resEdit}
        ></Input>
        <List
          toEdit={this.Edit}
          items={filteredItems}
          onComplete={this.handleComplete}
          onDelete={this.handleDelete}
        ></List>
      </Wrapper>
    );
  }
}

export default TodoList;
