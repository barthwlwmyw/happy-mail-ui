/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    minWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    height: '100%',
  },
}));

const NewMessage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const userData = useSelector((state) => state.user);

  const [recipientUsername, setRecipientUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    dispatch(sendMessage({ token: userData.jwtToken, recipientUsername, message }));
  };

  return (
    <div className={classes.paper}>
      <TextField
        fullWidth
        disabled={true}
        variant="outlined"
        margin="normal"
        id="sender"
        label="Sender"
        name="sender"
        type="text"
        value={userData.username}
      />
      <TextField
        required
        fullWidth
        autoFocus={true}
        variant="outlined"
        margin="normal"
        name="recipient"
        label="Recipient"
        type="recipient"
        id="recipient"
        value={recipientUsername}
        onChange={(event) => {
          setRecipientUsername(event.target.value);
        }}
      />
      <TextField
        required
        fullWidth
        multiline
        rows={12}
        rowsMax={12}
        variant="outlined"
        margin="normal"
        name="message"
        label="Message"
        type="message"
        id="message"
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />

      <Grid container className={classes.marginTop}>
        <Grid item xs>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSendMessage}
            endIcon={<Icon>send</Icon>}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewMessage;
