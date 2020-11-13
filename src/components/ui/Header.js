import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Tab, Tabs } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  }
}))

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/practice" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/import" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/history" && value !== 3) {
      setValue(3);
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              Typing Practice
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              // indicatorColor="primary"
              className={classes.tabContainer}
            >
              <Tab className={classes.tab} label="Home" component={Link} to="/" />
              <Tab className={classes.tab} label="Practice" component={Link} to="/practice" />
              <Tab className={classes.tab} label="Import" component={Link} to="/import" />
              <Tab className={classes.tab} label="History" component={Link} to="/history" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
} 