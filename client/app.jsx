import React from 'react';
import css from './styles.css';

class app extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <div class="all"></div>
                <div id="Header" class="container">Tec Tac Toe
                        <div class="panel" id="panel">
                        <button id="1" onclick="move(this)"></button>
                        <button id="2" onclick="move(this)"></button>
                        <button id="3" onclick="move(this)"></button>

                        <button id="4" onclick="move(this)"></button>
                        <button id="5" onclick="move(this)"></button>
                        <button id="6" onclick="move(this)"></button>

                        <button id="7" onclick="move(this)"></button>
                        <button id="8" onclick="move(this)"></button>
                        <button id="9" onclick="move(this)"></button>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<app />, document.getElementById('app'));
