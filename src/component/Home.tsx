import React from 'react';
import { Content } from './Content';
import Profile from './Profile';
import { Users } from '../contract/contract';
import axios from 'axios';

export interface IHomeProps {
}

export interface IHomeState {
    user: Users;
    value: number;
}

function getHomeStyle() {
    return {
        minHeight: "-webkit-fill-available",
        backgroundColor: `#EEEEEE`
    }
}

const IMAGE_API = 'http://starlord.hackerearth.com/insta';

export class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: any) {
        super(props);

        let userData = require('../contract/userData.json')
        this.state = { value: 0, user: userData };

    }

    // getImages(){
    //     fetch(IMAGE_API)
    //     .then(response => response.json())
    //     .then(
    //         data => this.setState( {
    //             user: { ...this.state.user, posts : data }})
    //     )
    //     .catch()
    // }

    handleChange = (event: any, val: any) => {
        this.setState({ value: val });
        event.preventDefault();
    };

    componentDidMount() {


        axios(IMAGE_API,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                withCredentials: true,            
            })
            .then((data: any) => {
                console.log(data)
                this.setState({
                    user: { ...this.state.user, posts: data }
                })
            })
            .catch(
                ex =>
                    console.log(ex)
            )
    }

    render() {
        return (
            <React.Fragment>
                <div className="layout-row" style={getHomeStyle()}>
                    <div className="flex-15"></div>
                    <div className="flex-70 layout-column layout-align-space-around-center">
                        <Profile userInfo={this.state.user.userinfo} />
                        {this.state.user.posts && <Content posts={this.state.user.posts} />}
                    </div>
                    <div className="flex-15"></div>
                </div>
            </React.Fragment>
        );
    }

}

export default Home;