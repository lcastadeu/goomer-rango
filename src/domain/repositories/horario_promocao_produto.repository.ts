import { AbstractRepository } from "./abstract.repository";
import { HorarioPromocaoProduto } from '../entities/horario_promocao_produto.entity';
import database from "../../infraestructure/database/database.connection";

export class HorarioPromocaoProdutoRepository extends AbstractRepository<HorarioPromocaoProduto> {

  constructor() {
    super();
    this.tableName = 'horario_promocao_produto';
  }

  async drop(id_promocao_produto, id_horario) {
    const client = await database.connect();
    await client.query('BEGIN')
    return await client.query(`DELETE FROM ${this.tableName} WHERE id_promocao_produto  = $1 AND id_horario = $2`, [id_promocao_produto, id_horario]).then(x => {
      client.query('COMMIT')
      return (x.rowCount > 0);
    }).catch(error => {
      client.query('ROLLBACK');
      throw new Error(`Erro ao realizar operação de exclusão de dados. Desfazendo Tranzação! ${error}`)
    }).finally(() => {
      client.release();
    })
  }

  async find(id: number) : Promise<HorarioPromocaoProduto[]> {
    return await this.command.execSelectCommand(`SELECT
                                                  pp.id as id_promocao_produto,
                                                  pp.descricao,
                                                  pp.id_produto,
                                                  pp.preco,
                                                  hp.id_horario,
                                                  hp.ativo,
                                                  hf.hora_inicio,
                                                  hf.hora_termino,
                                                  hf.aceitar_feriado
                                                FROM
                                                  promocao_produto as pp
                                                  inner join horario_promocao_produto as hp on hp.id_promocao_produto = pp.id
                                                  inner join horario_funcionamento as hf on hf.id = hp.id_horario
                                                WHERE
                                                  pp.id = $1`, [id])
                            .then(async data => {
                              const horarios: HorarioPromocaoProduto[] = [];
                              await data.map(x => {
                                let horario = {
                                  id_promocao_produto: x.id_promocao_produto,
                                  promocaoProduto:{
                                    id: x.id_promocao_produto,
                                    id_produto: x.id_produto,
                                    descricao: x.descricao,
                                    preco: x.preco
                                  },
                                  id_horario: x.id_horario,
                                  horarioFuncionario: {
                                    id: x.id_horario,
                                    hora_inicio: x.hora_inicio,
                                    hora_termino: x.hora_termino,
                                    aceitar_feriado: x.aceitar_feriado
                                  },
                                  ativo: x.ativo
                                } as HorarioPromocaoProduto;

                                horarios.push(horario);
                              });
                              return await horarios;
                            }) as HorarioPromocaoProduto[];
  }
}