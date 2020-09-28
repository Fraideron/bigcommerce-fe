import React, {useEffect} from 'react';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import {getOrders, selectOrder, sendOrders} from '../store/actions';



const useStyles = makeStyles({
    table: {
        minWidth: 650,
        maxWidth: 1300,
        margin: '0 auto',
    },
    button: {
        marginTop: 50,
        marginBottom: 50,
        padding: '10px 30px'
    },
    selected: {
        backgroundColor: '#0080000f'
    },
    none: {
        backgroundColor: 'none'
    },
    initialisation: {
        top: '0px',
        left: '0px',
        width: '100vw',
        height: '100%',
        margin: '0 auto',
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.5em'
      }

});


export function Orders(props) {
    const classes = useStyles();

    const { sendOrders, selectOrder, getOrders, orders, type} = props;

    function isDisabled() {
        return !orders.filter((order) => order.isChecked).length;
    }

    useEffect(() => {
        getOrders([]);   
    }, []);

    function Information() {
        if (type === 'FETCH_ORDERS_REQUEST') {
            return (
                <div className={classes.initialisation}>
                <span>Orders request...</span>
              </div>
            )
        } 
        return null;
    }

    return (
        <Grid item xs={12}>
            <Information/>
            <NavBar></NavBar>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell>Select</TableCell>
                            <TableCell>Order Id</TableCell>
                            <TableCell align="center">Product Name</TableCell>
                            <TableCell align="center">SKU</TableCell>
                            <TableCell align="center">Base Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Location</TableCell>
                            <TableCell align="center">Customer Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row, i) => (
                            <TableRow className={row.isChecked ? classes.selected : classes.none} onClick={(event) => selectOrder(orders, row.productName)} key={i}>
                                <TableCell component="th" scope="row">
                                    <Checkbox checked={row.isChecked} value={row.isChecked}></Checkbox>
                                </TableCell>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="center">{row.productName}</TableCell>
                                <TableCell align="center">{row.sku || '-'}</TableCell>
                                <TableCell align="center">{row.basePrice}</TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                            <TableCell align="center">{row.country}, {row.city}</TableCell>
                            <TableCell align="center">{row.first_name} {row.last_name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                variant="contained"
                color="primary"
                disabled={isDisabled()}
                className={classes.button}
                endIcon={<SendIcon></SendIcon>}
                onClick={(event) => sendOrders(orders)}
            >
                Send
            </Button>
        </Grid>
    );
}

const putStateToProps = (state) =>  {
    return {
        type: state.type,
        orders: state.orders
    }
};

const putActionsToProps = (dispatch) => {
    return {
        selectOrder: bindActionCreators(selectOrder, dispatch),
        getOrders: bindActionCreators(getOrders, dispatch),
        sendOrders: bindActionCreators(sendOrders, dispatch)
    };
};

export default connect(putStateToProps, putActionsToProps)(Orders)
