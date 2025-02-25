import { Box, Button, Card, CardContent, Dialog, DialogContent, DialogTitle, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    const userData = JSON.parse(localStorage.getItem('user')) || [];

    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    const currentUser = userData.find((f) => f.email === loggedIn.email)
    

    const handleClick = () => {
        localStorage.removeItem('loggedIn')
        navigate('/')
    }
  return (
    <Box>
        <Box sx={{display: 'flex', gap:2, float: 'right'}}>
        <Button variant='contained'>Calculator</Button>
        <Button variant='contained'>StopWatch</Button>
        </Box>
        <Box 
            sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding:'5'
            }}>
            <Card>           
                    <Grid item xs={4} >
                <CardContent>
                    <Typography variant='h4'>{currentUser.firstName}{currentUser.lastName}</Typography>
                    <Button variant='contained' color='warning' onClick={handleClick}>Logout</Button>
                </CardContent>
                </Grid>            
            </Card>
            <Dialog>
                <DialogTitle>Calculator</DialogTitle>
                <DialogContent>
                    <Stack>
                        <TextField 
                            label='First Value'
                            variant='outlined'
                            value={(e) => handleChange(e.target.value)}
                            />
                        
                        <TextField 
                            label='Second Value'
                            variant='outlined'
                            value={(e) => handleChange(e.target.value)}
                            />
                    </Stack>
                </DialogContent>
            </Dialog>
        </Box>
    </Box>
  )
}

export default Dashboard
