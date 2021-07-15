import React from 'react'
// import './App.css'
import CardGrande from './components/CardGrande/CardGrande'
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton'
import styled from "styled-components"

const Geral = styled.div`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.page-section-container {
  width: 40vw;
  margin: 10px 0;
}

.page-section-container > h3 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
`;
const CardGrandeEImage = styled.div`
.bigcard-container {
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
}

.bigcard-container > img {
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
}

.bigcard-container h4 {
  margin-bottom: 15px;
}

.bigcard-container > div {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
}
.image-button-container {
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;
}

.image-button-container > img {
  width: 30px;
  margin-right: 10px;
}
`;

const CardPequenoEImage = styled.div`
.tinycard-container {
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 70px;
}

.tinycard-container > img {
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
}

.tinycard-container h4 {
  margin-bottom: 15px;
}

.tinycard-container > div {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
}
`;

function App() {
  return (
    <Geral>
      <CardGrandeEImage>
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
      </CardGrandeEImage>

      <CardPequenoEImage>
        <CardPequeno
          imagem="https://cdn.icon-icons.com/icons2/614/PNG/512/mail-black-envelope-symbol_icon-icons.com_56519.png"
          descricao="Email: nikobellic@rockstar.com"
        />

        <CardPequeno
        imagem="https://media.istockphoto.com/vectors/adress-vector-icon-isolated-on-white-background-outline-thin-line-vector-id1267302865?s=612x612"
        descricao="Liberty City, Downstreet, 187"
        />
      </CardPequenoEImage>

      <CardGrandeEImage>
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
      </CardGrandeEImage>

      <CardGrandeEImage>
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
      </CardGrandeEImage>
    </Geral>
  );
}

export default App;
