export const logger = (/**@type {Request} */ req, _res, next) => {
    console.log(`${req.method}: ${req.url}`);
    next();
};
