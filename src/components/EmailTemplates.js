import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>
  createStyles({
    marginTop: {
      marginTop: 100,
    }
  }),
);

export default function EmailTemplates() {
  const classes = useStyles();

  return(
    <div className={classes.marginTop}>
      <h2>
        Comming soon...
      </h2>
    </div>
  );
}