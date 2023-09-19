/* eslint-disable @typescript-eslint/naming-convention */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('lotes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_fornecedor: {
        type: Sequelize.INTEGER,
        references: {
          model: 'fornecedores',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nota_fiscal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_compra: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      data_entrada: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      valor_compra: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        defaultValue: 0,
      },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    });
  },

  async down(queryInterface, _Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable('lotes');
  },
};
