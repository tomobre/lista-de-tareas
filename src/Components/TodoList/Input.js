import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  border-bottom: 1px solid #e2e8f0;
  display: flex;
`;

const StyledInput = styled.input`
  padding: 1rem;
  width: 100%;
  border: 0;

  &:focus {
    outline: 0;
  }
`;

const Button = styled.button`
  border: 0;
  border-left: 1px solid #e2e8f0;
  background-color: #68d391;
  color: white;
  padding: 1rem 2rem;

  transition: all 0.25s ease-in-out;

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: #9ae6b4;
  }
`;

class Input extends React.Component {
  state = {
    value: this.props.edit !== "" ? this.props.edit : "",
    edit: false,
  };

  handleChange = (event) => {
    const inputValue = event.target.value;

    this.setState({ value: inputValue });

    if (inputValue === "") {
      this.setState({ edit: false });
    } else {
      this.setState({ edit: true });
    }
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    if (this.state.value !== "") {
      this.props.onTaskAdd(this.state.value);

      this.setState({ value: "", edit: false });

      this.props.resetEdit("");
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.edit !== prevProps.edit) {
      this.setState({ value: this.props.edit });
    }
  }
  render() {
    return (
      <Wrapper>
        <StyledInput
          type="text"
          placeholder="Agregar tarea"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        ></StyledInput>
        {this.state.edit && (
          <Button onClick={this.handleSubmit}>Agregar</Button>
        )}
      </Wrapper>
    );
  }
}

export default Input;
