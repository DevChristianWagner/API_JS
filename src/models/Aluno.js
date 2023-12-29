import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: ' ',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: ' ',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: ' ',
        unique: {
          msg: 'E-mail já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: ' ',
        validate: {
          isInt: {
            msg: 'Nome precisa ser um número inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: ' ',
        validate: {
          isFloat: {
            args: [3, 255],
            msg: 'Peso precisa ser um número inteiro ou de número flutuante.',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: ' ',
        validate: {
          isFloat: {
            args: [3, 255],
            msg: 'Altura precisa ser um número inteiro ou de número flutuante.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Picture, { foreignKey: 'aluno_id' });
  }
}
