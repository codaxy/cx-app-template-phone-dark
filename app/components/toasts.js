import {Toast} from "cx/widgets";

export function showErrorToast(msg) {
    Toast
        .create({
            message: String(msg),
            timeout: 5000,
            mod: 'error'
        })
        .open();
}

export function showInfoToast(msg) {
    Toast
        .create({
            message: String(msg),
            timeout: 5000,
            mod: 'primary'
        })
        .open();
}