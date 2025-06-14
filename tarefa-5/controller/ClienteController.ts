import Cliente from '../entities/Cliente.js';
import IClienteRepository from '../repositories/interfaces/IClienteRepository.js';

export default class ClienteController {
  constructor(private repository: IClienteRepository) {}

  adicionaCliente(cliente: Cliente) {
    this.repository.adicionaCliente(cliente);
  }
  listaClientes() {
    return this.repository.listaClientes();
  }
}
