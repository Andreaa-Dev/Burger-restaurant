import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(9.4),
    width: "45ch",
  },
}));

export default function CustomerInformation() {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <AccountCircleIcon />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Name" />
        </Grid>
      </Grid>

      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <PhoneInTalkIcon />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Phone number" />
        </Grid>
      </Grid>

      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <MailOutlineIcon />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Email" />
        </Grid>
      </Grid>

      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <GroupAddIcon />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Number of guests" />
        </Grid>
      </Grid>
    </div>
  );
}
