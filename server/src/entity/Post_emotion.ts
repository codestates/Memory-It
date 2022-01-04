import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Post_emotion {
  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column()
  post_id: number | undefined

  @Column()
  emotion: number | undefined
}
