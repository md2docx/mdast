export type Optional<T> = { [K in keyof T]?: T[K] extends object ? Optional<T[K]> : T[K] };

export type Required<T> = { [K in keyof T]-?: T[K] extends object ? Required<T[K]> : T[K] };

export type Mutable<T> = { -readonly [K in keyof T]: T[K] extends object ? Mutable<T[K]> : T[K] };
