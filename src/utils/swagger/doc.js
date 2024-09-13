const doc = `/**
 * @openapi
 * /products:
 *   get:
 *     summary: Lista todos los productos
 *     description: Obtiene una lista paginada de todos los productos. Puedes usar los parámetros 'limit' y 'page' para controlar la paginación.
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
 */`;

export default doc;