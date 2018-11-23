import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Typography, Tab, colors } from '@material-ui/core';
import { Color } from '@material-ui/core';
import { Content } from './Content';
import Profile from './Profile';

export interface IHomeProps {
}

export interface IHomeState {
    value: number;
}

function getHomeStyle() {
    return {
        height:"-webkit-fill-available"
    }
}

export class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: any) {
        super(props);
        this.state = { value: 0 };
    }

    handleChange = (event: any, val: any) => {
        this.setState({ value: val });
        event.preventDefault();
    };

    render() {
        return (

            <React.Fragment>
                <div className="layout-xs-column layout-row" layout-xs="column" style={getHomeStyle()}>
                    <Content/>
                    <Profile/>
                </div>
            </React.Fragment>
        );
    }

}

export default Home;