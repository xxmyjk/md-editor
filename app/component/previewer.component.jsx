import React from 'react';

import MD from 'markdown-it';
import hljs from 'highlight.js/lib/index';

import 'highlight.js/styles/github.css';

import demo from '../asset/demo.md';

let md = new MD({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) {}
        }

        return str; // use external default escaping
    }
});

class Previewer extends React.Component {
    constructor(props) {
        super(props);

        let previewContent = md.render(demo);

        this.state = {
            previewContent,
            height: 800
        };
    }

    componentDidMount() {
        window.onresize = function () {
            let height = window.innerHeight || window.document.body.clientHeight || 600;

            this.setState({
                height
            });
        };
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.previewContent}}>
            </div>
        );
    }
}

export default Previewer;
