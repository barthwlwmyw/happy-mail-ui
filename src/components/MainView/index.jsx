import React from "react";
import {
    Switch,
    Route,
    Link
} from 'react-router-dom'
import '../../App.css'

import {useSelector} from 'react-redux'

import HomeView from '../HomeView'
import LoginView from '../LoginView'
import Profile from '../Profile'

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        maxHeight: '100vh',
        maxWidth: '100vw',
        overflow: 'hidden'
    },
    fullBodyHeight: {
        height: 'calc(100% - 64px)',
        maxHeight: 'calc(100% - 64px)',
    },
    appBar: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    logButton: {
        marginRight: 0,
        marginLeft: 'auto',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
    imageIcon: {
        height: '100%'
    },
    iconRoot: {
        display: 'inline-block',
        verticalAlign: 'middle',
    }
}));

const MainView = () => {
    const classes = useStyles();
    const userData = useSelector(state => state.user)

    const navBar = () => {
        return (
            <AppBar position="static">
                <Toolbar className={classes.appBar}>
                    <Typography variant="h4" className={classes.title}>
                        <Link className={classes.link} to='/'>
                            <Icon fontSize="large" classes={{root: classes.iconRoot}}>
                                <img className={classes.imageIcon} src='/assets/images/emoji-happy-smiley.svg'/>
                            </Icon>
                            HappyMail
                        </Link>
                    </Typography>

                    <div className={classes.grow}/>

                    {userData.isLoggedIn
                        ? (
                            <Typography variant="h6" className={classes.logButton}>
                                <Link className={classes.link} to='/logout'>
                                    Log Out
                                </Link>
                            </Typography>
                        )
                        : (
                            <Typography variant="h6" className={classes.logButton}>
                                <Link className={classes.link} to='/login'>
                                    Log In
                                </Link>
                            </Typography>
                        )}
                </Toolbar>
            </AppBar>
        )
    };

    const pageBody = () => {
        return (
            <Switch>
                <Route path='/profile'>
                    <Profile/>
                </Route>
                <Route path='/login'>
                    <LoginView/>
                </Route>
                <Route path='/'>
                    <HomeView/>
                </Route>
            </Switch>
        )
    }

    return (
        <div className={classes.root}>
            {navBar()}
            <main className={classes.fullBodyHeight}>
                {pageBody()}
            </main>
        </div>
    )
}

export default MainView
