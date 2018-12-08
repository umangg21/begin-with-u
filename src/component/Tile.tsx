import React from 'react';
import { withStyles } from '@material-ui/core';
import { Post } from '../contract/contract';

interface ITileProps {
    post : Post;
}

interface ITileStates {
}

const padding: string = '15px';

const styles = {
    tileView: {
        paddingBottom: padding,
        paddingLeft: padding,
        paddingRight: padding,
        paddingTop: padding,
    },

    image:{
        height: `250px`,
        width: `250px`,        
    }

}

export class Tile extends React.Component<ITileProps, ITileStates> {
    render() {
        return (
            <div style={styles.tileView} className="">
                <img style={styles.image} src={this.props.post.Image}></img>
            </div>
        )
    }
}

export default withStyles(styles)(Tile);;