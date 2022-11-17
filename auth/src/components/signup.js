import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: theme.spacing(3),
    },
}));

export default ({ onSignUp }) => {
    const classes = useStyles();
    const history = useHistory();

    const [ form, setForm ] = useState({
        email: '',
        password: ''
    });

    function goToSignIn(event) {
        history.push('/auth/signin');
    }


    function handleInputChange({ target }) {
        setForm({
            ...form,
            [target.name]: target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSignUp?.({ email: form.email });
    }

    return (
        <Container maxWidth="xs">
            <Typography variant="h5" align="center">
                Sign up
            </Typography>

            <form className={classes.form}
                  onSubmit={handleSubmit}
                  noValidate>
                <TextField
                    label="First Name"
                    name="firstName"
                    fullWidth
                    autoFocus
                    required
                    onChange={handleInputChange} />
                <TextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    required
                    onChange={handleInputChange} />
                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    required
                    onChange={handleInputChange} />
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth
                    required
                    onChange={handleInputChange} />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth>
                        Sign up
                </Button>
                <Link href="#" onClick={goToSignIn}>
                    Already have an account? Sign in
                </Link>
            </form>
        </Container>
    );
}
