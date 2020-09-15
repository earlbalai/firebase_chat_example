import React, { useState } from 'react'
import styled from 'styled-components'
import firebase from '../../services/firebase'

function ChatInput() {
	const db = firebase.firestore()
	const [message, setMessage] = useState('')
	const [canType, setCanType] = useState(true)

	const submitMessge = (evt) => {
		if (evt.keyCode === 13) {
			setCanType(false)
			if (message.size <= 0) return
			db.collection('messages')
				.add({
					user: 'Anonymous',
					message: message,
					posted_at: firebase.firestore.FieldValue.serverTimestamp(),
				})
				.then(() => {
					setMessage('')
					setCanType(true)
				})
		}
	}
	return (
		<Layout>
			<input
				type='text'
				placeholder='Type something...'
				value={message}
				onKeyDown={submitMessge}
				onChange={(e) => setMessage(e.target.value)}
				disabled={!canType}
			/>
		</Layout>
	)
}

export default ChatInput

const Layout = styled.div`
	grid-area: chat_input;
	border-top: 1px solid #888;
	display: flex;
	align-items: center;
	input {
		width: 100%;
		border: none;
		outline: none;
		background: #eee;
		height: calc(100% - 2px - 2rem);
		padding: 1rem;
		font-size: 1rem;
	}
`
