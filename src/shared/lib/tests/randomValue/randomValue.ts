interface IRandomValue {
    number(): number;
}

class RandomValue implements IRandomValue {
    number() {
        return Math.round(Math.random() * 100);
    }

    numberInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    string(value: string = '') {
        return `${value}-${Date.now()}`;
    }

    bool() {
        return !this.numberInterval(0, 1);
    }

    enum<T extends object>(anEnum: T): T[keyof T] {
        const enumValues = Object.keys(anEnum) as unknown as T[keyof T][];
        const randomIndex = Math.floor(Math.random() * enumValues.length);
        const randomEnumValue = enumValues[randomIndex];
        return randomEnumValue;
    }
}

export default new RandomValue();
