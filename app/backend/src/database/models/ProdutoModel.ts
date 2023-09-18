/* eslint-disable import/no-cycle */
import Sequelize, { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Lote from './LoteModel';
import ProdutoLote from './ProdutoLote';
import Fornecedor from './FornecedorModel';
import ProdutoFornecedor from './ProdutoFornecedor';

class Produto extends Model {
  public id!: number;
  public nome!: string;
  public diasValidade!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getLotes!: Sequelize.BelongsToManyGetAssociationsMixin<Lote>;
}

Produto.init(
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
    diasValidade: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'produto',
    timestamps: true,
  },
);

Produto.belongsToMany(Lote, {
  through: ProdutoLote,
  foreignKey: 'idProduto',
  otherKey: 'idLote',
});

Produto.belongsToMany(Fornecedor, {
  through: ProdutoFornecedor,
  foreignKey: 'idProduto',
  otherKey: 'idFornecedor',
});

export default Produto;
