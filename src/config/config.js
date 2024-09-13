import dotenv from 'dotenv';
dotenv.config();
process.env.TZ = 'America/Mexico_City';

const config = {
    env: process.env.APP_ENV || 'dev',
    port: process.env.PORT || 3000,
    api_url: process.env.API_URL,
    tz: process.env.TZ,
    version: process.env.API_VERSION,
    dbConnection: process.env.DB_CONNECTION || 'mysql',
    dbHost: process.env.DB_HOST || '127.0.0.1',
    dbPort: process.env.DB_PORT || 3306,
    dbDatabase: process.env.DB_DATABASE || 'test',
    dbUsername: process.env.DB_USERNAME || 'root',
    dbPassword: process.env.DB_PASSWORD || 'root',
}
export default config