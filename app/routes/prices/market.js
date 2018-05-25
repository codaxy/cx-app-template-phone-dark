import {SubscriberList} from 'cx/util';
import {oneOf} from "../../util/oneOf";

const pairData = {};

let baseCurrencies = ['BTC', 'USD', 'ETH'];
let subscribers = new SubscriberList();

function generate() {
    for (let i = 0; i < 100; i++) {
        let base = oneOf(baseCurrencies);
        let pair = randomStr(3, "ABCDEFGHIJKLMNOPQRSTUVWXYZ") + '/' + base;

        let s = {
            pair,
            basePrice: Math.random() * 1000,
            change: Math.random() * 10 - 5,
            volume: Math.random() * 100000,
            base: base
        };

        s.price = s.prevPrice = (1 + s.change / 100) * s.basePrice;
        pairData[pair] = s;
    }
}

generate();

let pairs = Object.keys(pairData);

function randomStr(length, characters) {
    let s = '';
    for (let i = 0; i<length; i++) {
        let index = Math.floor(Math.random() * characters.length);
        s += characters[index];
    }
    return s;
}

function tick() {
    let changes = [];
    for (let i = 0; i < 5; i++) {
        let key = oneOf(pairs);
        let data = {...pairData[key]};
        data.change += Math.random() * 0.2 - 0.1;
        data.prevPrice = data.price;
        data.price = (1 + data.change / 100) * data.basePrice;
        data.volume += Math.random() * 100;
        pairData[key] = data;
        changes.push(data);
    }
    subscribers.notify(changes);
}

setInterval(tick, 300);

export function subscribe(callback) {
    callback(getAll());
    return subscribers.subscribe(callback);
}

export function getAll() {
    return pairs.map(key => pairData[key]);
}