import React from 'react';

// main lib
import 'script-loader!ace/ace';
// themes
import 'script-loader!ace/theme-twilight';
// mode
import 'script-loader!ace/mode-markdown';

import demo from '../asset/demo.md';

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: demo,
            height: 800
        };
    }

    componentDidMount() {
        let ace = window.ace;

        let editor = ace.edit('editor');
        editor.setTheme('ace/theme/twilight');
        editor.session.setMode('ace/mode/markdown');
        editor.session.setValue(`${this.state.content}`);

        editor.session.on('change', (obj) => {
            // obj 为ace editor document对象, 此处需要返回value 数据用于状态更新
            this.setState({
                content: editor.session.getValue()
            });
        });

        window.onresize = function () {
            let height = window.innerHeight || window.document.body.clientHeight || 600;

            this.setState({
                height
            });
        };
    }

    render() {
        let style = {
            minHeight: this.state.height,
            maxHeight: this.state.height,
            height: this.state.height
        };

        return (
            <div id="editor" style={style}>
            </div>
        );
    }
}

export default Editor;
