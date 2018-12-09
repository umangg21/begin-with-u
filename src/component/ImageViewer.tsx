import React from 'react'
import { Post, Userinfo } from '../contract/contract';
import { Dialog, DialogContent, IconButton, TextField, Button } from '@material-ui/core';
import { styles } from './Styles';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

interface IImageViewerProps {
    userInfo: Userinfo;
    post: Post;
    openViewer: boolean;
    closeImageView: any;
    increaseLike: any;
    addComment: any;
    deletePost: any;
}

interface IImageViewerStates {
    comment: string;
}

export class ImageViewer extends React.Component<IImageViewerProps, IImageViewerStates> {

    constructor(props: any) {
        super(props)
        this.state = { comment: "" };
    }


    handleChange = (event: any) => {
        let newval = event.target.value;
        this.setState({ comment: newval });
    }

    addComment = (event: any) => {
        if (this.state.comment) {
            this.props.addComment(this.props.post, this.state.comment);
            this.setState({ comment: "" });
        }
    }

    increaseLike = (event: any) => {
        this.props.increaseLike(this.props.post);
    }

    deletePost = (event: any) => {
        this.props.deletePost(this.props.post);
        this.props.closeImageView();
    }

    render() {
        let comments;

        if (this.props.post.comments) {
            comments = this.props.post.comments.map(comment => (
                <span style={styles.comment}>{comment}</span>
            ))
        }

        const likeString = `${this.props.post.likes} likes `
        let time = new Date(this.props.post.timestamp);
        const UploadeString = "Uploaded: " + time.toDateString();

        return (
            <React.Fragment>
                <Dialog open={this.props.openViewer}
                    disableEscapeKeyDown
                    disableRestoreFocus
                    scroll='paper'                    
                    maxWidth="md"
                    fullWidth={true}>
                    <div className="layout-row layout-xs-column " style={styles.imageDialog}>
                        <div className="flex-60 layout-row">
                            <img
                                className="flex-100"
                                src={this.props.post.Image}>
                            </img>
                        </div>

                        <div className="flex-40" style={styles.imageInfoDialog}>

                            <div className="layout-row layout-align-space-between-center" style={styles.imageInfo}>
                                <span style={styles.ImageUserId}>{this.props.userInfo.userId}</span>
                                <IconButton color="inherit"
                                    onClick={this.props.closeImageView}
                                    aria-label="Close">
                                    <CloseIcon />
                                </IconButton>

                            </div>
                            <div className="layout-column" style={styles.imageInfo} >
                                <span>Comments:</span>
                                {comments}</div>
                            <div className="layout-row layout-align-start-center" style={styles.imageInfo} >
                                <IconButton color="inherit"
                                    onClick={this.increaseLike}
                                    aria-label="Like">
                                    <FavoriteIcon />
                                </IconButton>
                                <span style={styles.boldFont}>{likeString} </span>

                            </div>
                            <div className="layout-row layout-align-start-center" style={styles.imageInfo} >
                                <span style={styles.timestamp} >{UploadeString}</span>
                            </div>
                            <div className="layout-row layout-align-space-between-center" style={styles.imageInfo} >
                                <TextField
                                    margin="normal"
                                    id="comment"
                                    type="text"
                                    value={this.state.comment}
                                    label="Add a comment"
                                    fullWidth
                                    className="flex-70"
                                    onChange={this.handleChange}
                                    style={styles.addComment}
                                />
                                <IconButton color="inherit"
                                    onClick={this.addComment}
                                    aria-label="Add Comment">
                                    <AddIcon />
                                </IconButton>
                            </div>

                            <div className="layout-row layout-align-center-center" style={styles.deleteButton}>
                                <Button
                                    variant="contained"
                                    color="default"
                                    size="small"
                                    onClick={this.deletePost}>
                                    <DeleteIcon />
                                    Delete Post
                            </Button>
                            </div>
                        </div>

                    </div>

                </Dialog>

            </React.Fragment>
        )
    }
}

export default ImageViewer
