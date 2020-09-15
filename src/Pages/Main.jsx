import React from 'react'
import styled from 'styled-components'
import ChatView from '../components/ChatView'
import ChatInput from '../components/ChatInput'

function Main() {
	return (
		<Layout>
			<Header>FriendChat</Header>
			<ChatView />
			<ChatInput />
		</Layout>
	)
}

export default Main

const Layout = styled.div`
	height: 100vh;
	display: grid;
	grid-template-rows: 50px 1fr 60px;
	grid-template-areas:
		'header'
		'chat_view'
		'chat_input';
`

const Header = styled.header`
	grid-area: header;
	height: 50px;
	border-bottom: 1px solid #eee;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: #555;
	font-weight: bold;
`
