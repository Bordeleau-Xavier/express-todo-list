
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('expenserdb', 'user', 'pass', {
  dialect: 'sqlite',
  host: '../database/expenserdb.db'
});

const Task = sequelize.define('Task', {
  description: DataTypes.STRING,
  dueDate: DataTypes.DATE,
  completed: DataTypes.BOOLEAN
});



export { Task, sequelize }
