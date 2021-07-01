import { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import {WebSocketService, WebSocketServiceImpl} from "../websocketService";
import Chats from "./Chats";
import React from 'react';
import './MainChat.scss'

export const MainChat = () => {
	const socket = useRef<WebSocketService | undefined>()

	const [username, setUsername] = useState<string | undefined>()

	useEffect(() => {
		socket.current = new WebSocketServiceImpl('ws:localhost:8083/chat')
		socket.current?.addMessageListener<string>('/chat/username', username => setUsername(username))
		return () => socket.current && socket.current.dispose()
	}, [])


	return (
		<div className="app">
			<header className="appHeader">
				<img src={logo} className="appLogo" alt="logo"/>
				<p>
					Jibber Jabber Chat
				</p>
			</header>
			<div className="chatContainer">
				{socket.current && username ? <Chats socket={socket.current} username={username}/> : <p>Loading...</p>}
			</div>
		</div>
	)
}
