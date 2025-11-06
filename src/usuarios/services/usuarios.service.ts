import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
  users = [
    { id: 1, nombre: 'mario1', apellidos: 'Murillo1' },
    { id: 2, nombre: 'mario2', apellidos: 'Murillo2' },
    { id: 3, nombre: 'mario3', apellidos: 'Murillo3' },
    { id: 4, nombre: 'mario4', apellidos: 'Murillo4' },
  ];

  getUsers() {
    return this.users;
  }

  updateUser(id: number, data: { nombre: string; apellidos: string }) {
    const idx = this.users.findIndex((el) => el.id == id);

    if (idx >= 0) {
      this.users[idx].nombre = data.nombre;
      this.users[idx].apellidos = data.apellidos;
      return this.users[idx];
    }
    return null;
  }
}
