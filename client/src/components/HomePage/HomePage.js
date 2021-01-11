import React
      ,{useState, useEffect} 
from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { useAuth } from '../../utils/auth/Auth-context'
import { useOrganizationsValue } from '../../utils/data/Organizations-context'


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
        Settings,
        Info as InfoIcon
      } from '@material-ui/icons'


      
import {Add} from './Sections/Add';
import {Info} from './Sections/Info';
import {Search as SearchTab} from './Sections/Search';
import {AdminSettings} from './Sections/AdminSettings';
import {Analysis} from './Sections/Analysis';
import {useStyles} from './css';

      







export default function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {logout,user} = useAuth();
  const [appSection, setAppSection] = React.useState('Info');
  const {organizations}  = useOrganizationsValue();
  const [selectedOrganization, setSelectedOrganization]  = useState(null);

  function RenderAppSection(appSection) {
    switch (appSection) {
      case 'Info':
          return <Info selectedOrganization={selectedOrganization}/>
      case 'Search':
        return <SearchTab/>
      case 'Add':
        return <Add/>
      case 'Analysis':
        return <Analysis/>
      case 'Profile':
        return 'Profile'
      case 'Admin Settings':
        return <AdminSettings selectedOrganization={selectedOrganization}/>
      default:
        return 'Error'
  
    }
  }


  useEffect(()=> {
    if(!selectedOrganization){
      setSelectedOrganization(organizations.length ? organizations[0].id : null)
    }
  })


  const handleSidePannelClick = (text) => {
    setAppSection(text);
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
          {/* <Select               
              value={selectedOrganization}
              onChange={e => console.log(e.target.value)}
              classes={{
                root: classes.whiteColor,
                icon: classes.whiteColor
              }} > 
            {organizations.map(o => <option value={o.id}>{o.name}</option>)} 
          </Select> */}
          <Autocomplete
            onChange={(e,v) => setSelectedOrganization(v.id)}
            // value={selectedOrganization}
            disableClearable={true}
            defaultValue={selectedOrganization}
            options={organizations}
            getOptionLabel={(option) => option.name}
            style={{width:'30%', marginLeft: '10px',}}
            color='white'
            size='small'
            renderInput={(params) => <TextField  {...params} variant="outlined" color='white'/>}
          />
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
            <ListItem button onClick={() => handleSidePannelClick('Info')}>
              <ListItemIcon className={classes.listItemDisable} ><InfoIcon/></ListItemIcon>
              <ListItemText primary='Info' />
            </ListItem>
            <ListItem button onClick={() => handleSidePannelClick('Search')}>
              <ListItemIcon className={classes.listItemDisable} ><Search/></ListItemIcon>
              <ListItemText primary='Search' />
            </ListItem>
            <ListItem button  onClick={() => handleSidePannelClick('Add')}>
              <ListItemIcon><AddCircleOutline/></ListItemIcon>
              <ListItemText primary='Add' />
            </ListItem>
            <ListItem button onClick={() => handleSidePannelClick('Analysis')}>
              <ListItemIcon><Assessment/></ListItemIcon>
              <ListItemText primary='Analysis' />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button onClick={() => handleSidePannelClick('Admin Settings')}>
              <ListItemIcon disabled ><Settings/></ListItemIcon>
              <ListItemText disabled primary='Admin Settings' />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Breadcrumbs style={{padding : '10px', borderBottom: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'rgba(0,0,0,0.1)'  }}>
          <Link color="inherit" href="/" >
            {appSection}
          </Link>
        </Breadcrumbs>
        {RenderAppSection(appSection)}
      </main>
    </div>
  );
}
