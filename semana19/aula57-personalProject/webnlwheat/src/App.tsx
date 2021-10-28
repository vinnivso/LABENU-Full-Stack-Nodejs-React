import React from 'react';
import styles from './App.module.scss' //Utilizando o css como module, faz com que ele atribua uma classe única para cada classe que for receber a estilização.
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './contexts/auth'

export function App() {
  const {user} = React.useContext(AuthContext)

  return (
    <main className={`${styles.contentWrapper} ${!!user? styles.contentSigned : ''}`}>
      <MessageList/>
      {/* O seguinte ternário faz o seguinte: Se existir user, ou seja, se user não vazio, logo mostrar SendMessageForm. Caso contrário, será demonstrado LoginBox. */}
      {!!user? <SendMessageForm/>:<LoginBox/>}
    </main>
  )
}
