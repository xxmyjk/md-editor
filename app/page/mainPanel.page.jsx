import React from 'react';

import EditorComponent from '../component/editor.component';
import PreviewerComponent from '../component/previewer.component';

const MainPanel = function (props) {
    return (
        <div>
            <EditorComponent/>
            <PreviewerComponent/>
        </div>
    );
};

export default MainPanel;