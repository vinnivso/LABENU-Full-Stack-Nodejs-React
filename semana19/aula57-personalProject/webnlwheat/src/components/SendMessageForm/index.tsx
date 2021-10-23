import React from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'
import styles from './styles.module.scss'

export function SendMessageForm(){

  const {user, signOut} = React.useContext(AuthContext) //Chamando o context.
  const [message, setMessage] = React.useState('')

  //Criando função para enviar mensagem
  //Estou tipando o event: React.FormEvent, ou seja, um evento de form no React.
  async function handleSendMessage(event: React.FormEvent) {
    event.preventDefault()
    //Se não existir no campo de mensagem excluindo os espaços, não será enviado a requisição para API. Caso contrário, será enviado, com o await seguinte.
    if(!message.trim()) {
      return
    }
    await api.post('messages', {message})
    setMessage('')
  }

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
        <VscSignOut size='32'/>
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          {/* Verificando se existe algo em user, com o "?". */}
          <img src={user?.avatar_url} alt={user?.name}/>
        </div>
        <strong className={styles.userName}>
          {user?.name}
        </strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size='16'/>
          {user?.login}
        </span>
      </header>

      <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
        <label htmlFor='message'>Mensagem</label>
        <textarea
          name='message'
          id='message'
          placeholder='Qual sua expectativa para o evento?'
          onChange={event => setMessage(event.target.value)}
          value={message}
        />
        <button type='submit'>Enviar mensagem</button>
      </form>
    </div>
  )
}