import { DOUBLE, INTEGER, Model } from 'sequelize';
import db from '.';

class ProdutoFornecedor extends Model {
  public idProduto!: number;
  public idFornecedor!: number;
  public valorVenda!: number;
}

ProdutoFornecedor.init(
  {
    idProduto: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    idFornecedor: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    valorVenda: {
      type: DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'produtoFornecedor',
    timestamps: false,
  },
);

export default ProdutoFornecedor;
