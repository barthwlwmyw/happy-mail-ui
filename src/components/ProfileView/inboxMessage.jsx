import React, {useState} from 'react';

import TableCell from '@material-ui/core/TableCell';
import Collapse from '@material-ui/core/Collapse';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
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

function InboxMessage(props) {
    const classes = useStyles();
    const {item} = props
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
        return (
            <React.Fragment>
                <Typography noWrap className={classes.alertColorContent}
                            variant="body1" align={'center'} onClick={showMessage}>
                    <Icon fontSize="default" classes={{root: classes.iconTable}}>
                        <img className={classes.imageIcon} src='/assets/images/emoji-silent.svg' alt={"Silent emoji"}/>
                    </Icon>
                    Click here if you are sure you want to see the message.
                </Typography>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
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
                        {
                            item.isToxic
                                ? (<span className={classes.alertColor}>This message may be toxic!</span>)
                                : item.content
                        }
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
                            {
                                canShow
                                    ? (
                                        <Typography variant="h6" gutterBottom component="div">
                                            {item.content}
                                        </Typography>
                                    ) : toxicAlert()
                            }
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default InboxMessage;