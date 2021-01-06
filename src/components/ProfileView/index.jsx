import React, {useEffect, useState} from 'react';
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
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Icon from "@material-ui/core/Icon";

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
        maxWidth: '40vw',
        width: '40vw'
    },
    messageDate: {
        marginRight: 0,
        marginLeft: 'auto',
        width: '150px',
        minWidth: '150px',
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
    iconRoot: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginLeft: '0.5em',
        height: 50,
        width: 50,
    },
    iconTable: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '0.5em',
        height: '2em',
        width: '2em',
    },
    imageIcon: {
        height: '100%'
    },
    alertColor: {
        color: '#ff1744 !important'
    },
    alertColorContent: {
        color: '#fbc02d !important',
        textDecoration: 'underline',
        '&:hover': {
            color: "#f57f17 !important",
        },
    }
}));

const ProfileView = () => {
    const dispatch = useDispatch();
    const messagesData = useSelector(state => state.messages)
    const userData = useSelector(state => state.user)
    const classes = useStyles();

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
            <Switch>
                <Route path='/write'>
                    WRITE
                </Route>
                <Route path='/show'>
                    SHOWs
                </Route>
                <Route path={['/inbox', '/']}>
                    {inbox()}
                </Route>
            </Switch>
        )
    }

    const inbox = () => {
        if (!!messagesData
            && !!Array.isArray(messagesData.messages)
            && !!messagesData.messages.length) {

            return (
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" width={'3em'}></TableCell>
                            <TableCell align="left">
                                <Typography noWrap className={classes.messageUser} variant="h6">
                                    Sender
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography noWrap className={classes.messageText} variant="h6">
                                    Message
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography noWrap className={classes.messageDate} variant="h6">
                                    Date
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {messagesData.messages.map(item => (<MessageRow key={item.id} item={item} classes={classes}/>))}
                    </TableBody>
                </Table>
            )

        } else {
            return (
                <Typography variant="h6" align={'center'}>
                    Your inbox is empty.
                    <Icon fontSize="default" classes={{root: classes.iconRoot}}>
                        <img className={classes.imageIcon} src='/assets/images/emoji-awkward.svg'
                             alt={"Awkward emoji"}/>
                    </Icon>
                </Typography>
            )
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>

            <Grid container className={classes.profileWrapper}>
                <Grid item className={classes.firstPanel}>
                    {firstPanel()}
                </Grid>

                <Grid item className={classes.secondPanel}>
                    <Paper className={classes.paper}>
                        {secondPanel()}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}


function NewMessage(props) {

}

function MessageRow(props) {
    const {classes, item} = props
    const [open, setOpen] = useState(false)
    const [canShow, setCanShow] = useState(!item.isToxic)

    const openMessage = () => {
        setOpen(!open)
    }

    const showMessage = () => {
        setCanShow(!canShow)
    }

    const getDate = (stringDate) => {
        const split = stringDate.split("T")
        const date = split[0]
        const time = split[1].split(".")[0]
        return date + ' ' + time
    }

    const toxicAlert = () => {
        return (<React.Fragment>
            <Typography noWrap className={classes.alertColorContent} variant="body1" align={'center'}
                        onClick={showMessage}>
                <Icon fontSize="default" classes={{root: classes.iconTable}}>
                    <img className={classes.imageIcon} src='/assets/images/emoji-silent.svg' alt={"Silent emoji"}/>
                </Icon>
                Click here if you are sure you want to see the message.
            </Typography>
        </React.Fragment>)
    }

    return (<React.Fragment>
        <TableRow key={item.id}>
            <TableCell align="left" width={'3em'}>
                <IconButton aria-label="expand row" size="small" onClick={openMessage}>
                    {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                </IconButton>
            </TableCell>
            <TableCell>
                <Typography noWrap className={classes.messageUser} variant="body1">
                    {item.senderUsername}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography noWrap className={classes.messageText} variant="body2">
                    {item.isToxic
                        ? (<span className={classes.alertColor}>This message may be toxic!</span>)
                        : item.content}
                </Typography>
            </TableCell>
            <TableCell align="right">
                <Typography noWrap className={classes.messageDate} variant="body2">
                    {getDate(item.createdAt)}
                </Typography>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                        {canShow
                            ? (<Typography variant="h6" gutterBottom component="div">
                                {item.content}
                            </Typography>)
                            : toxicAlert()}
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    </React.Fragment>)
}


export default ProfileView