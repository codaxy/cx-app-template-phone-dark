export function oneOf(list) {
    let index = Math.floor(Math.random() * list.length);
    return list[index];
}