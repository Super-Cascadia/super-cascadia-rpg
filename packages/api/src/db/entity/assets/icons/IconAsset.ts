import { BasicAsset } from "../BasicAsset";
import { Column, Entity } from "typeorm";

@Entity()
export class IconAsset extends BasicAsset {
  @Column()
  width!: number;

  @Column()
  height!: number;

  @Column()
  assetPath!: string;
}
