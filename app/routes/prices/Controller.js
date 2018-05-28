import { Controller } from "cx/ui";
import { subscribe } from "./market";
export default class extends Controller {
    onInit() {
        this.unsubscribe = subscribe(changes => {
            let data = {};
            let records = this.store.get('data');
            if (Array.isArray(records)) {
                records.forEach(r => {
                    data[r.pair] = r;
                });
            }
            // console.log(data);
            changes.forEach(s => {
                data[s.pair] = Object.assign({}, data[s.pair], s);
            });
            this.store.set('data', Object.keys(data).map(k => data[k]));
        });
    }

    onDestroy() {
        this.unsubscribe();
    }

    showChart(e, {store}) {
        store.toggle('$record.showChart');

        if (store.get('$record.showChart')) {
            let price = store.get('$record.price');
            let points = [];
            let time = Date.now();
            for (let i = 0; i < 100; i++) {
                points.push({price, time})
                price += (Math.random() - 0.5) * 0.01 * price;
                time -= 60 * 1000; //1m
            }
            store.set('$record.chart', points);
        }
    }
}
