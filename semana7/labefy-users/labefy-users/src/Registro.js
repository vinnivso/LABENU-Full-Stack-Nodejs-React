import React from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 20px;
  border: 3px solid black;
  justify-content: center;
  align-items: center;
  max-width: 40vw;
  max-height: 50vh;
  padding: 20px;
`;
const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "vinicius-oliveira-lovelace"
  }
};

export default class Registro extends React.Component {
  state = {
    name: "",
    email: ""
  };

  onChangeInputName = (e) => {
    this.setState({ name: e.target.value });
  };
  onChangeInputEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onClickCreateUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    };
    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Agora escute o clássico: Berezka - E. Drejzin");
        this.setState({ name: "", email: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <div>
        <header>
          <button>Ir para a página de lista</button>
        </header>
        <Main>
          <p>
            <strong>Nome:</strong>
            <input value={this.state.name} onChange={this.onChangeInputName} />
          </p>
          <p>
            <strong>E-mail:</strong>
            <input
              value={this.state.email}
              onChange={this.onChangeInputEmail}
            />
          </p>
          <button onClick={this.onClickCreateUser}>Salvar</button>
        </Main>
      </div>
    );
  }
}
