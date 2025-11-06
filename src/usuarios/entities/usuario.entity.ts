import { BaseEntity } from '../../config/BaseEntity';
import { Column, Entity } from 'typeorm';

@Entity('usuario')
export class UsuarioEntity extends BaseEntity {
  @Column({ length: 100 })
  nombre: string;
  @Column({ length: 100 })
  aplidos: string;
  @Column()
  edad: number;
}
