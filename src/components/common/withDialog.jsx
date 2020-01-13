import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles, IconButton, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  closeButton: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const withDialog = Component => {
  const WithDialog = ({ open, onClose, title, ...props }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
    const classes = useStyles();

    return (
      <>
        <Dialog
          open={open}
          onClose={onClose}
          fullScreen={fullScreen}
          maxWidth="xs"
        >
          <Grid container>
            <Grid item xs={10}>
              <DialogTitle>{title}</DialogTitle>
            </Grid>
            <Grid item xs={2} style={{ textAlign: "right" }}>
              <Box display="flex" alignItems="center" css={{ height: 64 }}>
                <IconButton
                  id="closeDialog"
                  onClick={onClose}
                  className={classes.closeButton}
                  aria-label="Cancel"
                  size="small"
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Component onClose={onClose} {...props} />
        </Dialog>
      </>
    );
  };
  return WithDialog;
};

withDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default withDialog;
