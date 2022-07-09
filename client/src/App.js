import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import SignUpPage from "./pages/sign_up_page/sign_up_page.component";
import LoginPage from "./pages/login_page/login_page.component";
import ProfessionalPage from "./pages/professional_page/professional_page.component";
import SalonMainPage from "./pages/salon_main_page/salon_main_page.component";
import CleaningMainPage from "./pages/cleaning_main_page/cleaning_main_page.component";
import DecorMainPage from "./pages/decor_main_page/decor_main_page.component";
import GadgetMainPage from "./pages/gadget_main_page/gadget_main_page.component";
import CheckoutPage from "./pages/checkout_page/checkout_page.component";

import CommonCleaningProps from "./commonProps/commonCleaningProps";
import CommonSalonProps from "./commonProps/commonSalonProps";
import CommonDecorProps from "./commonProps/commonDecorProps";
import CommonGadgetProps from "./commonProps/commonGadgetProps";
import LandingPage from "./pages/landing_page/landing_page.component";

function App() {
  // const signedUser = useSelector((state) => state.auth.user);
  // const history = useHistory();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(googleUser());
  //   signedUser ? history.push("/landing") : history.push("/");
  // }, [App]);

  return (
    <div className="App">
      {/*  SWITCH--  the moment it finds a match it stops there and does not render any other route component. */}
      {/* EXACT-- it has two things ={true}, ={false} default is true and it should be EXACTLY matched. */}
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/landing">
            <Homepage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/professional">
            <ProfessionalPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>

          {/* <Route path="/salonmainpage/:salonType" render>
     
          <SalonMainPage typee={salonType} />
        </Route> */}

          {/* Salon Routes------------------------------------------------------------ */}

          <Route exact path="/salonmainpage">
            <SalonMainPage />
          </Route>

          <Route path="/salonmainpage/Massage">
            <SalonMainPage CommonSalonProps={CommonSalonProps[0]} />
          </Route>

          <Route path="/salonmainpage/Grooming">
            <SalonMainPage CommonSalonProps={CommonSalonProps[1]} />
          </Route>
          <Route path="/salonmainpage/Skin">
            <SalonMainPage CommonSalonProps={CommonSalonProps[2]} />
          </Route>
          <Route path="/salonmainpage/Salon">
            <SalonMainPage CommonSalonProps={CommonSalonProps[3]} />
          </Route>

          {/* Cleaning Routes------------------------------------------------------------ */}
          <Route path="/cleaningmainpage/Car">
            <CleaningMainPage CommonCleaningProps={CommonCleaningProps[0]} />
          </Route>
          <Route path="/cleaningmainpage/Termite">
            <CleaningMainPage CommonCleaningProps={CommonCleaningProps[1]} />
          </Route>
          <Route path="/cleaningmainpage/Furniture">
            <CleaningMainPage CommonCleaningProps={CommonCleaningProps[2]} />
          </Route>
          <Route path="/cleaningmainpage/Bathroom">
            <CleaningMainPage CommonCleaningProps={CommonCleaningProps[3]} />
          </Route>

          {/* Decoration Routes------------------------------------------------------------ */}
          <Route path="/decormainpage/birthday">
            <DecorMainPage CommonDecorProps={CommonDecorProps[0]} />
          </Route>
          <Route path="/decormainpage/wedding">
            <DecorMainPage CommonDecorProps={CommonDecorProps[1]} />
          </Route>
          <Route path="/decormainpage/gardening">
            <DecorMainPage CommonDecorProps={CommonDecorProps[2]} />
          </Route>
          <Route path="/decormainpage/wholehouse">
            <DecorMainPage CommonDecorProps={CommonDecorProps[3]} />
          </Route>

          {/* Decoration Routes------------------------------------------------------------ */}
          <Route path="/gadgetmainpage/led">
            <GadgetMainPage CommonGadgetProps={CommonGadgetProps[0]} />
          </Route>
          <Route path="/gadgetmainpage/ac">
            <GadgetMainPage CommonGadgetProps={CommonGadgetProps[1]} />
          </Route>
          <Route path="/gadgetmainpage/laptop">
            <GadgetMainPage CommonGadgetProps={CommonGadgetProps[2]} />
          </Route>
          <Route path="/gadgetmainpage/washingmachine">
            <GadgetMainPage CommonGadgetProps={CommonGadgetProps[3]} />
          </Route>

          {/* --------------------------------------------------------------------------------------- */}

          <Route path="/checkout">
            <CheckoutPage />
          </Route>

          {/* render={(props) => <CheckoutPage {...props} />} */}
        </Switch>
        {/* )} */}
      </Router>
    </div>
  );
}

export default App;
