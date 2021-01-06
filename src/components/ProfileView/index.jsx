import React, {useEffect} from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';

import {useDispatch, useSelector} from "react-redux";
import {getMessages} from "../../actions";

import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import DraftsIcon from '@material-ui/icons/Drafts';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SettingsIcon from '@material-ui/icons/Settings';
import CreateIcon from '@material-ui/icons/Create';
import {Typography} from "@material-ui/core";

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
        backgroundColor: "LightGray",
    },
    secondPanel: {
        padding: theme.spacing(1),
        width: 'calc(100% - 250px)',
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        height: '100%',
        overflow: 'auto',
    },
    link: {
        textDecoration: 'none',
        color: 'black',
    },
    newMessageLink: {
        backgroundColor: 'gold'
    },
    dividerMargin: {
        marginTop: theme.spacing(3),
    },
    messageWrapper: {
        backgroundColor: "#E8E8E8",
        display: 'flex',
        maxWidth: '100%'
    },
    messageUser: {
        width: '150px',
        minWidth: '150px',
    },
    messageText: {
        marginRight: 10,
        marginLeft: 10,
    },
    messageDate: {
        marginRight: 0,
        marginLeft: 'auto',
        width: '150px',
        minWidth: '150px',
    },
}));

const ProfileView = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const messagesData = useSelector(state => state.messages)
    const userData = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getMessages(userData.jwtToken));
    }, [])

    const firstPanel = () => {
        return (
            <List>
                <div>
                    <Link className={classes.link} to='/write'>
                        <ListItem button className={classes.newMessageLink}>
                            <ListItemIcon>
                                <CreateIcon/>
                            </ListItemIcon>
                            <ListItemText primary="New message"/>
                        </ListItem>
                    </Link>

                    <Link className={classes.link} to='/inbox'>
                        <ListItem button>
                            <ListItemIcon>
                                <MailOutlineIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Inbox"/>
                        </ListItem>
                    </Link>

                    <ListItem button>
                        <ListItemIcon>
                            <DeleteOutlineIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Trash"/>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <TelegramIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Sent"/>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <NotInterestedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Spam"/>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Drafts"/>
                    </ListItem>

                    <Divider className={classes.dividerMargin} variant={'fullWidth'} orientation={'horizontal'}/>

                    <ListItem button>
                        <ListItemIcon>
                            <ContactMailIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Contacts"/>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItem>
                </div>
            </List>
        )
    }

    const secondPanel = () => {
        return (
            <Container maxWidth="lg" className={classes.container}>
                <Switch>
                    <Route path='/write'>
                        WRITE
                    </Route>
                    <Route path='/show'>
                        SHOW
                    </Route>
                    <Route path={['/inbox', '/']}>
                        {inbox()}
                    </Route>
                </Switch>
            </Container>
        )
    }

    const inbox = () => {
        if (!!messagesData
            &&!!Array.isArray(messagesData.messages)
            && !!messagesData.messages.length) {
            return messagesData.messages.map(item => (
                <List>
                    <ListItem button className={classes.messageWrapper}>
                        <Typography noWrap className={classes.messageUser} variant="h6">
                            {item.senderUsername}
                        </Typography>
                        <Typography noWrap className={classes.messageText} variant="body1">
                            {item.content}
                        </Typography>
                        <Typography noWrap className={classes.messageDate} variant="body1">
                            {item.createdAt}
                        </Typography>
                    </ListItem>
                </List>
            ))

        } else {
            return (
                <Typography variant="body1">
                    Your inbox is empty.
                </Typography>
            )
        }
    }

    const showMessage = () => {

    }

    const newMessage = () => {

    }

    return (
        <div className={classes.root}>
            <CssBaseline/>

            <Grid container className={classes.profileWrapper}>
                <Grid item className={classes.firstPanel}>
                    {firstPanel()}
                </Grid>

                <Grid item className={classes.secondPanel}>
                    {secondPanel()}
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfileView