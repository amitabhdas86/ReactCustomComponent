import React from 'react';
import {Tab} from 'semantic-ui-react';

const tabRender = [
    {menuItem: "Tab 1", render: () => <Tab.Pane>Here is Content for Tab 1</Tab.Pane> },
    {menuItem: "Tab 2", render: () => <Tab.Pane>Here is Content for Tab 2</Tab.Pane> },
    {menuItem: "Tab 3", render: () => <Tab.Pane>Here is Content for Tab 3</Tab.Pane> },
    {menuItem: "Tab 4", render: () => <Tab.Pane>Here is Content for Tab 4</Tab.Pane> },

];
const Tabbed = () => {
    return(
        <div className="ui container" style={{marginLeft:"40%",}}>
            <h2>Tabs Component</h2>
            <Tab panes={tabRender}/>
        </div>
    );
};

export default Tabbed