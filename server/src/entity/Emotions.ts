import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Emotions {
  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column()
  name: string | undefined
}
