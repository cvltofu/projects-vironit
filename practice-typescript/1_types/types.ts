const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 42.2;
const num: number = 3e10;

const message: string = 'ya';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['ya', 'yo'];

//Tuple
const contact: [string, number] = ['A', 123];

//Any
let variable: any = 42;
variable = 'str';

//-------------------------------------------------------------
//Functions
function saySomething(something: string): void {
    console.log(something);
}

saySomething('something');

//Never
function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true) {}
}

//Type
type Login = string;

const login: Login = 'admin';

type ID = string | number;
const id1: ID = 12;
const id2: ID = '12';

type someType = string | null | undefined;
