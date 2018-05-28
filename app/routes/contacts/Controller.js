import { Controller } from "cx/ui";

export default class extends Controller {
    onInit() {
        this.store.init('contacts', [
            {name: "Jefferey Phillis"},
            {name: "Tameka Mahar"},
            {name: "Amberly Fenderson"},
            {name: "Ilona Centeno"},
            {name: "Shane Beaton"},
            {name: "Carletta June"},
            {name: "Veronique Wojtowicz"},
            {name: "Kevin Calvillo"},
            {name: "Rebecca Mendes"},
            {name: "Angele Sellner"},
            {name: "Luciano Bultman"},
            {name: "Deandrea Marcelino"},
            {name: "Nathanial Lutes"},
            {name: "Adele Tschida"},
            {name: "Valerie Welk"},
            {name: "Lera Nagao"},
            {name: "Marilyn Braggs"},
            {name: "Ivan Redwood"},
            {name: "Kizzy Whorley"},
            {name: "Lucila Steadman"},
        ])
    }
}
