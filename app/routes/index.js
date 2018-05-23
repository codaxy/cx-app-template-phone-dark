import {Route, Section, Sandbox} from "cx/widgets";
import {FirstVisibleChildLayout} from "cx/ui";

import AppLayout from "../layout";

import Default from "./default";
import Prices from "./prices";
import Calendar from "./calendar";

export default () => <cx>
    <Sandbox
        key-bind="url"
        storage-bind="pages"
        outerLayout={AppLayout}
        layout={FirstVisibleChildLayout}
    >
        <Route route="~/" url-bind="url">
            <Default />
        </Route>
        <Route route="~/prices" url-bind="url">
            <Prices />
        </Route>
        <Route route="~/calendar" url-bind="url">
            <Calendar />
        </Route>
        <Section title="Page Not Found" mod="card">
            This page doesn't exists. Please check your URL.
        </Section>
    </Sandbox>
</cx>;
