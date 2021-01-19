import "./App.css";
import Sidebar from "./components/Sidebar.component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Overview from "./pages/Overview.pages";
import SignupFormComp from "./pages/Signup.pages";
import SigninFormComp from "./pages/Signin.pages";
import ForgetPasswordFormComp from "./pages/Forget.pages";
import FormSecondary from "./components/FormSecondary.component"
import { useState, useEffect } from "react";
import Explore from "./pages/Explore.pages";
import DashBoard from "./App";
import CrushSelection from "./components/CrushSelection/CrushSelection.component";

import {
  Reports,
  ReportsOne,
  ReportsTwo,
  ReportsThree,
} from "./pages/Reports.pages";
import Team from "./pages/Team.pages";
import SecuredRoute from "./components/SecuredRoute.component.jsx";
function App() {
  const history = useHistory();
  const [user, setUser] = useState({});
  useEffect(() => {
    // if (!user.id && history.location.pathname !== "/SignIn" && history.location.pathname !== "/Forgot") {
    //   history.push("/Signup");
    //   console.log(history)
    // }
    
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const MenuBar = () => {
    if(user.id) {
      console.log("hello")
      return <Sidebar setUser={setUser} />
   }
   else{
     return <div></div>
   }
  }
  return (
    <div>
      <MenuBar/>
      <Switch>
        <Route path="/explore" component={Explore} />
        <Route exact path="/Signup" render={() => <SignupFormComp setUser={setUser} history={history}/>} />
        <Route path="/SignIn" component={SigninFormComp} />
        <Route path="/Forgot" component={ForgetPasswordFormComp} />
        <Route path="/getInfo" render={() => <FormSecondary user={user} history={history}/>}/>
        {/* <Route path="/DashBoard" component={DashBoard}/> */}
        <Route path="/DashBoard" component={DashBoard}></Route>
        <Route path="/" render={() => <CrushSelection user={user} />}></Route>
        <Route path="/overview" exact component={Overview} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
        <Route path="/team" exact component={Team} />
      </Switch>
    </div>
  );
}

export default App;