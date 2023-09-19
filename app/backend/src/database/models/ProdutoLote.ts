import { INTEGER, Model } from 'sequelize';
import db from '.';

class ProdutoLote extends Model {
  public idProduto!: number;
  public idLote!: number;
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
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    tableName: 'produtos_lote',
  },
);

export default ProdutoLote;
