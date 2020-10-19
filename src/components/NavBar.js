import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Refresh from '@material-ui/icons/Refresh';
import Add from '@material-ui/icons/Add';

import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { getOrders } from '../store/actions';



const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        button: {
            margin: "100px 10px 20px 0px"
        }
    }),
);

export function NavBar(props) {
    const classes = useStyles();

    const { getOrders, orders } = props;


    return ( 
      <Grid container direction="row" justify="flex-start" >
         <Button variant="outlined"
        color="primary"
        className={classes.button}
        endIcon={ <Add> </Add>}
        disabled={true}
        onClick={() => {getOrders()}} >
            Reimport Orders 
        </Button> 
        
        <Button variant="outlined"
        color="primary"
        className={classes.button}
        endIcon={ <Refresh> </Refresh>}
        onClick={() => {getOrders(orders)}} >
            Reload Orders 
        </Button>
       
      </Grid>           
    );
    }

    const putStateToProps = (state) => {
        return {
            orders: state.orders
        }
    };

    const putActionsToProps = (dispatch) => {
        return {
            getOrders: bindActionCreators(getOrders, dispatch)
        };
    };

    export default connect(putStateToProps, putActionsToProps)(NavBar)