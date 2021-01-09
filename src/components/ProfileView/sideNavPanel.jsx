import React from 'react';
import {
  Link,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import DraftsIcon from '@material-ui/icons/Drafts';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SettingsIcon from '@material-ui/icons/Settings';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  newMessageLink: {
    backgroundColor: 'gold',
  },
  dividerMargin: {
    marginTop: theme.spacing(3),
  },
}));

const SideNavPanel = () => {
  const classes = useStyles();

  return (
    <List>
      <div>
        <Link className={classes.link} to="/write">
          <ListItem button className={classes.newMessageLink}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="New message" />
          </ListItem>
        </Link>

        <Link className={classes.link} to="/inbox">
          <ListItem button>
            <ListItemIcon>
              <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </Link>

        <ListItem button>
          <ListItemIcon>
            <DeleteOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <TelegramIcon />
          </ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <NotInterestedIcon />
          </ListItemIcon>
          <ListItemText primary="Spam" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>

        <Divider className={classes.dividerMargin} variant="fullWidth" orientation="horizontal" />

        <ListItem button>
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </div>
    </List>
  );
};

export default SideNavPanel;
