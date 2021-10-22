import React from 'react'
import io from 'socket.io-client'
import {api} from '../../services/api'
import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'

interface Message {
  id:string;
  text:string;
  user:{
    name:string;
    avatar_url:string
  }
}

//Criar uma fila de Mensagens
const messagesQueue:Message[] = []


const socket = io('http://localhost:4000')
socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage)
})

export function MessageList(){
  const [messages, setMessages] = React.useState<Message[]>([]) //Posso falar <Message[]>, signifca que ele vai armazenar o tipo Message.

  React.useEffect(() => {
    setInterval(() => {
      if(messagesQueue.length > 0) {
        setMessages(prevState => [
          messagesQueue[0],
          prevState[0],
          prevState[1]
        ].filter(Boolean)) //Chamando o .filter(Boolean) nesse caso, ele vai agir para retirar qualquer "false", logo ele vai retirar qualquer mensagem nula/undefined da lista.
        messagesQueue.shift()
      }
    }, 2000)
  },[])

  React.useEffect(() => {
    //Chamada para api, além disso estou tipando o retorno do get para <Message[]>
    api.get<Message[]>('messages/last3').then(response => {
      setMessages(response.data)
    })
  },[])

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt='DoWhile 2021' />

      <ul className={styles.messageList}>
        {messages.map(message => {
          return (
            <li  key={message.id} className={styles.message}>
              <p className={styles.messageContainer}>{message.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}