export class Data {
    id: number;
    name: string;
    timeStamp: Date;
    data: Array<IData>;
};

export interface IData {
    time: Date;
    value: string;
};

export interface IPrice {
    month: Date;
    price: number;
}
