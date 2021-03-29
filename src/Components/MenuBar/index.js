import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


import MenuLeft from "../navLeft";
import Posts from "../posts";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
     
      <Grid item xs={12} className='menu-bar'>
          <Grid container spacing={1}>
            <Grid item xs={3} className='menu-bar__title'>
              <h2>Social Network</h2>
            </Grid>
            <Grid item xs={5} className="menu-bar__search">
              <SearchIcon className="menu-bar__search--icon" />
              <InputBase className='menu-bar__search--input' placeholder='Search...' />
            </Grid>
            <Grid item xs={3} className="menu-bar__list-right">
                <div className="">

                </div>
            </Grid>

          </Grid>
        </Grid>
     
       
      </Grid>
      <div  className='menu-layout'>
      <Grid container spacing={3} className="menu-layout__box">
        <Grid item xs={3}>
          <MenuLeft/>
        </Grid>
        <Grid item xs={5}>
          <Posts/>
        </Grid>
        <Grid item xs={3}>
          <div className='active'>
            <p>ARE ACTIVE</p>

          </div>
        </Grid>
      </Grid>
      </div>
     
    </div>
  );
}
