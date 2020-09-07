import React from 'react';
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
import {getOrders, selectOrder} from '../store/actions';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
        maxWidth: 1300,
        margin: '0 auto',
    },
    button: {
        marginTop: 100,
        padding: '10px 30px'
    },
    selected: {
        backgroundColor: '#0080000f'
    },
    none: {
        backgroundColor: 'none'
    }
});

export function Orders(props) {
    const classes = useStyles();

    const {getOrders, selectOrder, orders} = props;


    function loadOrders() {
        console.log('Load orders');
    }

    function isDisabled() {
        return !orders.filter((order) => order.isChecked).length;
    }

    return (
        <Grid item xs={12}>
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row, i) => (
                            <TableRow className={row.isChecked ? classes.selected : classes.none} onClick={(event) => selectOrder(orders, row.id)} key={i}>
                                <TableCell component="th" scope="row">
                                    <Checkbox checked={row.isChecked} value={row.isChecked}></Checkbox>
                                </TableCell>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="center">{row.productName}</TableCell>
                                <TableCell align="center">{row.sku || '-'}</TableCell>
                                <TableCell align="center">{row.basePrice}</TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
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
            >
                Send
            </Button>
        </Grid>
    );
}

const putStateToProps = (state) =>  {
    return {
        orders: state.orders
    }
};

const putActionsToProps = (dispatch) => {
    return {
        selectOrder: bindActionCreators(selectOrder, dispatch),
        getOrders: bindActionCreators(getOrders, dispatch)

    };
};

export default connect(putStateToProps, putActionsToProps)(Orders)
