import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

import {useDispatch, useSelector} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SideNavPanel from "./sideNavPanel";
import Inbox from "./inbox";
import NewMessage from "./newMessage";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
        maxHeight: '100%',
        maxWidth: '100%',
    },
    profileWrapper: {
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'row',
    },
    firstPanel: {
        padding: theme.spacing(2),
        width: '250px',
        backgroundColor: "LightGray"
    },
    secondPanel: {
        padding: theme.spacing(2),
        width: 'calc(100% - 250px)',
        maxHeight: '100%',
        overflow: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        minWidth: '100%',
        minHeight: '100%',
        maxHeight: '100%',
    },
}));

const ProfileView = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Grid container className={classes.profileWrapper}>
                <Grid item className={classes.firstPanel}>
                    <SideNavPanel/>
                </Grid>
                <Grid item className={classes.secondPanel}>
                    <Paper className={classes.paper}>
                        <Switch>
                            <Route path='/write'>
                                <NewMessage/>
                            </Route>
                            <Route path={['/inbox', '/']}>
                                <Inbox/>
                            </Route>
                        </Switch>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProfileView