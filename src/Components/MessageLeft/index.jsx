import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

export const MessageLeftComponent = (props) => {
    const msg = props.item;

    // "&:after": {
    //     content: "''",
    //     position: "absolute",
    //     width: "0",
    //     height: "0",
    //     borderTop: "15px solid #A8DDFD",
    //     borderLeft: "15px solid transparent",
    //     borderRight: "15px solid transparent",
    //     top: "0",
    //     left: "-15px"
    //   },
    //   "&:before": {
    //     content: "''",
    //     position: "absolute",
    //     width: "0",
    //     height: "0",
    //     borderTop: "17px solid #97C6E3",
    //     borderLeft: "16px solid transparent",
    //     borderRight: "16px solid transparent",
    //     top: "-1px",
    //     left: "-17px"
    //   }

    return (
        <>
            <Box display={'flex'} my={1}>
                <Avatar
                    sx={{ height: 30, width: 30, ml: '2px', mr: '5px' }}
                    alt={'TCC'}
                >
                    T
                </Avatar>
                <Paper elevation={1} sx={{ borderRadius: '5px', width: '80%', padding: '2px', textAlign: 'left' }} >
                    <Typography variant="body" >
                        {msg.message}
                    </Typography>
                    <Typography variant="body2" textAlign={'right'} color={'secondary'}> {msg.date}</Typography>
                </Paper>
            </Box>
        </>
    )
}

