import React from 'react';

interface IContentProps {

}

interface IContentStates {

}

function getContentStyle(){
    return{
        backgroundColor : `#263238`
    }
}

export class Content extends React.Component<IContentProps, IContentStates> {
    render() {
        return (
            <div style={getContentStyle()}  className="flex-50 layout-row layout-align-center-center">
                Content will appear here.
            </div>
        )
    }
}

export default Content;