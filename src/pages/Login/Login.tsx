import React from "react";
import { Button, TextField, Grid } from '@material-ui/core';
import useStyles from "./styles";

const Login: React.FC = () => {
    const classes = useStyles();
    return (
        <>
         <Grid container spacing={4} alignItems="flex-end">
             <Grid item xs={12} sm={12}>
                <TextField
                 fullWidth
                 label="Username"
                 type="password"
                 autoComplete="current-password"
                 variant="outlined"
                />
             </Grid> 
             <Grid item xs={12} sm={12}>
             <TextField
                fullWidth
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
             />
             </Grid>
            <Grid item alignItems="flex-end" justify="flex-end">
              <Button className={classes.root}> Sign in </Button>
            </Grid>
         </Grid>
        
         </>
    );
}

export default React.memo(Login);