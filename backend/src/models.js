
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const Task = sequelize.define('Task', {
  description: DataTypes.STRING,
  dueDate: DataTypes.DATE,
  completed: DataTypes.BOOLEAN
});