export default function calculator(add, sub) {
    return function (a, b){
        return {
            add : add(a, b),
            sub : sub(a, b)
        }
    }
}