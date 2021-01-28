import React from 'react';
import "gentwo-app/src/style/control-bar.css";
import Bell from '../atoms/bell.js';
import Edit from '../atoms/edit.js';
import Home from '../atoms/home.js';
import Search from '../atoms/search.js';


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