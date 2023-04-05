import { SendOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, Paper, TextField } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import background_chat from '../../Asset/background_chat.png';
import { MessageLeftComponent } from "../../Components/MessageLeft";
import { MessageRightComponent } from "../../Components/MessageRight";

export const ChatPage = () => {
    const [message, setMessage] = useState([]);

    const handleChangeMessage = (event) => {
        setMessage(event.target.value)
    }

    const sendMessage = () => {
        alert(message)
    }

    useLayoutEffect(() => {
        setMessage([
            {
                isUser: false,
                date: '01/01/2023 12:00',
                message: 'Bem vindo(a), em que posso lhe ajudar?'
            },
            {
                isUser: false,
                date: '01/01/2023 12:01',
                message: 'Exemplo: Onde fica a biblioteca?'
            },
            {
                isUser: true,
                date: '01/01/2023 12:01',
                message: 'Não sei'
            }
        ])
    }, []);


    return (
        <>
            <Paper elevation={0} sx={{ height: 'calc(100vh - 128px)', backgroundImage: background_chat }}>
                {message.length === 0 ? null : message.map((item) => (
                    <>
                        {!item.isUser ? <MessageLeftComponent {...{ item }} /> : <MessageRightComponent {...{ item }} />}
                    </>
                ))}


            </Paper>
            <Box padding={2} color={'primary'} sx={{ backgroundColor: 'primary' }} display={'flex'}>
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
                <IconButton>
                    <SendOutlined color="primary" />
                </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'none', sm: 'flex' } }}>
            </Box>
        </>
    )
}
