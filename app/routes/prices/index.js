import {Rescope, Tab, FlexRow, Grid} from "cx/widgets";

import Controller from "./Controller";
import {computable} from "cx/data";

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
                columns={[{
                    field: 'pair',
                    header: 'Pair',
                    sortable: true,
                }, {
                    field: 'price',
                    header: 'Last Price',
                    sortable: true,
                    format: 'n;4',
                    align: 'right',
                    style: computable('$record.price', '$record.prevPrice',  (price, prevPrice) => price > prevPrice > 0 ? "color: #00AA00" : "color: #CC0000")
                }, {
                    field: 'change',
                    header: 'Change',
                    sortable: true,
                    format: 'ps;2',
                    align: 'right',
                    style: computable('$record.change', change => change > 0 ? "color: #00AA00" : change < 0 ? "color: #CC0000" : "color: yellow")
                }]}
            />
        </Rescope>
    </cx>
);
