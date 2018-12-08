import React from 'react'
import { Post, Userinfo } from '../contract/contract';
import { Dialog, DialogContent, IconButton, TextField } from '@material-ui/core';
import { styles } from './Styles';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';

interface IImageViewerProps {
    userInfo: Userinfo;
    post: Post;
    openViewer: boolean;
    closeImageView: any;
    increaseLike: any;
    addComment: any
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

    addComment = (event: any) =>{
        if(this.state.comment){
            this.props.addComment(this.props.post, this.state.comment);        
            this.setState({ comment: "" });
        }
    }

    increaseLike = (event: any) => {
        this.props.increaseLike(this.props.post);
    }

    render() {
        let comments;

        if (this.props.post.comments) {
            comments = this.props.post.comments.map(comment => (
                <span style={styles.comment}>{comment}</span>
            ))
        }

        const likeString = `${this.props.post.likes} likes `


        return (
            <React.Fragment>
                <Dialog open={this.props.openViewer}
                    disableEscapeKeyDown
                    disableRestoreFocus
                    scroll='paper'
                    fullWidth={true}>
                    <DialogContent className="layout-row layout-xs-column " style={styles.imageDialog}>
                        <img
                            className="flex-60"
                            src={this.props.post.Image}>
                        </img>

                        <div className="flex-40" style={styles.imageInfoDialog}>

                            <div className="layout-row layout-align-space-between-center" style={styles.imageInfo}>
                                <span style={styles.boldFont}>{this.props.userInfo.userId}</span>
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

                        </div>

                    </DialogContent>

                </Dialog>

            </React.Fragment>
        )
    }
}

export default ImageViewer
