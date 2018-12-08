import React from 'react';
import { Avatar, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Userinfo } from '../contract/contract';

import SettingIcon from '@material-ui/icons/Settings';
import EditProfile from './EditProfile';
import { styles } from './Styles';

interface IProfileProps {
    userInfo: Userinfo;
    saveProfile: Function;
}

interface IProfileStates {
    openDialog: boolean;
}

export class Profile extends React.Component<IProfileProps, IProfileStates> {

    constructor(props: any) {
        super(props);
        this.state = { openDialog: false }
    }

    handleclick = (event: any) => {
        this.setState({ openDialog: true });
    }

    closeEditProfile = () => {
        this.setState({ openDialog: false });
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
                        <div className="show-xs" style={styles.formEditInfo}></div>
                        <span style={styles.userId} >{this.props.userInfo.userId}</span>
                        <Button
                            variant="contained"
                            color="default"
                            size="small"
                            style={styles.editButton}
                            onClick={this.handleclick}>
                            <SettingIcon />
                            Edit Profile
                        </Button>
                        {this.state.openDialog &&
                            <EditProfile
                                openDialog={this.state.openDialog}
                                closeDialog={this.closeEditProfile}
                                userInfo={this.props.userInfo}
                                saveProfile={this.props.saveProfile}
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