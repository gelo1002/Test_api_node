import config from './config.js';
import product from '../routes/product.route.js';
const version = config.version;

const routes = (app) => {
    app.use(`${version}/products`, product);
}
export default routes;