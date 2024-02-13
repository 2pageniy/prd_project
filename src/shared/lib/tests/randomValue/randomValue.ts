interface IRandomValue {
    number(): number;
}

class RandomValue implements IRandomValue {
    number() {
        return Math.round(Math.random() * 100);
    }

    string(value: string = '') {
        return `${value}-${Date.now()}`;
    }
}

export default new RandomValue();
