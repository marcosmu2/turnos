
const errorReturn = (res, error) => {
    console.log(error);
    return res.status(500).json({
            ok: false,
            msg:'contacte con el administrador del sistemas'
        });
}

module.exports = {
    errorReturn
}