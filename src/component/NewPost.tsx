import React from 'react'
import { Userinfo, Post } from '../contract/contract';
import { Dialog, DialogContent, DialogActions, Button, TextField, IconButton } from '@material-ui/core';
import { styles } from './Styles';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

interface INewPostProps {
    userInfo: Userinfo;
    openDialog: boolean;
    closeDialog: any;
    addPost: Function;
}

interface INewPostStates {
    inProgressPost: Post;
}

export default class NewPost extends React.Component<INewPostProps, INewPostStates> {

    constructor(props: any) {
        super(props)
        let rawPost: Post = { likes: 0, comments: [""], Image: "", timestamp: "" };
        this.state = ({ inProgressPost: rawPost });
        this.getFileFromInput = this.getFileFromInput.bind(this);
        this.manageUploadedFile = this.manageUploadedFile.bind(this);
    }

    savePost = (event: any) => {
        this.props.addPost(this.state.inProgressPost);
        this.props.closeDialog();
    }

    handleCommentChange = (event: any) => {
        const newComment = [event.target.value];
        this.setState({ inProgressPost: { ...this.state.inProgressPost, comments: newComment } });
    }

    getFileFromInput(file: any): Promise<any> {
        return new Promise(function (resolve, reject) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { resolve(reader.result); };
            reader.onerror = reject;
        });
    }

    private manageUploadedFile(binary: String) {
        var date = new Date();
        const currentTime = date.toLocaleString();
        this.setState({
            inProgressPost:
            {
                ...this.state.inProgressPost,
                Image: binary.toString(),
                timestamp: currentTime
            }
        });

    }

    handleFile = (event: any) => {
        event.persist();
        Array.from(event.target.files).forEach(file => {
            this.getFileFromInput(file)
                .then((binary: any) => {
                    this.manageUploadedFile(binary);
                }).catch(function (reason: any) {
                    console.log(`Error during upload ${reason}`);
                    event.target.value = '';
                });
        });
    }

    render() {
        return (
            <React.Fragment>
                <Dialog
                    disableEscapeKeyDown
                    disableRestoreFocus
                    maxWidth="md"
                    scroll="paper"
                    fullWidth={true}
                    open={this.props.openDialog}
                >

                    <div className="layout-row layout-xs-column">
                        <div className="flex-60 layout-row" style={styles.newPostImageContainer}>
                            {this.state.inProgressPost.Image &&
                                <img
                                    className="flex-100"
                                    src={this.state.inProgressPost.Image}></img>
                            }
                        </div>
                        <div className="flex-40" style={styles.newPostInfoDialog}>
                            <div className="layout-row layout-align-space-between-center" style={styles.newPostHead}>
                                <span style={styles.ImageUserId}>New Post</span>
                                <IconButton color="inherit"
                                    onClick={this.props.closeDialog}
                                    aria-label="Close">
                                    <CloseIcon />
                                </IconButton>
                            </div>

                            <div className="layout-row layout-align-start-center" >
                                <input
                                    accept="image/*,.jpg,.png,.jpeg"
                                    style={{ display: 'none' }}
                                    id="file"
                                    type="file"
                                    onChange={this.handleFile} />

                                <label htmlFor="file">
                                    <Button
                                        variant="contained"
                                        color="default"
                                        component="span"
                                        style={{ margin: 8 }}
                                        onClick={e => e.stopPropagation()}>
                                        <CloudUploadIcon />
                                        Upload
                                </Button>
                                </label>
                            </div>


                            <div className="layout-row layout-align-start-center" >
                                <TextField
                                    margin="normal"
                                    id="comment"
                                    type="text"
                                    value={this.state.inProgressPost.comments[0]}
                                    label="Add a comment"
                                    fullWidth
                                    onChange={this.handleCommentChange}
                                />
                            </div>

                            <div style={styles.dialogActions} className="layout-row layout-align-space-around-center">
                                <Button
                                    variant="contained"
                                    color="default"
                                    size="small"
                                    style={styles.dialogButton}
                                    onClick={this.props.closeDialog}>
                                    Cancel
                                </Button>
                                <Button
                                    disabled={this.state.inProgressPost.Image == ""}
                                    variant="contained"
                                    color="default"
                                    size="small"
                                    style={styles.dialogButton}
                                    onClick={this.savePost}>
                                    <SaveIcon />
                                    Save Post
                                </Button>
                            </div>
                        </div>
                    </div>

                </Dialog>

            </React.Fragment>
        )
    }
}
