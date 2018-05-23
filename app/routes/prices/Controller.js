import { Controller } from "cx/ui";
import { subscribe } from "./market";
export default class extends Controller {
    onInit() {
        let data = {};

        this.unsubscribe = subscribe(changes => {
            changes.forEach(s => {
                data[s.pair] = s;
            });
            this.store.set('data', Object.keys(data).map(k => data[k]));
        });
    }

    onDestroy() {
        this.unsubscribe();
    }
}
