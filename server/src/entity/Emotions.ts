import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Post_emotion } from './Post_emotion'

@Entity()
export class Emotions {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(type => Post_emotion, post_emotion => post_emotion.emotion)
  post_emotion: Post_emotion[]
}
