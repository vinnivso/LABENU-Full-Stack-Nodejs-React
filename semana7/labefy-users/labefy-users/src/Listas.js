import React from "react";
import axios from "axios";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "vinicius-oliveira-lovelace"
  }
};

export default class Listas extends React.Components {
  state = {
    id: "",
    name: ""
  };

  render() {
    const listaUsuarios = this.state.name.map((usuario) => {
      return (
        <li key={usuario.id}>
          {usuario.name}
          {""}
          <button onClick={() => this.props.onDeleteUser(usuario.id)} Bye />
        </li>
      );
    });
    return (
      <div>
        <header>
          <button>Ir para a página de registro</button>
        </header>
        <main>
          <h2>Usuários Cadastrados:</h2>
          {listaUsuarios}
        </main>
      </div>
    );
  }
}
