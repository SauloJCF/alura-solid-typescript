import Cliente from '../entities/Cliente.js';
import IClienteRepository from './interfaces/IClienteRepository.js';

export default class PostgresRepository implements IClienteRepository {
  private db: Record<number, Cliente>;

  constructor() {
    this.db = {};
  }

  adicionaCliente(cliente: Cliente): void {
    this.db[cliente.id] = cliente;
  }

  listaClientes(): Cliente[] {
    const clientes: Cliente[] = [];

    for (const chave in this.db) {
      if (Object.prototype.hasOwnProperty.call(this.db, chave)) {
        clientes.push(this.db[chave]);
      }
    }

    return clientes;
  }
}
