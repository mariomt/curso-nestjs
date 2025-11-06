import { Module } from '@nestjs/common';
import { UsuariosService } from './services/usuarios.service';
import { UsuarioController } from './controllers/usuario.controller';

@Module({
  providers: [UsuariosService],
  controllers: [UsuarioController],
  exports: [UsuariosService],
})
export class UsuariosModule {}
