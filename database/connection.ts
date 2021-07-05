import { Sequelize } from 'sequelize';

const db = new Sequelize('curso_node_ts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db