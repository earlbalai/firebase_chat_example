import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import firebase from '../../services/firebase'

function useMessageStore() {
  const store = firebase.firestore()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const unsubscribe = store
      .collection('messages')
      .orderBy('posted_at', 'asc')
      .onSnapshot((snapshot) => {
        const newMessage = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setMessages(newMessage)
      })
    return () => unsubscribe()
  }, [])

  return messages
}

function ChatView() {
  const messages = useMessageStore()
  return (
    <Layout>
      {messages.map((msg) => (
        <CardContainer key={msg.id}>
          <MessageCard>{msg.message}</MessageCard>
          <small>
            {msg.user} @ {String(msg.posted_at)}
          </small>
        </CardContainer>
      ))}
    </Layout>
  )
}

export default ChatView

const Layout = styled.div`
  grid-area: chat_view;
  padding: 1rem;
  overflow-y: auto;
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  small {
    color: #555;
  }
`
const MessageCard = styled.div`
  /* display: inline-block; */
  padding: 1rem;
  border-radius: 0.3rem;
  color: #fff;
  background-color: #888;
`
