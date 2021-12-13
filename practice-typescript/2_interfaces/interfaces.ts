interface Rect {
    //Только для чтения (readonly)
    readonly id: string;
    //Необязательный параметр (?)
    color?: string;
    size: {
        width: number;
        height: number;
    };
}

const rect1: Rect = {
    id: '1111',
    size: {
        width: 20,
        height: 30,
    },
    color: '#ccc',
};

const rect2: Rect = {
    id: '2222',
    size: {
        width: 33,
        height: 44,
    },
};

rect2.color = 'black';
rect2.size.height = 2;
// rect2.id = '123'

const rect3 = {} as Rect;
const rect4 = <Rect>{};

//---------------------------------------------------------

interface RectWithArea extends Rect {
    getArea: () => number;
}

const rect5: RectWithArea = {
    id: '3333',
    size: {
        width: 20,
        height: 30,
    },

    getArea(): number {
        return this.size.height * this.size.width;
    },
};

//------------------------------------------------------------

interface IClock {
    time: Date;
    setTime(date: Date): void;
}

class Clock implements IClock {
    time: Date = new Date();

    setTime(date: Date): void {
        this.time = date;
    }
}

//-------------------------------------------------------------

interface Styles {
    [key: string]: string;
}

const css: Styles = {
    border: '1 px solid black',
    marginTop: '2px',
    borderRadius: '5px',
};
