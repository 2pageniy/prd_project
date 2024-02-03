interface IRandomValue {
    number(): number;
}

class RandomValue implements IRandomValue {
    number() {
        return Math.round(Math.random() * 100);
    }
}

export default new RandomValue();
