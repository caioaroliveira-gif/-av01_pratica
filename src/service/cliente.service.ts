import { Cliente } from './../types/cliente.js';
import type CriarCliente = require('./../types/cliente.js');


class ClienteService {
  async getAll(): Promise<Cliente> {
    const res = await pool.query<Cliente>("SELECT * FROM cliente")
    return res.rows
  }

  async create(dados:CriarCliente): Promise<CCliente> {
    const res = await pool.query<Cliente>("INSERT INTO cliente (nome, telefone, dt_nascimento, email) VALUES ($1, $2, $3, $4) RETURNING*", [dados.nome, dados.telefone, dados.dt_nascimento, dados.email])
    return res.rows
  }
}
export clienteService = ClienteService 