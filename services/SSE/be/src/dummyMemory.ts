export type TableData = {
    oldValue: number;
    value: number;
    timeStamp: Date;
}

type DummyMemory = {
    [key: string]: TableData;
}

const dummyMemory: DummyMemory = {
    table1: {
        oldValue: 0,
        value: 0,
        timeStamp: new Date(),
    },
    table2: {
        oldValue: 0,
        value: 0,
        timeStamp: new Date(),
    },
    table3: {
        oldValue: 0,
        value: 0,
        timeStamp: new Date(),
    },
    table4: {
        oldValue: 0,
        value: 0,
        timeStamp: new Date(),
    }
}

export const set = (key: string, value: TableData) => {
    dummyMemory[key] = value;
}

export const get: TableData | null = (key: string) => dummyMemory[key] ?? null;