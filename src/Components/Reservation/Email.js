import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(35),
    width: "45ch",
  },
}));

export default function Email() {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <MailOutlineIcon />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Put your email here." />
        </Grid>
      </Grid>
    </div>
  );
}
