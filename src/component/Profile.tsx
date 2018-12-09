import React from 'react';
import { Avatar, Button, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Userinfo } from '../contract/contract';
import EditIcon from '@material-ui/icons/Edit';
import SettingIcon from '@material-ui/icons/Settings';
import EditProfile from './EditProfile';
import { styles } from './Styles';
import NewPost from './NewPost';

interface IProfileProps {
    userInfo: Userinfo;
    saveProfile: Function;
    addPost: Function;
}

interface IProfileStates {
    openEditProfileDialog: boolean;
    openNewPostDialog: boolean;
}

export class Profile extends React.Component<IProfileProps, IProfileStates> {

    constructor(props: any) {
        super(props);
        this.state = { openEditProfileDialog: false, openNewPostDialog: false }
    }

    openEditProfile = (event: any) => {
        this.setState({ openEditProfileDialog: true });
    }

    closeEditProfile = () => {
        this.setState({ openEditProfileDialog: false });
    }

    openNewPost = (event: any) => {
        this.setState({ openNewPostDialog: true });
    }

    closeNewPost = () => {
        this.setState({ openNewPostDialog: false });
    }

    render() {

        return (

            <div className="layout-xs-column layout-row layout-align-center-center"
                style={styles.profile}>
                <Avatar className="flex-35" alt={this.props.userInfo.userName} style={styles.bigAvatar}
                    src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_1b956cd6.jpg"
                />
                <div className="flex-65 layout-column">
                    <div className="layout-row layout-xs-column" style={styles.heading}>
                        <div className="show-xs  hide-gt-xs" style={styles.formEditInfo}></div>
                        <span style={styles.userId} >{this.props.userInfo.userId}</span>
                        <Button
                            variant="contained"
                            color="default"
                            size="small"
                            style={styles.editButton}
                            onClick={this.openEditProfile}>
                            <SettingIcon />
                            Edit Profile
                        </Button>
                        {this.state.openEditProfileDialog &&
                            <EditProfile
                                openDialog={this.state.openEditProfileDialog}
                                closeDialog={this.closeEditProfile}
                                userInfo={this.props.userInfo}
                                saveProfile={this.props.saveProfile}
                            />}
                        <Button
                            variant="contained"
                            color="default"
                            size="small"
                            style={styles.editButton}
                            onClick={this.openNewPost}>
                            <EditIcon />
                            New Post
                        </Button>
                        {this.state.openNewPostDialog &&
                            <NewPost
                                openDialog={this.state.openNewPostDialog}
                                closeDialog={this.closeNewPost}
                                userInfo={this.props.userInfo}
                                addPost={this.props.addPost}
                            />}
                    </div>
                    <div className="layout-row layout-xs-column" style={styles.heading}>
                        <span className="layout-row" style={styles.text}>
                            <span style={styles.boldFont}>{this.props.userInfo.noOfPosts}</span>
                            <span style={styles.text}> posts</span>
                        </span>
                        <span className="layout-row" style={styles.text}>
                            <span style={styles.boldFont}>{this.props.userInfo.followers}</span>
                            <span style={styles.text}> followers</span>
                        </span>
                        <span className="layout-row" style={styles.text}>
                            <span style={styles.boldFont}>{this.props.userInfo.following}</span>
                            <span style={styles.text}> following</span>
                        </span>
                    </div>
                    <span style={styles.userName}>{this.props.userInfo.userName}</span>
                    {this.props.userInfo.profileInfo &&
                        <span style={styles.profileInfo}>"{this.props.userInfo.profileInfo}"</span>
                    }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Profile);