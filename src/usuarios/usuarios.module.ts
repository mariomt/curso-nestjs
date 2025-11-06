import { Module } from '@nestjs/common';
import { UsuariosService } from './services/usuarios.service';
import { UsuarioController } from './controllers/usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  providers: [UsuariosService],
  controllers: [UsuarioController],
  exports: [UsuariosService],
})
export class UsuariosModule {}
