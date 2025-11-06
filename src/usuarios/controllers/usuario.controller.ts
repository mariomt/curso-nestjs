import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common';
import { UsuariosService } from '../services/usuarios.service';
import type { UpdateUserDTO } from '../DTOs/UpdateUserDTO';
import type { UpdateEmailUserDTO } from '../DTOs/UpdateEmailUserDTO';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  getUsers() {
    return this.usuariosService.getUsers();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body()
    data: UpdateUserDTO,
  ) {
    return this.usuariosService.updateUser(id, data);
  }

  @Patch(':id/email')
  updateEmail(
    @Param('id') id: number,
    @Body()
    data: UpdateEmailUserDTO,
  ) {
    return data;
    // TODO: Colocar nuestra lógica que se conecta al servicio y actualiza los datos
  }
}
