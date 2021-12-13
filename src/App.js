
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Accueil from './Composants/Accueil';
import Page404 from './Composants/Page404';
import PartieI from './Composants/PartieI';
import PartieII from './Composants/PartieII';
import PartieIII from './Composants/PartieIII';


function App() {
  return (
    
    <Fragment>
      <BrowserRouter>
        <h1 style={{textAlign:"center"}}> PRATIK </h1>
        <Menu size="large">
          <Menu.Item as={NavLink} activeStyle={{ color: "brown",  fontWeight: "bold" }} to="/" exact   > Accueil </Menu.Item>
          <Menu.Item as={NavLink} activeStyle={{ color: "green", fontWeight: "bold" }} to="/partieI"  > PartieI: Liste </Menu.Item>
          <Menu.Item as={NavLink} activeStyle={{ color: "green", fontWeight: "bold" }} to="/partieII" > PartieII: Couleur </Menu.Item>
          <Menu.Item as={NavLink} activeStyle={{ color: "green", fontWeight: "bold" }} to="/partieIII"> PartieII: Tableau </Menu.Item>
        </Menu>
        <Switch>
          <Route  path="/" component={Accueil} exact  />
          <Route  path="/partieI" component={PartieI} />
          <Route  path="/partieII" component={PartieII} />
          <Route  path="/partieIII" component={PartieIII} />
          <Route  path="*" component={Page404}   />
        </Switch>
      </BrowserRouter>
    </Fragment>

  );
}

export default App;
