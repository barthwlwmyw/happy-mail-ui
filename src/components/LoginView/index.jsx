import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {userLogIn} from '../../actions'

import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
    image: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'left bottom',
    },
    paper: {
        margin: theme.spacing(8, 8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    imageIcon: {
        height: '100%'
    },
    iconRoot: {
        display: 'inline-block',
        verticalAlign: 'middle',
        height: 85,
        width: 85
    },
    marginTop: {
        marginTop: '1em',
    }
}));

const LoginView = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = () => {
        dispatch(userLogIn({username, password}));
    }

    return (
        <Grid
            container
            className={classes.root}>
            <CssBaseline/>

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Icon fontSize="large" classes={{root: classes.iconRoot}}>
                        <img className={classes.imageIcon} src='/assets/images/emoji-cute.svg'/>
                    </Icon>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            type="text"
                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value)
                            }}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                        />

                        <Grid container className={classes.marginTop}>
                            <Grid item xs>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary"/>}
                                    label="Remember me"
                                />
                            </Grid>
                            <Grid item xs>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={handleLogIn}>
                                    Sign In
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.marginTop}>
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
                    </form>
                </div>
            </Grid>

            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
        </Grid>
    );
}

export default LoginView
