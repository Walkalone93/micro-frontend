import React from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export default ({ user, onSignOut }) => {
    const history = useHistory();

    function goToHome(event) {
        event.preventDefault();
        history.push('/');
    }

    function signIn() {
        history.push('/auth/signin');
    }

    function signOut() {
        history.push('/');
        onSignOut();
    }

    return (
        <Grid container justifyContent="space-between">
            <Grid item>
                <Typography variant="h5" onClick={goToHome}>
                    <Link href="#" underline="none" onClick={event => goToHome(event)}>
                        Micro-frontend app
                    </Link>
                </Typography>
            </Grid>

            <Grid item>
                {
                    user
                        ? <Button color="primary" variant="outlined" onClick={signOut}>Logout</Button>
                        : <Button color="primary" variant="outlined" onClick={signIn}>Login</Button>
                }
            </Grid>
        </Grid>
    );
}