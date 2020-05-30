import React from 'react';

class EvenComp extends React.Component {

    render() {
            return (
                <div>
                    <h1>{`${this.props.whatToSay}`}</h1>
                    <button onClick={this.props.onPushMeAction}>
                        Push Me
                    </button>
                </div>
            )
        }
}

export default EvenComp;