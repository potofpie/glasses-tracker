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
        Select,
        Breadcrumbs,
        Link
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
import {AdminSettings} from './Sections/AdminSettings';
import {Analysis} from './Sections/Analysis';
import {useStyles} from './css';

      



function RenderAppSection(appSection) {
  switch (appSection) {
    case 'Search':
      return <SearchTab/>
    case 'Add':
      return <Add/>
    case 'Analysis':
      return <Analysis/>
    case 'Profile':
      return 'Profile'
    case 'Organization':
      return 'Organization'
    case 'Admin Settings':
      return <AdminSettings/>
    default:
      return 'Error'

  }
}



export default function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const {logout,user} = useAuth();
  const [appSection, setAppSection] = React.useState('Search');


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
              <Avatar>{user.displayName[0].toUpperCase()}</Avatar>
            </IconButton>
            </div>
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
        <Breadcrumbs style={{padding : '10px', borderBottom: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'rgba(0,0,0,0.1)'  }}>
          <Link color="inherit" href="/" >
            {appSection}
          </Link>
          {/* <Typography color="textPrimary">{appSection}</Typography> */}
        </Breadcrumbs>
        {RenderAppSection(appSection)}
      </main>
    </div>
  );
}
