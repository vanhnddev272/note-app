import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login() {
  const auth = getAuth();
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleLoginFirebase = async () => {
    const provider = {
      googleProvider: new GoogleAuthProvider()
    }

    const res = await signInWithPopup(auth, provider.googleProvider)
    // console.log(res);
    if (user?.uid) {
      navigate('/')
      return
    }
  }

  return (
    // <MDBContainer fluid className="p-3 my-5 h-custom">

    //   <MDBRow>

    //     <MDBCol col='10' md='6'>
    //       <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
    //     </MDBCol>

    //     <MDBCol col='4' md='6'>

    //       <div className="d-flex flex-row align-items-center justify-content-center">

    //         <p className="lead fw-normal mb-0 me-3">Sign in with</p>

    //         <MDBBtn floating size='md' tag='a' className='me-2'>
    //           <MDBIcon fab icon='facebook-f' />
    //         </MDBBtn>

    //         <MDBBtn floating size='md' tag='a'  className='me-2'>
    //           <MDBIcon fab icon='twitter' />
    //         </MDBBtn>

    //         <MDBBtn floating size='md' tag='a'  className='me-2'>
    //           <MDBIcon fab icon='linkedin-in' />
    //         </MDBBtn>

    //       </div>

    //       <div className="divider d-flex align-items-center my-4">
    //         <p className="text-center fw-bold mx-3 mb-0">Or</p>
    //       </div>

    //       <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
    //       <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

    //       <div className="d-flex justify-content-between mb-4">
    //         <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
    //         <a href="!#">Forgot password?</a>
    //       </div>

    //       <div className='text-center text-md-start mt-4 pt-2'>
    //         <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
    //         <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
    //       </div>

    //     </MDBCol>

    //   </MDBRow>

    //   <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

    //     <div className="text-white mb-3 mb-md-0">
    //       Copyright © 2020. All rights reserved.
    //     </div>

    //     <div>

    //       <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
    //         <MDBIcon fab icon='facebook-f' size="md"/>
    //       </MDBBtn>

    //       <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
    //         <MDBIcon fab icon='twitter' size="md"/>
    //       </MDBBtn>

    //       <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }} onClick={handleLoginFirebase}>
    //         <MDBIcon fab icon='google' size="md"/>
    //       </MDBBtn>

    //       <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
    //         <MDBIcon fab icon='linkedin-in' size="md"/>
    //       </MDBBtn>

    //     </div>

    //   </div>

    // </MDBContainer>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLoginFirebase}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>

  );
}
