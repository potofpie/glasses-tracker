import React from 'react';
import clsx from 'clsx';
import { useAuth } from '../../utils/auth/Auth-context'

import { 
        useTheme,
        Drawer,
        AppBar,
        List,
        Typography,
        Divider,
        IconButton,
        CssBaseline,
        Toolbar,
        ListItem,
        ListItemIcon,
        ListItemText,
        Avatar,
        Select
      } from '@material-ui/core';

import {
        ChevronLeft,
        ChevronRight,
        Assessment,
        Menu,
        Search,
        AddCircleOutline,
        Settings
      } from '@material-ui/icons'


      
import {Add} from './Sections/Add';
import {Search as SearchTab} from './Sections/Search';
import {Analysis} from './Sections/Analysis';
import {useStyles} from './css';

      



function RenderAppSection(appSection) {
  switch (appSection) {
    case 'Search':
      return <SearchTab/>
      break;
    case 'Add':
      return <Add/>
      break;
    case 'Analysis':
      return <Analysis/>
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
  const {logout} = useAuth();
  const [appSection, setAppSection] = React.useState('Add');

  const handleSidePannelClick = (e) => {
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
            <Menu />
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
            <IconButton onClick={logout}>
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
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem button key='Search' onClick={handleSidePannelClick}>
              <ListItemIcon className={classes.listItemDisable} ><Search /></ListItemIcon>
              <ListItemText primary='Search' onClick={handleSidePannelClick}/>
            </ListItem>
            <ListItem button key='Add' onClick={handleSidePannelClick}>
              <ListItemIcon><AddCircleOutline /></ListItemIcon>
              <ListItemText primary='Add' />
            </ListItem>
            <ListItem button key='Analysis' onClick={handleSidePannelClick}>
              <ListItemIcon ><Assessment /></ListItemIcon>
              <ListItemText primary='Analysis' />
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem button key='Admin Settings' onClick={handleSidePannelClick}>
              <ListItemIcon disabled ><Settings /></ListItemIcon>
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
