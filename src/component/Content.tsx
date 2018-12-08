import React from 'react';
import { Post } from '../contract/contract';
import { Tile } from './Tile';
import { withStyles } from '@material-ui/core';

interface IContentProps {
    posts: Post[];
}

interface IContentStates {
}

const styles ={
    grid :{
        flexWrap: 'wrap' as 'wrap',
    },
}


const CodeString = `Code<👓/> Eat🍔 Sleep😴 Repeat🔁`
export class Content extends React.Component<IContentProps, IContentStates> {

    constructor(props: any) {
        super(props)
    }

    render() {

        const Images = this.props.posts.map(post => (
            <Tile post={post}></Tile>
        ))

        return (
            <div style={styles.grid} className="layout-row layout-align-center">
            { Images }
            </div>
        )
    }
}

export default withStyles(styles)(Content);