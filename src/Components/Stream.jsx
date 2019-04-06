import React from 'react'
import Paper from '@material-ui/core/Paper'

const iFrameStyle = {
    width:"1px",
    minWidth:'100%',
    position:'absolute',
    top: '0',
   left: '0',
   bottom: '0',
   right: '0',
   height:'100%'
}

const Container = {
    position:'relative',
    width:"100%",
    paddingTop:'56.25%'  
}

class Stream extends React.Component {
    render() {
        return(
            <div style={Container}>
            <iframe style={iFrameStyle} src="https://player.twitch.tv/?channel=play2raise"
                title="stream"
                frameBorder="0"
                allowFullScreen={true}
                scrolling="no"
                height="378"
                width="620"
                id="streamFrame">
            </iframe>
            </div>
        );
    }
}

export default (Stream);