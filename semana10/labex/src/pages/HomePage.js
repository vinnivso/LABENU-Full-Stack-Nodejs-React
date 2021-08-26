import React, {useEffect} from 'react'
import {Typography, Button} from '@material-ui/core'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

//Ao invés de utilizar o useHistory, será aplicado um conceito demonstrado pela resolução do Darvas para o LabeX, utilizando a tag <Link> presente no Router. Esse método será aplicado, por simplesmente ser possível segurarmos o CTRL e ele abrir outra página, dessa forma está mais prático para visualizar minhas páginas conforme fui desenvolvendo.
const StyledHomePageButton = styled.div`
    display:grid;
    grid-auto-flow:column;
    // Comportamento padrão é crescimento em row.
    gap:20px;
`
export default function HomePage() {
    const aviso = () => {
        alert(`Confesso que meu projeto está parado, me frustrei, realmente fique pé da vida! Foi um excelente projeto para aprender as funcionalidades, mas ele conseguiu atingir o limite do meu stress e simplesmente, desde quinta-feira, não consigo mais relar no projeto. Acho que somente fiquei estressado, devido muitos projetos que estive participando extra LABENU e realmente ter ficado cansado. Estou chateado com meu desempenho atual, preciso melhorar. Realmente tentei retornar, mas não consegui.
        Obs.:Não deixarei de retornar ao projeto, só precisava dar uma respirada mesmo, pelo menos, acredito nisso.`)
    }
    useEffect(() => {aviso()},[])
    return(
        <div>
            aviso()
            <Typography variant="h1" align={'center'} gutterBottom>LabeX</Typography>
            {/* gutterBottom foi essencial para estabelecer um melhor espaçamento do título em relação aos demais componentes na tela, no caso os botões, além de aplicação direta de alinhamento centralizado no Typography. */}
            <StyledHomePageButton>
                <Link to={'/login'}>
                {/* Bem parecido com a tag anchor do HTML, nesse caso, para passar a página de acesso ao clicar no botão, devemos passar to={'/page'} */}
                    <Button variant={'outlined'} color={'primary'}>Login</Button>
                </Link>
                <Link to={'/application-form'}>
                {/* Bem parecido com a tag anchor do HTML, nesse caso, para passar a página de acesso ao clicar no botão, devemos passar to={'/page'} */}
                    <Button variant={'outlined'} color={'primary'}>Register to a Trip</Button>
                </Link>
            </StyledHomePageButton>
        </div>
    )
}