import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export enum ItemType {
    FOOD,
    WEAPON,
    ARMOR,
    ACCESSORY,
    KEY_ITEM,
}

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    type!: ItemType;
}
