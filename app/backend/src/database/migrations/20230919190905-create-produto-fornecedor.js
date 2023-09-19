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
    await queryInterface.createTable('produtos_fornecedor', {
      id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'produtos',
          key: 'id',
        },
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_fornecedor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'fornecedores',
          key: 'id',
        },
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      valorVenda: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('produtos_fornecedor');
  },
};
