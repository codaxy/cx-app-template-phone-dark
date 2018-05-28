import {PureContainer, Rescope, FlexRow, FlexCol, TextField, List, Button} from "cx/widgets";
import {getSearchQueryPredicate} from "cx/util";

import Controller from "./Controller";

export default (
    <cx>
        <Rescope bind="$page" controller={Controller}>
            <FlexRow putInto="header" align="center">
                <PureContainer visible-expr="!{searchMode}">
                    <h2>Contacts</h2>
                    <Button
                        mod="hollow"
                        icon="fa-search"
                        style="margin-left: auto; margin-right: 1rem"
                        onClick={(e, {store}) => {
                            store.set('searchMode', true);
                        }}
                    />
                </PureContainer>
                <PureContainer visible-expr="!!{searchMode}">
                    <Button
                        mod="hollow"
                        icon="fa-arrow-left"
                        style="margin: 1rem;"
                        onClick={(e, {store}) => {
                            store.set('searchMode', false);
                        }}
                    />
                    <TextField
                        placeholder="Search contacts"
                        style="margin: 1rem 1rem 1rem 0; width: auto; flex: 1 1 0"
                        value-bind="searchQuery"
                    />
                </PureContainer>
            </FlexRow>
            <List
                style="position: absolute; left: 0; top: 0; right: 0; bottom: 0"
                records-bind="contacts"
                sortField="name"
                sortDirection="ASC"
                filterParams-bind="searchQuery"
                onCreateFilter={query => {
                    let p = getSearchQueryPredicate(query);
                    return rec => p(rec.name);
                }}
                itemClass="contact"
                emptyText="No contacts found that match the search criteria"
            >
                <img src="https://placehold.it/64x64" />
                <div class="name" text-bind="$record.name" />
            </List>
        </Rescope>
    </cx>
);
