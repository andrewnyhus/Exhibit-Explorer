import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {ExhibitDetailWrapper} from "./components/exhibit/exhibit-detail/exhibit-detail";
import {PrintFriendlyExhibitSignWrapper} from "./components/exhibit/exhibit-detail/print-friendly-exhibit-sign";
import {ExhibitList} from "./components/exhibit/exhibit-list/exhibit-list";
// import {ExhibitScan} from "./components/exhibit/exhibit-scan/exhibit-scan";
import {ExhibitExplorerNav} from "./components/navbar/navbar";
import {AboutMuseum} from "./AboutMuseum";

function Homepage() {
    return (
        <div>
            <AboutMuseum/>
        </div>
    );
}

function App() {
  return (
    <div className="App">
        <Router>
            <ExhibitExplorerNav/>
            <Switch>
                <Route path={"/exhibit/list"} component={ExhibitList}/>
                <Route path={"/exhibit/detail/:exhibitKey"} component={ExhibitDetailWrapper}/>
                <Route path={"/exhibit/print-exhibit-sign/:exhibitKey"} component={PrintFriendlyExhibitSignWrapper}/>
                <Route path={"/"} component={Homepage}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
