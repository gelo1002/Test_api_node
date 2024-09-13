import express from 'express';
import productController from '../controllers/product.controller.js';
import productSchema from '../schemas/product.schema.js';
import attributeValidator from '../middlewares/validator.middleware.js';
import doc from '../utils/swagger/doc.js';

const router = express.Router();

/**
 * @openapi
 * /products:
 *   get:
 *     summary: Lista todos los productos
 *     description: Obtiene una lista paginada de todos los productos. Puedes usar los parámetros `limit` y `page` para controlar la paginación.
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: El número máximo de productos a devolver en la respuesta.
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 0
 *         description: El número de la página que se desea obtener. La paginación comienza en 0.
 *     responses:
 *       200:
 *         description: Una lista de productos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 1
 *                 data:
 *                   type: object
 *                   properties:
 *                     count:
 *                       type: number
 *                       description: Total de elementos 
 *                       example: 1
 *                     rows:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             description: El ID del producto.
 *                             example: 1
 *                           identifier:
 *                             type: string
 *                             description: El nombre del producto
 *                             example: 'AA-10'
 *                           description:
 *                             type: string
 *                             description: El detalle del producto
 *                             example: 'Camiseta de cuadros roja'
 *                           price:
 *                             type: number
 *                             format: float
 *                             description: El precio del producto
 *                             example: 19.99
 *                           model:
 *                             type: string
 *                             description: El modelo del producto
 *                             example: 'Slim fit'
 *                           created_at:
 *                             type: date
 *                             description: Fecha de creación
 *                             example: '2024-09-13T06:23:38.187Z'
 *                           updated_at:
 *                             type: date
 *                             description: Fecha de creación
 *                             example: '2024-09-13T06:23:38.187Z'
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Elemento creado con éxito
 *       400:
 *         description: Solicitud inválida, datos faltantes o incorrectos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 0
 *                 data:
 *                   type: string
 *                   description: Detalle del error
 *                   example: El identificador, ya fue registrado
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Solicitud inválida, datos faltantes o incorrectos
 *       500:
 *         description: Error del servidor al procesar la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 0
 *                 data:
 *                   type: string
 *                   description: Detalle del error
 *                   example: detalle....
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Error del servidor al procesar la solicitud
 */
router.get('/', productController.list);
/**
 * @openapi
 * /products/{identifier}:
 *   get:
 *     summary: Lista todos los productos
 *     description: Obtiene el detalle de un producto
 *     parameters:
 *      - name: identifier
 *        in: path
 *        description: Clave unica del producto que se desea obtener
 *        required: true
 *        schema:
 *          type: string
 *          example: AA-10
 *     responses:
 *       200:
 *         description: Una lista de productos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 1
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: El ID del producto.
 *                       example: 1
 *                     identifier:
 *                       type: string
 *                       description: El nombre del producto
 *                       example: 'AA-10'
 *                     description:
 *                       type: string
 *                       description: El detalle del producto
 *                       example: 'Camiseta de cuadros roja'
 *                     price:
 *                       type: number
 *                       format: float
 *                       description: El precio del producto
 *                       example: 19.99
 *                     model:
 *                       type: string
 *                       description: El modelo del producto
 *                       example: 'Slim fit'
 *                     created_at:
 *                       type: date
 *                       description: Fecha de creación
 *                       example: '2024-09-13T06:23:38.187Z'
 *                     updated_at:
 *                       type: date
 *                       description: Fecha de creación
 *                       example: '2024-09-13T06:23:38.187Z'
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Elemento creado con éxito
 *       400:
 *         description: Solicitud inválida, datos faltantes o incorrectos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 0
 *                 data:
 *                   type: string
 *                   description: Detalle del error
 *                   example: El identificador, ya fue registrado
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Solicitud inválida, datos faltantes o incorrectos
 *       500:
 *         description: Error del servidor al procesar la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 0
 *                 data:
 *                   type: string
 *                   description: Detalle del error
 *                   example: detalle....
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Error del servidor al procesar la solicitud
 */
router.get('/:identifier', attributeValidator(productSchema.id, 'params'), productController.show);
/**
 * @openapi
 * /products:
 *   post:
 *     summary: Crea un nuevo producto
 *     description: Permite crear un nuevo producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               identifier:
 *                 type: string
 *                 description: El nombre del producto
 *                 example: 'AA-10'
 *               name:
 *                 type: string
 *                 description: El nombre del producto
 *                 example: 'Camisa'
 *               description:
 *                 type: string
 *                 description: El detalle del producto
 *                 example: 'Camiseta de cuadros roja'
 *               price:
 *                 type: number
 *                 format: float
 *                 description: El precio del producto
 *                 example: 19.99
 *               model:
 *                 type: string
 *                 description: El modelo del producto
 *                 example: 'Slim fit'
 *     responses:
 *       201:
 *         description: Elemento creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 1
 *                 data:
 *                   type: object
 *                   description: Datos que se guardaron
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: El ID del producto creado
 *                       example: 1
 *                     identifier:
 *                       type: string
 *                       description: El nombre del producto
 *                       example: 'AA-10'
 *                     description:
 *                       type: string
 *                       description: El detalle del producto
 *                       example: 'Camiseta de cuadros roja'
 *                     price:
 *                       type: number
 *                       format: float
 *                       description: El precio del producto
 *                       example: 19.99
 *                     model:
 *                       type: string
 *                       description: El modelo del producto
 *                       example: 'Slim fit'
 *                     created_at:
 *                       type: date
 *                       description: Fecha de creación
 *                       example: '2024-09-13T06:23:38.187Z'
 *                     updated_at:
 *                       type: date
 *                       description: Fecha de creación
 *                       example: '2024-09-13T06:23:38.187Z'
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Elemento creado con éxito
 *       400:
 *         description: Solicitud inválida, datos faltantes o incorrectos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 0
 *                 data:
 *                   type: string
 *                   description: Detalle del error
 *                   example: El identificador, ya fue registrado
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Solicitud inválida, datos faltantes o incorrectos
 */
router.post('/', attributeValidator(productSchema.create, 'body'), productController.create);
/**
 * @openapi
 * /products/{identifier}:
 *   put:
 *     summary: Actualizar un producto
 *     description: Permite actualizar un producto
 *     parameters:
 *      - name: identifier
 *        in: path
 *        description: Clave unica del producto que se desea actualizar
 *        required: true
 *        schema:
 *          type: string
 *          example: AA-10
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: El detalle del producto
 *                 example: 'Camiseta de cuadros roja'
 *               model:
 *                 type: string
 *                 description: El modelo del producto
 *                 example: 'Slim fit'
 *     responses:
 *       200:
 *         description: Elemento actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 1
 *                 data:
 *                   type: object
 *                   description: Datos que se guardaron
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: El ID del producto creado
 *                       example: 1
 *                     identifier:
 *                       type: string
 *                       description: El nombre del producto
 *                       example: 'AA-10'
 *                     description:
 *                       type: string
 *                       description: El detalle del producto
 *                       example: 'Camiseta de cuadros roja'
 *                     price:
 *                       type: number
 *                       format: float
 *                       description: El precio del producto
 *                       example: 19.99
 *                     model:
 *                       type: string
 *                       description: El modelo del producto
 *                       example: 'Slim fit'
 *                     created_at:
 *                       type: date
 *                       description: Fecha de creación
 *                       example: '2024-09-13T06:23:38.187Z'
 *                     updated_at:
 *                       type: date
 *                       description: Fecha de creación
 *                       example: '2024-09-13T06:23:38.187Z'
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Solicitud realizada correctamente
 *       400:
 *         description: Solicitud inválida, datos faltantes o incorrectos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 0
 *                 data:
 *                   type: string
 *                   description: Detalle del error
 *                   example: El identificador, ya fue registrado
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Solicitud inválida, datos faltantes o incorrectos
 *       500:
 *         description: Error del servidor al procesar la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 0
 *                 data:
 *                   type: string
 *                   description: Detalle del error
 *                   example: detalle....
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Error del servidor al procesar la solicitud
 */
router.put('/:identifier', attributeValidator(productSchema.id, 'params'),attributeValidator(productSchema.update, 'body'),productController.update);
/**
 * @openapi
 * /products/{identifier}:
 *   delete:
 *     summary: Elimina un producto
 *     description: Elimina de forma permanente un producto
 *     parameters:
 *      - name: identifier
 *        in: path
 *        description: Clave unica del producto que se desea eliminar
 *        required: true
 *        schema:
 *          type: string
 *          example: AA-10
 *     responses:
 *       200:
 *         description: Una lista de productos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 1
 *                 data:
 *                   type: object
 *                   example: null
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Producto eliminado correctamente
 *       400:
 *         description: Solicitud inválida, datos faltantes o incorrectos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 0
 *                 data:
 *                   type: string
 *                   description: Detalle del error
 *                   example: El identificador, ya fue registrado
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Solicitud inválida, datos faltantes o incorrectos
 *       500:
 *         description: Error del servidor al procesar la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: 0
 *                 data:
 *                   type: string
 *                   description: Detalle del error
 *                   example: detalle....
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta
 *                   example: Error del servidor al procesar la solicitud
 */
router.delete('/:identifier', attributeValidator(productSchema.id, 'params'),productController.remove);

export default router;