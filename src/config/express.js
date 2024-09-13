import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import  swaggerUi  from 'swagger-ui-express';
import  swaggerJsdoc  from 'swagger-jsdoc';

import config from './config.js';
import router from './routes.js';
import errors from '../middlewares/error.middleware.js';

function serverExpress() {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(`${config.version}/public`, express.static('public'));
    router(app);
    // Configuración de Swagger
    const swaggerOptions = {
        swaggerDefinition: {
            openapi: '3.0.0', // La versión de OpenAPI que estás usando
            info: {
                title: 'Api GAPSI',
                version: '1.0.0',
                description: 'Api de prueba',
            },
            servers: [
                {
                    url: `${process.env.API_URL}:${process.env.PORT}${process.env.API_VERSION}`,
                    description: 'Servidor de la Api',
                },
            ]
        },
        basePath: "/",
        apis: ['./src/routes/*.js'], // Ruta a tus archivos con comentarios de Swagger
    };
    
    const swaggerSpec = swaggerJsdoc(swaggerOptions);
    // Servir la documentación de Swagger
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    
    app.use(errors.logErrors);
    app.use(errors.ormErrorHandler)
    app.use(errors.errorHandler);

    return app;
}
export default serverExpress;