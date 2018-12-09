import React from 'react';
import { Content } from './Content';
import Profile from './Profile';
import { Users, Userinfo, Post } from '../contract/contract';

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

    //  saveProfile : Method will save modified info of a profile
    saveProfile = (data: Userinfo) => {
        this.setState({ user: { ...this.state.user, userinfo: data } })
    }

    //  increaseLike : Method will save increase the no of likes of a post
    increaseLike = (postData: Post) => {
        let postsData = this.state.user.posts
        let postIndex = postsData.findIndex(post => post.Image == postData.Image)
        postsData[postIndex].likes += 1
        this.setState({ user: { ...this.state.user, posts: postsData } })
    }
    
    //  addComment : Method will add comment to a post
    addComment = (postData: Post, newComment: string) => {
        let postsData = this.state.user.posts
        let postIndex = postsData.findIndex(post => post.Image == postData.Image)
        if (postsData[postIndex].comments == null) {
            postsData[postIndex].comments = [];
        }
        postsData[postIndex].comments.push(newComment);
        this.setState({ user: { ...this.state.user, posts: postsData } })
    }
    
    //  deletePost : Method will delete the post
    deletePost = (postData: Post) => {
        let postsData = this.state.user.posts;
        let postIndex = postsData.findIndex(post => post.Image == postData.Image);
        postsData.splice(postIndex, 1);
        this.setState({ user: { ...this.state.user, posts: postsData } });
    }

    //  deletePost : Method will add a new post
    addPost = (postData: Post) => {
        let postsData = this.state.user.posts;        
        postsData.unshift(postData)
        this.setState({ user: { ...this.state.user, posts: postsData } });
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="layout-row" style={getHomeStyle()}>
                    <div className="flex-15"></div>
                    <div className="flex-70 layout-column layout-align-space-around-center">
                        <Profile
                            userInfo={this.state.user.userinfo}
                            saveProfile={this.saveProfile}
                            addPost={this.addPost}
                        />
                        {this.state.user.posts &&
                            <Content
                                userInfo={this.state.user.userinfo}
                                posts={this.state.user.posts}
                                increaseLike={this.increaseLike}
                                addComment={this.addComment}
                                deletePost={this.deletePost}
                            />}
                    </div>
                    <div className="flex-15"></div>
                </div>
            </React.Fragment>
        );
    }

}

export default Home;