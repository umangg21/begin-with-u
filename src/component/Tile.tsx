import React from 'react';
import { withStyles } from '@material-ui/core';
import { Post, Userinfo } from '../contract/contract';
import { styles } from './Styles';
import ImageViewer from './ImageViewer';

interface ITileProps {
    userInfo: Userinfo;
    post: Post;
    increaseLike: any;
    addComment: any;
}

interface ITileStates {
    openViewer: boolean;
}

export class Tile extends React.Component<ITileProps, ITileStates> {

    constructor(props: any) {
        super(props)

        this.state = { openViewer: false }
    }

    openViewer = (event: any) => {
        this.setState({ openViewer: true })
    }

    closeViewer = (event: any) => {
        this.setState({ openViewer: false })
    }

    render() {
        return (
            <div style={styles.tileView} className="">

                <img
                    style={styles.image}
                    onClick={this.openViewer}
                    src={this.props.post.Image}>
                </img>

                {this.state.openViewer &&
                    <ImageViewer
                        userInfo={this.props.userInfo}
                        post={this.props.post}
                        openViewer={this.state.openViewer}
                        closeImageView={this.closeViewer}
                        increaseLike={this.props.increaseLike}
                        addComment={this.props.addComment}
                    ></ImageViewer>}
            </div>
        )
    }
}

export default withStyles(styles)(Tile);;