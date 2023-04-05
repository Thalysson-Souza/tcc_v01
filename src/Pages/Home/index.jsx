import { ChatOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Fab, Grid, Typography } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();

    const handleClickStartChat = () => {
        navigate('/chat')
    }



    return (

        <>
            <Box height={'calc(100vh - 56px )'}>
                <Grid container>
                    <Grid item xs={12} mt={5} display={'flex'} justifyContent={'center'}>
                        <Avatar alt="logo" sx={{ width: 100, height: 100 }}>L</Avatar>
                    </Grid>
                    <Grid item xs={12} padding={2} textAlign={'justify'}>
                        <Typography variant="body" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex massa,
                            gravida euismod finibus ac, tempus vitae mi. Nullam quis velit dolor. Suspendisse sollicitudin
                            dolor sit amet urna blandit, nec pellentesque diam dignissim. Etiam gravida hendrerit justo sit
                            amet viverra. Curabitur mollis, leo a tincidunt rhoncus, mi nisi elementum tellus, a eleifend nulla.
                        </Typography>
                    </Grid>
                </Grid>
                <Fab onClick={() => handleClickStartChat()} variant="extended" color="secondary" sx={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                    <ChatOutlined sx={{ mr: 1 }} />
                    Novo
                </Fab>
            </Box>
            <Outlet />
        </>
    )
}
