import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column()
  user_id: number | undefined

  @Column()
  content: string | undefined

  @Column()
  lat: string | undefined

  @Column()
  lng: string

  @Column()
  marker: number
}
