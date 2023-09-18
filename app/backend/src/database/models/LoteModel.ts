/* eslint-disable import/no-cycle */
import Sequelize, { DATE, INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Produto from './ProdutoModel';
import ProdutoLote from './ProdutoLote';
import Fornecedor from './FornecedorModel';

class Lote extends Model {
  public id!: number;
  public idFornecedor!: number;
  public notaFiscal!: string;
  public dataCompra!: Date;
  public dataEntrada!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getProdutos!: Sequelize.BelongsToManyGetAssociationsMixin<Produto>;
}

Lote.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idFornecedor: {
      type: INTEGER,
      allowNull: false,
    },
    notaFiscal: {
      type: STRING,
      allowNull: false,
    },
    dataCompra: {
      type: DATE,
      allowNull: true,
    },
    dataEntrada: {
      type: DATE,
      allowNull: true,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'lote',
    timestamps: true,
  },
);

Lote.belongsToMany(Produto, {
  through: ProdutoLote,
  foreignKey: 'idLote',
  otherKey: 'idProduto',
});

Lote.belongsTo(Fornecedor, { foreignKey: 'idFornecedor' });

export default Lote;
