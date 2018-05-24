import {Rescope, Tab, FlexRow, Grid, Button} from "cx/widgets";

import Controller from "./Controller";
import {computable} from "cx/data";
import {Svg} from "cx/svg";
import {Chart, Gridlines, LineGraph, NumericAxis, TimeAxis} from "cx/charts";
import {Price} from "../../components/Price";

export default (
    <cx>
        <Rescope bind="$page" controller={Controller}>
            <div putInto="header">
                <h2>Prices</h2>
                <FlexRow>
                    <Tab value-bind="tab" tab="BTC" mod="line" default style="flex: 1">BTC</Tab>
                    <Tab value-bind="tab" tab="USD" mod="line" style="flex: 1">USD</Tab>
                    <Tab value-bind="tab" tab="ETH" mod="line" style="flex: 1">ETH</Tab>
                </FlexRow>
            </div>
            <Grid
                style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba(255, 255, 255, 0.2)"
                scrollable
                records-bind="data"
                filterParams-bind="tab"
                onCreateFilter={tab => record => record.base == tab}
                keyField="pair"
                row={{
                    line1: {
                        columns: [{
                            field: 'pair',
                            header: 'Pair',
                            sortable: true,
                        }, {
                            field: 'price',
                            header: 'Last Price',
                            sortable: true,
                            align: 'right',
                            items: <cx>
                                <Price value-bind="$record.price" format="n;4" />
                            </cx>
                        }, {
                            field: 'change',
                            header: 'Change',
                            sortable: true,
                            format: 'ps;2',
                            align: 'right',
                            style: {
                                fontSize: '10px',
                                color: computable('$record.change', change => change > 0 ? "#88EE88" : change < 0 ? "#FF8888" : "yellow")
                            }
                        }, {
                            pad: false,
                            style: "padding: 4px; width: 10px",
                            align: 'center',
                            children: <cx>
                                <Button
                                    mod="hollow"
                                    icon="fa-chart-line"
                                    onClick="showChart"
                                />
                            </cx>
                        }]
                    },
                    line2: {
                        visible: { expr: '!!{$record.showChart}' },
                        columns: [{
                            style: 'border-top: none',
                            colSpan: 10,
                            items: <cx>
                                <Svg style="width:100%; height:200px;">
                                    <Chart
                                        offset="5 -35 -40 10"
                                        axes={{
                                            x: { type: TimeAxis, format: 'time' },
                                            y: { type: NumericAxis, vertical: true, secondary: true, format: 'n;0;2' }
                                        }}
                                    >
                                        <Gridlines/>
                                        <LineGraph
                                            lineStyle="stroke: orange"
                                            name="Price"
                                            data:bind="$record.chart"
                                            xField="time"
                                            yField="price"
                                        />
                                    </Chart>
                                </Svg>
                            </cx>
                        }]
                    }
                }}
            />
        </Rescope>
    </cx>
);
