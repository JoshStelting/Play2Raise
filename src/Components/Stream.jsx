import React from 'react'
import Paper from '@material-ui/core/Paper'

const iFrameStyle = {
    width:"1px",
    minWidth:'100%'   
}

class Stream extends React.Component {
    render() {
        return(
            <div>
            <iFrameResize />
            <iframe style={iFrameStyle} src="https://player.twitch.tv/?channel=play2raise"
                title="stream"
                frameBorder="0"
                allowFullScreen={true}
                scrolling="no"
                height="378"
                width="620"
                id="streamFrame">
            </iframe>
            <iFrameResize />
            </div>
        );
    }
}

export default (Stream);