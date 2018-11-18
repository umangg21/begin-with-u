import React from 'react';

export interface IMainProps {

}

export interface IMainState {

}

export class Main extends React.Component<IMainProps, IMainState> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                Magic will begin with U soon ...
            </div>
        )
    }
}

export default Main;