import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors}} = useForm();

    

    const onSubmit = (data) => {
        console.log(data);
        const userData = JSON.parse(localStorage.getItem('user')) || [];
        
        const loginData = userData.find((f) => f.email === data.email)
        if(loginData){
            localStorage.setItem('loggedIn',JSON.stringify({email: loginData.email}))
            navigate('/dashboard')
            
            
        } else {
            alert('No Email Address Found')
            navigate('/')
        }
        
    }

    const handleClick = () => {
        navigate('/')
    }

  return (
    <Box 
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '400px',
            alignItems: 'center',
            padding: '2rem',
            margin: 'auto',
            border: '1px solid black',
            borderRadius: '6px',
            gap: 4
        }}>
        
            <FormLabel color='black'>Login Form</FormLabel>
            
            <TextField 
                label='Email'
                variant='outlined'
                fullWidth
                {...register('email',{
                    required: 'Email is Required',
                    pattern: {
                        value: /^[A-Za-z0-9]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid Email Address'
                    }
                })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
             />

             <TextField 
                label='Password'
                variant='outlined'
                fullWidth
                {...register('password',{
                    required: 'Password is Required',
                    pattern: {
                        value: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g,
                    }
                })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ''}
             />

             <Button type='submit' variant='contained'>Submit</Button>

             <Typography variant='body2'>Not have an account!<Button variant='outlined' onClick={handleClick}>Register</Button></Typography>
        
    </Box>
  )
}

export default Login
