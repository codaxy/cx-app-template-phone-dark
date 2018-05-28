import {FlexRow, FlexCol, Rescope, Button, Repeater, List} from "cx/widgets";
import Controller from "./Controller";
import {zeroTime} from "cx/util";
import {enableCultureSensitiveFormatting} from "cx/ui";
enableCultureSensitiveFormatting();

export default <cx>
    <Rescope bind="$page" controller={Controller}>
        <FlexRow putInto="header" align="center">
            <Button mod="hollow" icon="fa-arrow-left" style="margin-left: 15px" onClick="onSelectPrevDay"/>
            <div style="flex: 1 1 0"/>
            <h2 text-tpl="{month:datetime;DDDddMMMYYYY}"/>
            <div style="flex: 1 1 0"/>
            <Button mod="hollow" icon="fa-arrow-right" style="margin-right: 15px" onClick="onSelectNextDay"/>
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
            <List
                records-bind="list"
                cached
                filterParams-bind="month"
                onCreateFilter={date => {
                    let start = zeroTime(new Date(date)).valueOf();
                    let end = start + 24 * 60 * 60 * 1000;
                    return record => record.time >= start && record.time < end;
                }}
                itemClass="appointment"
            >
                <div ws>
                    <span text-tpl="{$record.time:datetime;HHmm}" style="font-size: smaller; margin-right: 10px; color: rgba(255, 255, 255, 0.5)"/>
                    <span text-tpl="{$record.text}"/>
                </div>
            </List>
        </FlexCol>
    </Rescope>
</cx>;

