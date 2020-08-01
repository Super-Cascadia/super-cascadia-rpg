import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { ItemType } from './interfaces/items';

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
