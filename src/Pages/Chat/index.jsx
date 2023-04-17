import { SendOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, Paper, TextField } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import background_chat from '../../Asset/background_chat.png';
import { MessageLeftComponent } from "../../Components/MessageLeft";
import { MessageRightComponent } from "../../Components/MessageRight";
import chat_service from "../../Service/chat_service";

export const ChatPage = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleChangeMessage = (event) => {
        setMessage(event.target.value)
    }

    const sendMessage = async () => {
        try {

            let dto = {
                isUser: true,
                message: message,
                date: Date()
            }
            console.log("🚀 ~ file: index.jsx:25 ~ sendMessage ~ dto:", dto)

            setMessages([...messages, dto])
            let dtoSend = {
                text: message,
                userId: "testeeeeeeeeeeeeee"
            }
            let response = await chat_service.postMessageToAI(dtoSend)
            let dtoResponse = {
                isUser: false,
                message: 'teste',
                date: Date()
            }
            setMessages([...messages, dtoResponse])
            console.log("sendMessage ~ response:", response)
            setMessage('')
        } catch (e) {
            alert(e)
            console.log('sendMessage ~ error: ', e)
        } finally {

        }
    }

    // useLayoutEffect(() => {
    //     setMessage([
    //         {
    //             isUser: false,
    //             date: '01/01/2023 12:00',
    //             message: 'Bem vindo(a), em que posso lhe ajudar?'
    //         },
    //         {
    //             isUser: false,
    //             date: '01/01/2023 12:01',
    //             message: 'Exemplo: Onde fica a biblioteca?'
    //         },
    //         {
    //             isUser: true,
    //             date: '01/01/2023 12:01',
    //             message: 'Não sei'
    //         }
    //     ])
    // }, []);

    useLayoutEffect(() => {
        console.log('message', message.length)
    }, [])


    return (
        <>
            <Paper elevation={0} sx={{ height: 'calc(100vh - 128px)', backgroundImage: background_chat }} >
                {messages.length === 0 ? null : messages?.map((item) => (
                    <>
                        {!item.isUser ? <MessageLeftComponent {...{ item }} /> : <MessageRightComponent {...{ item }} />}
                    </>
                ))}


            </Paper>
            <Box padding={2} color={'primary'} sx={{ backgroundColor: '#257ca3' }} display={'flex'}>
                <TextField
                    fullWidth
                    size="small"
                    onChange={(e) => handleChangeMessage(e)}
                    multiline
                    maxRows={4}
                    id="textField_message"
                    // label={message}
                    variant="outlined"
                />
                <IconButton onClick={() => sendMessage()} disabled={message === ''}>
                    <SendOutlined color="primary" />-
                </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'none', sm: 'flex' } }}>
            </Box>
        </>
    )
}
