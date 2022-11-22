import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default ({ onSignUp }) => {
    const history = useHistory();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    function goToSignIn() {
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

            <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="First Name"
                            name="firstName"
                            fullWidth
                            autoFocus
                            required
                            onChange={handleInputChange} />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Last Name"
                            name="lastName"
                            fullWidth
                            required
                            onChange={handleInputChange} />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            name="email"
                            fullWidth
                            required
                            onChange={handleInputChange} />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            fullWidth
                            required
                            onChange={handleInputChange} />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            fullWidth>
                            Sign up
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Link href="#" onClick={goToSignIn}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
