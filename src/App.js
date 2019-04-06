import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Header from './Components/Header';
import Stream from './Components/Stream';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';


const iFrameStyle = {
    width:"1px",
    minWidth:'100%',  
    height:'100%' 
}

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
  });

class App extends React.Component {
    constructor(props) {
        super(props);
        this.classes = {styles};
    }

    render() {
        return(
        <MuiThemeProvider theme={theme}>
        <Header />
        <div style={{margin:"20px"}}>
            <Grid container spacing={16}>
                <Grid item xs={9}>  
                    <Stream />
                </Grid>
                <Grid item xs={3}>
                    <iframe style={iFrameStyle} src="https://www.twitch.tv/embed/play2raise/chat?darkpopout" 
                    title="Chat"
                    frameBorder="0" 
                    scrolling="no" 
                    height="500" 
                    width="350">
                    </iframe>
                </Grid>
            </Grid>
        </div>
        </MuiThemeProvider>
    )
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(App);