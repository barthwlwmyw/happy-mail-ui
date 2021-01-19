import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Icon from '@material-ui/core/Icon';
import TableCell from '@material-ui/core/TableCell';
import { getMessages } from '../../actions';
import InboxMessage from './inboxMessage';

const useStyles = makeStyles(() => ({
  messageUser: {
    width: '150px',
    minWidth: '150px',
  },
  messageText: {
    marginRight: 10,
    marginLeft: 10,
    maxWidth: '40vw',
    width: '40vw',
  },
  messageDate: {
    marginRight: 0,
    marginLeft: 'auto',
    width: '150px',
    minWidth: '150px',
  },
  iconRoot: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '0.5em',
    height: 50,
    width: 50,
  },
  imageIcon: {
    height: '100%',
  },
}));

const Inbox = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const messagesData = useSelector((state) => state.messages);
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getMessages(userData.jwtToken));
  }, []);

  return !!messagesData
        && !!Array.isArray(messagesData.messages)
        && !!messagesData.messages.length
    ? (
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left" width="3em" />
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
          {messagesData.messages.slice(0).reverse().map((item) => (<InboxMessage key={item.id} item={item} />))}
        </TableBody>
      </Table>

    ) : (
      <Typography variant="h6" align="center">
        Your inbox is empty.
        <Icon fontSize="default" classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/assets/images/emoji-awkward.svg" alt="Awkward emoji" />
        </Icon>
      </Typography>
    );
};

export default Inbox;
