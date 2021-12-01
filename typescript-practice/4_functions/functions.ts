function add(a: number, b: number): number {
    return a + b;
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase();
}

interface myPosition {
    x: number | undefined;
    y: number | undefined;
}

interface myPositionWithDefault extends myPosition {
    default: string;
}

function position(): myPosition;
// function position(a: number): myPositionWithDefault;
function position(a: number, b: number): myPosition;

function position(a?: number, b?: number) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }

    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }

    return { x: a, y: b };
}

console.log('Empty: ', position());
// console.log('One param: ', position(42));
console.log('Two param: ', position(10, 15));
