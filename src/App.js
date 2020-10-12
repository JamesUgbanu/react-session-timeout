import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  makeStyles
} from '@material-ui/core';
import logo from './logo.svg'
import SessionTimeout from './SessionTimeout';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80,
  },
}));

const LoginButton = (props) => {
  return (
        <Button
        color="secondary"
        data-testid="submit"
        fullWidth
        size="large"
        onClick={props.onClick}
        variant="contained"
      >
        Log In
      </Button>
  );
}

const LogoutButton = (props) => {

  return (
        <Button
        color="secondary"
        fullWidth
        size="large"
        onClick={props.onClick}
        variant="contained"
      >
        Logout
      </Button>
  );
}


const App = () => {
  const classes = useStyles();
  const [isAuthenticated, setAuth] = useState(false);
  let button;

    const handleClick = () => {
      setAuth(!isAuthenticated);
    }
  
    if (isAuthenticated) {
      button = <LogoutButton onClick={handleClick}/>;
    } else {
      button = <LoginButton onClick={handleClick} />;
    }

  return (
    <div className={classes.root}>
    <Container
        className={classes.cardContainer}
        maxWidth="sm"
      >
        <SessionTimeout isAuthenticated={isAuthenticated} logOut={handleClick} />
        <Box
          mb={4}
          display="flex"
          justifyContent="center"
        >
           <img
          alt="Logo"
          src={logo}
          />
        </Box>
        <Box
          mb={8}
          display="flex"
          justifyContent="center"
        >
          <Box mt={2}>
              {button}
            </Box>
     </Box>
    </Container>       
    </div>
  );
}

export default App;
