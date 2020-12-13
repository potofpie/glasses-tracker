import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import purple from '@material-ui/core/colors/purple';
import GlassesIcon from './GlassesIcon';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BusinessIcon from '@material-ui/icons/Business';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  usersSection: {
    display: 'flex',
    height: '48px',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '16px',
    paddingRight: '16px'
  
  },
  appBar: {
    backgroundColor: purple[500],
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function RenderAppSection(appSection) {
  switch (appSection) {
    case 'Search':
      return 'Search'
      break;
    case 'Add':
      return 'Add';
      break;
    case 'Analysis':
      return 'Analysis'
      break;
    case 'Profile':
      return 'Profile'
      break;
    case 'Organization':
      return 'Organization'
      break;
    case 'Admin Settings':
      return 'Admin Settings'
      break;
    default:
      return 'Error'
      break;
  }
}

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [appSection, setAppSection] = React.useState('Search');

  const handleSidePannelClick = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.textContent);
    setAppSection(e.target.textContent);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          <div><b>Glasses Tracker | </b>  {appSection} </div>   
          
          
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        docked={false}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.usersSection}>
          <IconButton onClick={(e) => {setAppSection('Organization')}} ><BusinessIcon /></IconButton>
          El Salvador Glasses
        </div>
        <Divider />
        <div className={classes.usersSection}>
          <IconButton onClick={(e) => {setAppSection('Profile')}} ><AccountCircleIcon/></IconButton>
            bobby
          <IconButton><ExitToAppIcon /></IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key='Search' onClick={handleSidePannelClick}>
              <ListItemIcon><SearchIcon /></ListItemIcon>
              <ListItemText primary='Search' onClick={handleSidePannelClick}/>
            </ListItem>
            <ListItem button key='Add' onClick={handleSidePannelClick}>
              <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
              <ListItemText primary='Add' />
            </ListItem>
            <ListItem button key='Analysis' onClick={handleSidePannelClick}>
              <ListItemIcon><AssessmentIcon /></ListItemIcon>
              <ListItemText primary='Analysis' />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key='Admin Settings' onClick={handleSidePannelClick}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary='Admin Settings' />
            </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
         {RenderAppSection(appSection)}
        </Typography>
        {/* <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </main>
    </div>
  );
}
