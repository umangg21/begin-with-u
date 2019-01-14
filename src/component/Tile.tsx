import React from 'react';
import { withStyles, Card, CardActionArea } from '@material-ui/core';
import { Post, Userinfo } from '../contract/contract';
import { styles } from './Styles';
import ImageViewer from './ImageViewer';

interface ITileProps {
    userInfo: Userinfo;
    post: Post;
    increaseLike: any;
    addComment: any;
    deletePost: any;
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
            <Card style={styles.tileView} className="">
                <CardActionArea
                >
                    <img
                        style={styles.image}
                        onClick={this.openViewer}
                        src={this.props.post.Image}>
                    </img>
                </CardActionArea>


                {this.state.openViewer &&
                    <ImageViewer
                        userInfo={this.props.userInfo}
                        post={this.props.post}
                        openViewer={this.state.openViewer}
                        closeImageView={this.closeViewer}
                        increaseLike={this.props.increaseLike}
                        addComment={this.props.addComment}
                        deletePost={this.props.deletePost}
                    ></ImageViewer>}
            </Card>
        )
    }
}

export default withStyles(styles)(Tile);;