import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from '../entities/usuario.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../DTOs/CreateUserDTO';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
    private readonly configService: ConfigService,
  ) {}

  async create(data: CreateUserDTO) {
    const user = this.usuarioRepository.create({
      ...data,
    });

    user.contrasena = await bcrypt.hash(
      data.contrasena,
      parseInt(this.configService.get('BCRYPT_SALT') || '10'),
    );

    return await this.usuarioRepository.save(user);
  }

  getUsers() {
    return this.usuarioRepository.find();
  }

  getUserById(id: number) {
    return this.usuarioRepository.findOneBy({ id });
  }

  getUserByEmail(email: string) {
    return this.usuarioRepository.findOneBy({ correo: email });
  }
}
