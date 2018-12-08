import React from 'react';
import { Userinfo } from '../contract/contract';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, IconButton } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { styles } from './Styles';


interface IEditProfileProps {
    userInfo: Userinfo;
    openDialog: boolean;
    closeDialog: any;
    saveProfile: Function;
}

interface IEditProfileStates {
    inProgressUserinfo: Userinfo;
}

export default class EditProfile extends React.Component<IEditProfileProps, IEditProfileStates> {


    constructor(props: any) {
        super(props)
        this.state = ({ inProgressUserinfo: this.props.userInfo });
    }

    saveProfile = (event: any) => {
        this.props.saveProfile(this.state.inProgressUserinfo);
        this.props.closeDialog();
    }

    handleChange = (event: any) => {
        let newval = event.target.value;

        switch (event.target.id) {
            case "userId":
                this.setState({ inProgressUserinfo: { ...this.state.inProgressUserinfo, userId: newval } })
                break;
            case "email":
                this.setState({ inProgressUserinfo: { ...this.state.inProgressUserinfo, email: newval } })
                break;
            case "userName":
                this.setState({ inProgressUserinfo: { ...this.state.inProgressUserinfo, userName: newval } })
                break;
            case "profileInfo":
                this.setState({ inProgressUserinfo: { ...this.state.inProgressUserinfo, profileInfo: newval } })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <React.Fragment>
                <Dialog open={this.props.openDialog}
                    scroll='paper'
                    fullWidth={true}
                    maxWidth='sm'>
                    <DialogTitle style={styles.dialogHeader}>
                        <span>Edit Profile info</span>
                    </DialogTitle>
                    <DialogContent >
                        <div className="layout-row layout-xs-column" style={styles.formEditInfo}>
                            <span className="flex-30" style={styles.formLabel}>
                                User Name :
                            </span>
                            <TextField
                                margin="dense"
                                id="userName"
                                type="text"
                                value={this.state.inProgressUserinfo.userName}
                                fullWidth
                                className="flex-70"
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="layout-row layout-xs-column " style={styles.formEditInfo}>
                            <span className="flex-30" style={styles.formLabel}>
                                Email :
                            </span>
                            <TextField
                                margin="dense"
                                id="email"
                                type="text"
                                value={this.state.inProgressUserinfo.email}
                                fullWidth
                                className="flex-70"
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="layout-row layout-xs-column" style={styles.formEditInfo}>
                            <span className="flex-30" style={styles.formLabel}>
                                User Id :
                            </span>
                            <TextField
                                margin="dense"
                                id="userId"
                                type="text"
                                value={this.state.inProgressUserinfo.userId}
                                fullWidth
                                className="flex-70"
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="layout-row layout-xs-column" style={styles.formEditInfo}>
                            <span className="flex-30" style={styles.formLabel}>
                                Profile Info :
                            </span>
                            <TextField
                                margin="dense"
                                id="profileInfo"
                                type="text"
                                value={this.state.inProgressUserinfo.profileInfo}
                                fullWidth
                                className="flex-70"
                                onChange={this.handleChange}
                            />
                        </div>
                    </DialogContent>

                    <DialogActions style={styles.dialogActions} className="layout-row layout-align-space-around-center">

                        <Button
                            variant="contained"
                            color="default"
                            size="small"
                            style={styles.dialogButton}
                            onClick={this.props.closeDialog}>
                            Cancel
                        </Button>

                        <Button
                            variant="contained"
                            color="default"
                            size="small"
                            style={styles.dialogButton}
                            onClick={this.saveProfile}>
                            <SaveIcon />
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>

            </React.Fragment>
        )
    }
}
