/* eslint-disable no-mixed-spaces-and-tabs */
import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
import { Orphanage } from './Orphanage'

@Entity('images')
class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  path: string

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id'})
  orphanage: Orphanage

}

export { Image }
