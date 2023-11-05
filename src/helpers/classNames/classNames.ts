type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([_cls, value]) => Boolean(value))
            .map(([cls, _value]) => cls)
    ]
        .join(' ');
}