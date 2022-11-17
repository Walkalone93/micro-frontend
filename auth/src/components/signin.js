import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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

export default ({ onSignIn }) => {
    const classes = useStyles();
    const history = useHistory();

    const [ form, setForm ] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    function goToSignUp(event) {
        event.preventDefault();
        history.push('/auth/signup');
    }


    function handleInputChange({ target }) {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSignIn?.({ email: form.email });
    }

    return (
        <Container maxWidth="xs">
            <Typography variant="h5" align="center">
                Sign in
            </Typography>

            <form className={classes.form}
                  onSubmit={handleSubmit}
                  noValidate>
                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    autoFocus
                    required
                    onChange={handleInputChange} />
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth
                    required
                    onChange={handleInputChange} />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    name="rememberMe"
                    onChange={handleInputChange} />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth>
                        Login
                </Button>
                <Link href="#" onClick={goToSignUp}>
                    Don't have an account? Sign Up
                </Link>
            </form>
        </Container>
    );
}
