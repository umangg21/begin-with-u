import React from 'react';
import { Content } from './Content';
import Profile from './Profile';
import { Users, Userinfo, Post } from '../contract/contract';
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

    saveProfile = (data: Userinfo) => {
        this.setState({ user: { ...this.state.user, userinfo: data } })
    }

    increaseLike = (postData: Post) =>{
        let postsData= this.state.user.posts
        let postIndex = postsData.findIndex(post => post.Image == postData.Image )
        postsData[postIndex].likes +=1
        this.setState({ user: { ...this.state.user, posts: postsData } })
    }

    addComment= (postData: Post, newComment: string) =>{
        let postsData= this.state.user.posts
        let postIndex = postsData.findIndex(post => post.Image == postData.Image )
        if(postsData[postIndex].comments == null){
            postsData[postIndex].comments = [];
        }
        postsData[postIndex].comments.push(newComment);
        this.setState({ user: { ...this.state.user, posts: postsData } })
    }
    // componentDidMount() {


    //     axios(IMAGE_API,
    //         {
    //             method: 'GET',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             withCredentials: true,            
    //         })
    //         .then((data: any) => {
    //             console.log(data)
    //             this.setState({
    //                 user: { ...this.state.user, posts: data }
    //             })
    //         })
    //         .catch(
    //             ex =>
    //                 console.log(ex)
    //         )
    // }

    render() {
        return (
            <React.Fragment>
                <div className="layout-row" style={getHomeStyle()}>
                    <div className="flex-15"></div>
                    <div className="flex-70 layout-column layout-align-space-around-center">
                        <Profile
                            userInfo={this.state.user.userinfo}
                            saveProfile={this.saveProfile}
                        />
                        {this.state.user.posts &&
                            <Content
                                userInfo={this.state.user.userinfo}
                                posts={this.state.user.posts}
                                increaseLike={this.increaseLike}
                                addComment={this.addComment}
                            />}
                    </div>
                    <div className="flex-15"></div>
                </div>
            </React.Fragment>
        );
    }

}

export default Home;