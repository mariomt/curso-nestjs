import { ROLES } from '../../constants/enums/roles.enum';
import { BaseEntity } from '../../config/BaseEntity';
import { Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('usuario')
export class UsuarioEntity extends BaseEntity {
  @Column({ length: 100 })
  nombre: string;
  @Column({ length: 100 })
  apellidos: string;
  @Column()
  edad: number;

  @Column({ length: 100 })
  correo: string;

  @Exclude()
  @Column({ length: 100 })
  contrasena: string;

  @Column({ type: 'enum', enum: ROLES })
  rol: ROLES;
}
