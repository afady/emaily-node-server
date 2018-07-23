module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        return res.status(403).send({
            error: 'You must have at least one credit to send a survey.'
        });
    }

    next();
};