import { Box, Button, Card, FormLabel, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const userData = JSON.parse(localStorage.getItem('user')) || [];

        const storedData = userData.find((f) => f.email === data.email)
        if(storedData){
            alert('Try another email, This email already exist')
        }else {
            userData.push(data);
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/login')
        }
                
    }

    const handleClick = () => {
        navigate('/login')
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
        
            <FormLabel>Registration Form</FormLabel>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', mb: 2}}>
            <TextField 
                label='firstName'
                variant='outlined'
                {...register('firstName',{
                    required: 'First Name is Required'
                })}
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ''}
             />
            <TextField 
                label='lastName'
                variant='outlined'
                {...register('lastName',{
                    required: 'Last Name is Required'
                })}
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ''}
             />
             </Box>
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
                        message: 'Password must be 8 digits'
                    }
                })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ''}
             />

             <Button type='submit' variant='contained'>Submit</Button>

             <Typography variant='body2'>Already have an account!<Button variant='outlined' onClick={handleClick}>Login</Button></Typography>
        
    </Box>
  )
}

export default Registration
