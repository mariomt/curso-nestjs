import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuariosService } from './usuarios/services/usuarios.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usuarioService: UsuariosService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/estudiante')
  getStudent() {
    return this.usuarioService.getUsers();
  }
}
