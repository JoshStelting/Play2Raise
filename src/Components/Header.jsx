import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu';
class Header extends React.Component {
    render(){
        return(
        <AppBar position="static">
            <Toolbar variant="dense" style={{ paddingLeft:"5px" }}>
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <img src="/images/hatLogo.png" alt="Play2Raise" />
                <Typography variant="h5" color={"inherit"} style={{ flex: 1 }}>
                 Mario Mayhem 10
                </Typography>
                <Button variant="contained" color="secondary">
                    Donate
                </Button>
            </Toolbar>
        </AppBar>
        )
    }
}

export default (Header);
