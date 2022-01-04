import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import {Users} from './Users'
@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number 

  // @Column()
  // user_id: number 
  @ManyToOne(type => Users, user => user.posts)
  user: Users

  @Column()
  content: string 

  @Column()
  lat: string 

  @Column()
  lng: string

  @Column()
  marker: number
}
