/* eslint-disable import/no-cycle */
import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Lote from './LoteModel';
import Produto from './ProdutoModel';
import ProdutoFornecedor from './ProdutoFornecedor';

class Fornecedor extends Model {
  public id!: number;
  public nome!: string;
  public cnpj!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Fornecedor.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: STRING,
      allowNull: false,
    },
    cnpj: {
      type: INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: true,
    tableName: 'fornecedores',
  },
);

Fornecedor.hasMany(Lote, { foreignKey: 'idFornecedor' });

Fornecedor.belongsToMany(Produto, {
  through: ProdutoFornecedor,
  foreignKey: 'idFornecedor',
  otherKey: 'idProduto',
});

export default Fornecedor;
