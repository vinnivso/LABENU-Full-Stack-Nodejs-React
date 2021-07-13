import React from 'react'
import './App.css'
import CardGrande from './components/CardGrande/CardGrande'
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton'
// import styled from "styled-components"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://upload.wikimedia.org/wikipedia/pt/f/fb/Niko_Bellic_concept.jpg"
          nome="Niko Bellic"
          descricao="Oi, eu sou o Niko Bellic. Sou o chefe das máfias em Liberty City. Quando era muito jovem participou da Guerra Civil Iugoslava. Seu pai era um alcoólatra que o agredia, do seu irmão (que morreu na guerra) e da sua mãe (que demonstra um sentimento afetivo com o filho e lamenta o fato de seu coração bom ter sido corrompido pela guerra nos e-mails que manda para ele). Niko viu e cometeu diversas atrocidades na guerra."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="card-pequeno">
        <CardPequeno
          imagem="https://cdn.icon-icons.com/icons2/614/PNG/512/mail-black-envelope-symbol_icon-icons.com_56519.png"
          descricao="Trabalhei muito para fazer dessa empresa algo que preste e estabeleci que GTA deve ser lançado de 10 em 10 anos apartir do GTA V, no mínimo."
        />

        <CardPequeno
        imagem="https://media.istockphoto.com/vectors/adress-vector-icon-isolated-on-white-background-outline-thin-line-vector-id1267302865?s=612x612"
        descricao="Trabalhei muito para fazer dessa empresa algo que preste e estabeleci que GTA deve ser lançado de 10 em 10 anos apartir do GTA V, no mínimo."
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/260px-Rockstar_Games_Logo.svg.png"
          nome="Rockstar Games"
          descricao="Trabalhei muito para fazer dessa empresa algo que preste e estabeleci que GTA deve ser lançado de 10 em 10 anos apartir do GTA V, no mínimo."
        />

        <CardGrande
          imagem="https://upload.wikimedia.org/wikipedia/pt/e/e7/Red_Dead_Redemption_2.png"
          nome="Red Dead Redemption"
          descricao="O desenvolvimento do título começou logo depois do lançamento de Red Dead Redemption em 2010 e foi compartilhado entre todas desenvolvedoras da Rockstar Games ao redor do mundo. A equipe se inspirou em locais reais, focando-se na criação de uma reflexão fiel do período temporal por meio dos personagens e do mundo de jogo.."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://cdn.icon-icons.com/icons2/2428/PNG/512/facebook_black_logo_icon_147136.png"
          texto="Facebook"
        />
        <ImagemButton
          imagem="https://img.icons8.com/metro/452/twitter.png"
          texto="Twitter"
        />
        <ImagemButton
          imagem="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
          texto="Linkedin"
        />
      </div>
    </div>
  );
}

export default App;
