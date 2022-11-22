import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function Landing() {
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" spacing={3}>
        <Grid item>
          <Typography variant="h3" color="textSecondary">
            Welcome! Thank you for visiting us.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h4">
              The main purpose of this project is to demonstrate how to divide a monolithic app into multiple sub-apps.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h5">
            When user opens the web site, the <b>Container</b> package is displayed.
            It consists of the <b>Header</b> on the top and placeholders for other packages, that are displayed based on the activated route:
            <ol>
              <li>
                <i>/</i> - <b>Home</b> package is displayed. Welcome page.
              </li>
              <li>
                <i>/auth</i> - <b>Auth</b> package is displayed. Login page is opened, where user can either log in, or navigate to the Sign Up page. User is navigated to the `/dashboard` page after authentication.
              </li>
              <li>
                <i>/dashboard</i> - if user is already authenticated - <b>Dashboard</b> package is activated. Otherwise, user is redirected to the <i>/auth</i> page.
              </li>
            </ol>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
