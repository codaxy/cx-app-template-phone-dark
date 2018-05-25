import {FlexRow, FlexCol, Rescope, Button, Repeater, List} from "cx/widgets";
import {enableCultureSensitiveFormatting} from "cx/ui";

enableCultureSensitiveFormatting();

import Controller from "./Controller";

export default <cx>
    <Rescope bind="$page" controller={Controller}>
        <FlexRow putInto="header" align="center">
            <Button mod="hollow" icon="fa-arrow-left" style="margin-left: 15px"/>
            <div style="flex: 1 1 0"/>
            <h2 text-tpl="{month:datetime;DDDddMMMYYYY}"/>
            <div style="flex: 1 1 0"/>
            <Button mod="hollow" icon="fa-arrow-right" style="margin-right: 15px"/>
        </FlexRow>
        <FlexCol style="height: 100%">
            <table className="calendarview">
                <thead>
                <tr>
                    <th>MON</th>
                    <th>TUE</th>
                    <th>WED</th>
                    <th>THU</th>
                    <th>FRI</th>
                    <th>SAT</th>
                    <th>SUN</th>
                </tr>
                </thead>
                <tbody>
                <Repeater records:bind="weeks" cached>
                    <tr>
                        <Repeater records:bind="$record.days">
                            <td
                                onClick="onSelectDay"
                                className={{
                                    selected: {expr: '{$record.date}=={month}'}
                                }}
                            >
                                <div
                                    visible:expr="{$record.active}"
                                >
                                    <div className="date" text:bind="$record.day"/>
                                </div>
                            </td>
                        </Repeater>
                    </tr>
                </Repeater>
                </tbody>
            </table>
            <List records-bind="list" cached>
                <div ws>
                    <span text-tpl="{$record.time:time}" style="font-size: smaller; margin-right: 10px"/>
                    <span text-tpl="{$record.text}"/>
                </div>
            </List>
        </FlexCol>
    </Rescope>
</cx>;

