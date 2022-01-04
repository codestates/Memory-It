import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column()
  post_id: number | undefined

  @Column()
  address: string | undefined
}
