import React from "react";
import DrawerListItem from "../components/common/DrawerListItem";
import PropTypes from "prop-types";
import Logo from "../images/Logo.jpeg";
import { Divider, Grid, ListSubheader, makeStyles, List, SwipeableDrawer } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  list: {
    width: drawerWidth,
    overflowY: "auto"
  },
  divider: {
    marginTop: "1em"
  }
}));

const NavigationDrawer = ({ open, onOpen, onClose, list, ...props }) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer open={open} onOpen={onOpen} onClose={onClose}>
      <Grid container direction="column" alignItems="center">
        <img alt="Sample Logo" src={Logo} height="65px" />
      </Grid>
      <List className={classes.list}>
        {list.map((item, i) => {
          if (item.canList) {
            return (
              <div key={i}>
                {item.type && <ListSubheader> {item.type} </ListSubheader>}
                {item.title && <DrawerListItem onClose={onClose} {...item} />}
                {item.divider && <Divider className={classes.divider} />}
              </div>
            );
          } else return <div key={i} />;
        })}
      </List>
    </SwipeableDrawer>
  );
};

NavigationDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.object,
      title: PropTypes.string,
      subheader: PropTypes.bool,
      type: PropTypes.string,
      divider: PropTypes.bool
    })
  ).isRequired
};

export default NavigationDrawer;
