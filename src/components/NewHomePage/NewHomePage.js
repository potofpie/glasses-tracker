import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Add} from '../Sections/Add';
import {Search} from '../Sections/Search';
import {useStyles} from './css';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BusinessIcon from '@material-ui/icons/Business';
import Select from '@material-ui/core/Select';




function RenderAppSection(appSection) {
  switch (appSection) {
    case 'Search':
      return <Search/>
      break;
    case 'Add':
      return <Add/>
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

const drawerWidth = 240;



export default function NewHomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [appSection, setAppSection] = React.useState('Add');

  const handleSidePannelClick = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.textContent);
    console.log(e.target.id);
    console.log(e.target.key);
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
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Glasses Tracker | 
          </Typography>
          <Select               
              value={'Friends of ASAPROSAR'}
              classes={{
                root: classes.whiteColor,
                icon: classes.whiteColor
              }} > 
            <option value={'Friends of ASAPROSAR'}>Friends of ASAPROSAR</option>
            {/* <option value={true}>another one</option> */}

          </Select>
          <div id='something' style={{display : 'flex', flex: '1', width: '100%', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
            <IconButton>
              <Avatar>D</Avatar>
            </IconButton>
            </div>
          {/* <Avatar>D</Avatar> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem button key='Search' onClick={handleSidePannelClick}>
              <ListItemIcon className={classes.listItemDisable} ><SearchIcon /></ListItemIcon>
              <ListItemText primary='Search' onClick={handleSidePannelClick}/>
            </ListItem>
            <ListItem button key='Add' onClick={handleSidePannelClick}>
              <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
              <ListItemText primary='Add' />
            </ListItem>
            <ListItem button key='Analysis' onClick={handleSidePannelClick}>
              <ListItemIcon ><AssessmentIcon /></ListItemIcon>
              <ListItemText primary='Analysis' />
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem button key='Admin Settings' onClick={handleSidePannelClick}>
              <ListItemIcon disabled ><SettingsIcon /></ListItemIcon>
              <ListItemText disabled primary='Admin Settings' />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        {RenderAppSection(appSection)}
          {/* <Add/> */}
       
      </main>
    </div>
  );
}
