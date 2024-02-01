require('dotenv').config();
const sql = require('mssql');

const config = {
    server: process.env.AZURE_SQL_SERVER,
    database: process.env.AZURE_SQL_DATABASE,
    authentication: {
        type: 'azure-active-directory-password',
        options: {
            clientId: process.env.AZURE_AD_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.AZURE_AD_TENANT_ID
        }
    },
    options: {
        encrypt: true,
        trustServerCertificate: false
    }
};

async function connectAndQuery() {
    try {
        await sql.connect(config);
        const result = await sql.query`SELECT * FROM [dbo].[0CG_T0010_Usuari]`;
        console.log(result);
    } catch (err) {
        console.error("Error en la conexión o al ejecutar la consulta:", err);
    }
}

connectAndQuery();
