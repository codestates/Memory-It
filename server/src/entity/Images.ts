import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Posts } from './Posts'
@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => Posts, post => post.image, { onDelete: 'CASCADE' })
  @JoinColumn()
  post: Posts | number

  @Column()
  address: string
}
