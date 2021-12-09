import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Demohistory from './components/Demohistory';
import Demostate from './components/Demostate';
import Page404 from './components/Page404';
import Demostatemultiples from './components/Demostatemultiples';
import DemoUseEffect from './components/DemoUseEffect';
import DemoUseEffect2 from './components/DemouseEffect2';
import DemoUseEffect3 from './components/DemouseEffect3';
import DemouseRef from './components/DemouseRef';
import DemoHooksPerso from './components/DemoHooksPerso';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      {/* <header> */}
        <h2 style={ {textAlign:"center"}}>useEffect</h2>
          <Menu size="large" >
            <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/" exact={true}>Accueil Demo </Menu.Item> 
            <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/demohistory">history</Menu.Item>
            <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/demostate"> state</Menu.Item>
            <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/demostatemultiples"> stateMultiples</Menu.Item>
            <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/demoUseEffect"> useEffectOnglet</Menu.Item>
            <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/demoUseEffect2"> use effect2 </Menu.Item>
            <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/demoUseEffect3"> use effect3 </Menu.Item>
            <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/demoUseRef"> useRefFocus </Menu.Item>
            <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/perso"> Hooks personnalisé </Menu.Item>
          </Menu>
        {/* </header> */}
        <Switch>
          <Route path="/" component={Demohistory} exact={true} />
          <Route path="/demohistory" component={Demohistory} exact={true} />
          <Route path="/demostate" component={Demostate} />
          <Route path="/demostatemultiples" component={Demostatemultiples} />
          <Route path="/demoUseEffect" component={DemoUseEffect} />
          <Route path="/demoUseEffect2" component={DemoUseEffect2} />
          <Route path="/demoUseEffect3" component={DemoUseEffect3} />
          <Route path="/demoUseRef" component={DemouseRef} />
          <Route path="/perso" component={DemoHooksPerso} />
          <Route path="*" component={Page404} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

