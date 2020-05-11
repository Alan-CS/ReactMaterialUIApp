import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';

import NavBar from './NavBar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  right: {
    marginLeft: 'auto'
  },
  toolbarItem: {
    marginLeft: theme.spacing(2),
  },
  // Alan: Per: https://github.com/google/material-design-icons/issues/206
  iconAlign: {
    verticalAlign: 'middle',
    paddingBottom: '4px',
  }
}));

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [anchorElApps, setAnchorElApps] = React.useState(null);
  const openApps = Boolean(anchorElApps);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuApps = (event) => {
    setAnchorElApps(event.currentTarget);
  };

  const handleCloseApps = () => {
    setAnchorElApps(null);
  };

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            Material UI Samples
          </Typography>
          <Typography variant="h6" className={classes.toolbarItem}>
            <Link underline="none" color="inherit" variant="body2" component={RouterLink} to="/">
              <HomeIcon className={classes.iconAlign}/>
              Home
            </Link>
          </Typography>


          {/*<NavBar className={classes.title}/>*/}

          {/* Alan: Push this to the right of the appbar */}
          <div className={classes.right}>
            <IconButton
                aria-label="Apps"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuApps}
                color="inherit"
            >
              <AppsIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElApps}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openApps}
                onClose={handleCloseApps}
            >
              <MenuItem onClick={handleCloseApps}>
                <Link underline="none" color="inherit" variant="body2" component={RouterLink} to="/Buttons">
                  <RadioButtonCheckedIcon className={classes.iconAlign}/>
                  Buttons
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseApps}>Contacts</MenuItem>
            </Menu>
          </div>

          {/* Alan: Moved this here from the top and pushed it to the right of the appbar */}
          <FormGroup >
            <FormControlLabel
                control={<Switch checked={auth} onChange={handleChange} aria-label="login switch"/>}
                label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
