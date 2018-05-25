import {Route, PureContainer, Sandbox, RedirectRoute} from "cx/widgets";
import {FirstVisibleChildLayout} from "cx/ui";

import AppLayout from "../layout";

import About from "./about";
import Prices from "./prices";
import Calendar from "./calendar";
import Profile from "./profile";

/*
TODO:
 - Home -> About
 - Login -> Logout
 - Price click -> expand chart
 - Phone book + edit
 - Calendar
*/

export default () => <cx>
    <Sandbox
        key-bind="url"
        storage-bind="pages"
        outerLayout={AppLayout}
        layout={FirstVisibleChildLayout}
    >
        <RedirectRoute route="~/" url-bind="url" redirect="~/prices"/>
        <Route route="~/prices" url-bind="url">
            <Prices/>
        </Route>
        <Route route="~/about" url-bind="url">
            <About/>
        </Route>
        <Route route="~/profile" url-bind="url">
            <Profile/>
        </Route>
        <PureContainer visible-expr="!{user}">
            <Profile/>
        </PureContainer>
        <Route route="~/calendar" url-bind="url">
            <Calendar/>
        </Route>
        <div style="padding: 1rem">
            This page doesn't exist yet.
        </div>
    </Sandbox>
</cx>;
