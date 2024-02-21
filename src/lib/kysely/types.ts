import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Service = {
    id: string;
    title: string;
    description: string | null;
    price: number | null;
    unit: string | null;
    location: string | null;
    category: string | null;
    createdAt: Generated<Timestamp | null>;
    updatedAt: Timestamp | null;
    userId: string | null;
    reviews: Generated<number | null>;
};
export type DB = {
    services: Service;
};
