import React from 'react';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'

import './Chats.scss'
import {WebSocketService} from "../websocketService";

type ChatMessage = {
    from: string
    to: string
    message: string
}

type UserChats = {
    [user: string]: ChatMessage[]
}

type UserItemProps = { username: string, onClick: (username: string) => void }

const UserItem = ({username, onClick}: UserItemProps) => {
    const handlerClick = useCallback(() => { onClick(username)}, [username, onClick])

    return <li onClick={handlerClick}>{username}</li>
}

type Props = { username: string, socket: WebSocketService }

export const Chats = ({username, socket}: Props) => {
    const [users, setUsers] = useState<string[]>([])
    const [selectedUser, setSelectedUser] = useState<string | undefined>()
    const [userChats, setUserChats] = useState<UserChats>({})
    const [newMessage, setNewMessage] = useState<string>('')

    const messages = useMemo(
        () => selectedUser && userChats[selectedUser] ? Object.values(userChats[selectedUser]) : [],
        [selectedUser, userChats],
    )

    useEffect(() => {
        const listener = (users: string[]) => {
            setUsers(users.filter(user => user !== username))
            setUserChats(chats =>
                Object.fromEntries(Object.entries(chats).filter(([user]) => users.includes(user))),
            )
            setSelectedUser(user => user && users.includes(user) ? user : undefined)
        }
        socket.addMessageListener<string[]>('/chat/users', listener)
        return () => socket.removeMessageListener(listener)
    }, [socket, username])

    useEffect(() => {
        const listener = (message: ChatMessage) => {
            setUserChats(userChats => {
                const chats: ChatMessage[] = userChats[message.from] ?? []
                return ({...userChats, [message.from]: chats.concat(message)})
            })
        }
        socket.addMessageListener('/chat/message', listener)
        return () => socket.removeMessageListener(listener)
    }, [socket, username])

    const handleUserSelected = useCallback((user: string) => {
        setSelectedUser(user)
        setNewMessage('')
    }, [setSelectedUser])

    const handleMessageChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setNewMessage(event.target.value)
    }, [setNewMessage])

    const handleSendMessage = useCallback(() => {
        if (!selectedUser) return
        setNewMessage('')

        const message: ChatMessage = {
            from: username,
            to: selectedUser,
            message: newMessage,
        }

        setUserChats(userChats => {
            const chats: ChatMessage[] = userChats[message.to] ?? []
            return ({...userChats, [message.to]: chats.concat(message)})
        })

        socket.sendMessage('/chat/message', message)
    }, [newMessage, selectedUser, socket, username])

    const handleSendMessageKeyPressed = useCallback((event: any) => {
        if (event.code === 'Enter') {
            handleSendMessage()
        }
    }, [handleSendMessage])

    return (
        <div className="chats">
            <h2>You are user: {username}</h2>
            <div className="chatsBody">
                <div className="userList">
                    <ul>
                        {users.map(user => <UserItem key={user} username={user} onClick={handleUserSelected}/>)}
                    </ul>
                </div>
                <div className="chat">
                    {!selectedUser && <h3>Select a user</h3>}
                    {selectedUser && (
                        <>
                            <h3>Chatting with {selectedUser}</h3>
                            <div className="chatMessages">
                                {
                                    messages.map((message, index) => (
                                        <div
                                            key={index}
                                            className={'message ' + (message.from === username ? 'selfMessage' : 'otherMessage')}>
                                            {message.message}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="chatInput">
                                <input type="text" value={newMessage} onChange={handleMessageChange}
                                       onKeyPress={handleSendMessageKeyPressed}/>
                                <button onClick={handleSendMessage}>Send message</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Chats;

