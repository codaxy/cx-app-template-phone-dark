import {Section, PureContainer, Button, TextField, ValidationGroup} from "cx/widgets";
import {LabelsTopLayout} from "cx/ui";
import Controller from "./Controller";
import {Auth} from "../../api/Auth";

export default (
    <cx>
        <h2 putInto="header">Profile</h2>
        <PureContainer
            visible-expr="!{user}"
            controller={Controller}
        >
            <div style="height: 100%; display: flex; align-items: center; justify-content: center">
                <div>
                    <div style="text-align:center">
                        <img src="~/assets/img/cxjs.svg" alt="Logo" style="width: 100px; margin-bottom: 20px" />
                    </div>
                    <h3 style="margin: 0">Sign In</h3>
                    <p style="font-size: smaller; color: gray">Please sign in to access this page.</p>

                    <form style="margin-top: -15px" onSubmit="login">
                        <ValidationGroup valid-bind="login.valid" layout={{ type: LabelsTopLayout, vertical: true }}>
                            <TextField value-bind="login.username" label="Username" required autoFocus validationMode="help-block"/>
                            <TextField value-bind="login.password" label="Password" inputType="password" required validationMode="help-block"/>
                            <Button mod="primary" enabled-bind="login.valid" submit>
                                Sign In
                            </Button>
                        </ValidationGroup>
                    </form>

                </div>
            </div>
        </PureContainer>
        <PureContainer
            visible-expr="!!{user}"
        >
            <Section mod="card" style="height: 100%">
                <p>You're logged in as <strong text-bind="user.username"/>.</p>
                <Button
                    mod="primary"
                    text="Log Out"
                    onClick={() => {
                        Auth.signOut();
                    }}
                />
            </Section>
        </PureContainer>
    </cx>
);