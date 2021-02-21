import React from 'react';
import "style/block/control-bar.css";
import Bell from 'js/views/components/atoms/bell.js';
import Edit from 'js/views/components/atoms/edit.js';
import Home from 'js/views/components/atoms/home.js';
import Search from 'js/views/components/atoms/search.js';

class ControlBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="control-bar">
                <Home/>
                <Search/>
                <Edit/>
                <Bell/>
            </div>
        );
    }

}

export default ControlBar;