import { DOUBLE, INTEGER, Model } from 'sequelize';
import db from '.';

class ProdutoLote extends Model {
  public idProduto!: number;
  public idLote!: number;
  public valorCompra!: number;
}

ProdutoLote.init(
  {
    idProduto: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    idLote: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    valorCompra: {
      type: DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'produtoLote',
    timestamps: false,
  },
);

export default ProdutoLote;
