import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

export const MessageRightComponent = (props) => {
    const msg = props.item;

    return (
        <>
            <Box display={'flex'} justifyContent={'flex-end'} my={1}>

                <Paper elevation={1} sx={{ borderRadius: '5px', width: '80%', padding: '2px', textAlign: 'left', mr: '5px' }} >
                    <Typography variant="body" >
                        {msg.message}
                    </Typography>
                    <Typography variant="body2" textAlign={'right'} color={'secondary'}> {msg.date}</Typography>
                </Paper>
            </Box>
        </>
    )
}

