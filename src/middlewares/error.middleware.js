import responseGeneral from "../helpers/response.helper.js";
import  { ValidationError } from 'sequelize';

function logErrors (err, req, res, next) {
    console.error(err);
    next(err);
}

function ormErrorHandler(err, req, res, next) {
    if(err instanceof ValidationError){
      return responseGeneral(res, 0, 409, err.errors, err.name);
    }
	else {
		next(err);
	}
}

function errorHandler(err, req, res, next) {
    return responseGeneral(res, 0, 500);
}

export default { logErrors, ormErrorHandler, errorHandler }