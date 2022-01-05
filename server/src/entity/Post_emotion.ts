import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
  JoinColumn,
} from 'typeorm'
import { Emotions } from './Emotions'
import { Posts } from './Posts'

@Entity()
export class Post_emotion {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => Posts, post => post.post_emotion, { onDelete: 'CASCADE' })
  @JoinTable()
  post: Posts | number

  @ManyToOne(type => Emotions, emotion => emotion.post_emotion)
  @JoinTable()
  emotion: Emotions | number
}
