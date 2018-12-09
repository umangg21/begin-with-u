import React from 'react';
import { Post, Userinfo } from '../contract/contract';
import { Tile } from './Tile';
import { withStyles } from '@material-ui/core';

interface IContentProps {
    userInfo: Userinfo;
    posts: Post[];
    increaseLike: any;
    addComment: any;
    deletePost: any;
}

interface IContentStates {
}

const styles = {
    grid: {
        flexWrap: 'wrap' as 'wrap',
    },
}


const CodeString = `Code<👓/> Eat🍔 Sleep😴 Repeat🔁`
export class Content extends React.Component<IContentProps, IContentStates> {

    constructor(props: any) {
        super(props)
    }

    render() {

        let count = 0;
        const Images = this.props.posts.map(post => (
            <Tile
                userInfo={this.props.userInfo}
                key={++count}
                post={post}
                increaseLike={this.props.increaseLike}
                addComment={this.props.addComment}
                deletePost={this.props.deletePost}
            ></Tile>
        ))

        return (
            <div style={styles.grid} className="layout-row layout-align-center">
                {Images}
            </div>
        )
    }
}

export default withStyles(styles)(Content);