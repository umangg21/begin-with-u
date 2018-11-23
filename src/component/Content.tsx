import React from 'react';

interface IContentProps {

}

interface IContentStates {

}

function getFontStyle() {
    return {
        color: `white`,
        fontSize: 50,
        fontFamily: 'forte',

    }
}

function getContentStyle() {
    return {
        backgroundColor: `#263238`
    }
}

export class Content extends React.Component<IContentProps, IContentStates> {
    render() {
        return (
            <div style={getContentStyle()} className="flex-50 layout-row layout-align-center-center">
                <span style={getFontStyle()} > Bhow Bhow..</span>
            </div>
        )
    }
}

export default Content;