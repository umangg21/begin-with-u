import React from 'react';
import { Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Userinfo } from '../contract/contract';


interface IProfileProps {
    userInfo: Userinfo;
}

interface IProfileStates {
    val: number;
}

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        minWidth: `150px`,
        minHeight: `150px`,
        marginRight: `50px`,
    },

    profile: {
        paddingTop: '40px',
        paddingRight: `20px`,
        paddingLeft: `20px`,
        paddingBottom: `20px`,
    },

    userId: {
        fontSize: 28,
        paddingBottom: `20px`,
        fontWeight: 600,
    },

    userName: {
        fontWeight: 500,
        fontSize: `larger`,
    },

    text: {
        paddingRight: `20px`,
        paddingLeft: `3px`,
    },

    boldFont: {
        fontWeight: 500,
    },

    heading: {
        paddingBottom: `10px`,
    },

    profileInfo: {
        fontStyle: 'italic',
        paddingTop: `5px`,
    }

}

export class Profile extends React.Component<IProfileProps, IProfileStates> {

    constructor(props: any) {
        super(props);
        this.state = { val: 0 }
    }

    handleclick = () => {
        this.setState({ val: this.state.val + 1 });
    }

    render() {

        return (

            <div className="layout-xs-column layout-row layout-align-center-center"
                style={styles.profile}>
                <Avatar className="flex-35" alt="Umang Gupta" style={styles.bigAvatar}
                    src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_1b956cd6.jpg"
                />
                <div className="flex-65 layout-column">

                    <span style={styles.userId} >{this.props.userInfo.userId}</span>
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
                    <span style={styles.profileInfo}>"{this.props.userInfo.profileInfo}"</span>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Profile);