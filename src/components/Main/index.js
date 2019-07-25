import React from 'react';

import {Switch, Route} from 'react-router-dom';
import App from '../../components/App';

import Landing from '../../components/App/landing'
import Sankey from '../../components/App/sankey';
import wordcloud from '../../components/App/wordcloud';
import about from '../../components/App/about';

const Main = props =>(
    <Switch>
        <Route exact path = "/" component={Landing} />
        <Route exact path = "/sankey" component={Sankey} />
        <Route exact path = "/wordcloud" component={wordcloud} />
        <Route exact path = "/about" component={about} />
    </Switch>
)

export default Main;