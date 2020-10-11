import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';
import Orders from './components/Orders';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import HistoryIcon from '@material-ui/icons/History';
import { Switch, Route, Router, Link } from 'react-router-dom';
import { createBrowserHistory } from "history";
import 'react-sidebar-ui/dist/index.css';
import EmailTemplates from './components/EmailTemplates';
import History from './components/History';
import ContactUs from './components/ContactUs';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'


const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);
const history = createBrowserHistory();

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
}));

function App(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const links = [
        {
            link: '/',
            text: 'Orders'
        },
        {
            link: '/templates',
            text: 'Email templates'
        },
        {
            link: '/History',
            text: 'History'
        },
        {
            link: '/contact-us',
            text: 'Contact Us'
        },
    ]



    const drawer = (
        <div>
          <div className={classes.toolbar} />
          <List>
            {links.map((item, index) => (
              <Link to={item.link} key={index}>
                <ListItem button key={item.text} >
                    <ListItemIcon>{index % 2 === 0 ? <HistoryIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      );
    



    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Provider store={store}>
            <div className="App">
            
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <HistoryIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Mail Me
                </Typography>
                </Toolbar>
            </AppBar>
                <Router history={history}>
                    <Grid container spacing={3}>
                        <Grid item md={3} sm={4}>
                        <nav className={classes.drawer} aria-label="mailbox folders">
                            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                            <Hidden smUp implementation="css">
                            <Drawer
                                container={container}
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                classes={{
                                paper: classes.drawerPaper,
                                }}
                                ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                            </Hidden>
                            <Hidden xsDown implementation="css">
                            <Drawer
                                classes={{
                                paper: classes.drawerPaper,
                                }}
                                variant="permanent"
                                open
                            >
                                {drawer}
                            </Drawer>
                            </Hidden>
                        </nav>
                        </Grid>
                        <Grid item xs={8}>
                            <Switch>
                                <Route path="/templates">
                                    <EmailTemplates/>
                                </Route>
                                <Route path="/history">
                                    <History/>
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs/>
                                </Route>
                                <Route path="/templates">
                                    <EmailTemplates/>
                                </Route>
                                <Route path="/">
                                    <Orders/>
                                </Route>
                            </Switch>
                        </Grid>
                    </Grid>
                </Router>
            </div>
        </Provider>
    );
}
  
export default App;
