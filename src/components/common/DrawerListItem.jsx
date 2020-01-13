import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const DrawerListItem = ({
  title,
  icon,
  disabled,
  path,
  customOnClick,
  onClose
}) => {
  const history = useHistory();
  const Icon = icon;

  const onClick = () => {
    history.push(path);
    onClose && onClose();
  };

  return (
    <MenuItem
      id={`${path ? path : title}_Button`}
      onClick={customOnClick ? customOnClick : onClick}
      disabled={disabled}
      selected={history.location.pathname === path}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </MenuItem>
  );
};

DrawerListItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  customOnClick: PropTypes.func,
  path: PropTypes.any
};

export default DrawerListItem;
