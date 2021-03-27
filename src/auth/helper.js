exports.handleAuthRequired = (req, res, next) => {
    if ('user' in req.session){
        return res.status(200).json({success: true, data: req.session})
    }else{
        return res.status(200).json({success: false, data: []})
    }
}
