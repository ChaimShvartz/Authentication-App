export const errorHandler = (err, _req, res, _next) => {
    const { status, message } = Object.assign(
        { status: 500, message: "Server Internal Error" },
        err,
    );
    res.status(status).json({ success: false, message });
};
