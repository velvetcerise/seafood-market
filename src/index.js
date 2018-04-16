import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router'; //Where we are going to each time...

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker'
import NotFound from './components/NotFound'

const Root = () => { //Always put a <div></div> between BrowserRouter!
    return (
        <BrowserRouter>
            <div> 
                <Match exactly pattern="/" component={StorePicker} />
                <Match pattern="/store/:storeId" component={App} />
                <Miss component={NotFound}/>
            </div> 
        </BrowserRouter>
    )
}

render(<Root/>, document.querySelector('#main'));

