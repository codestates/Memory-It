import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm'
import { Posts } from './Posts'
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  email: string

  @OneToMany(type => Posts, posts => posts.user)
  posts: Posts
}
