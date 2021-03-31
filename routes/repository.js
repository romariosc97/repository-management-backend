//https://api.github.com/users/romariosc97/repos
var express = require('express');
var router = express.Router();

router.get('/api/repository/username', async function (req, res) {
    const userCollection = db.collection('users');
    const query = { email: req.session.user.email },
          options = {};
    const user = await userCollection.findOne(query, options);
    account = {github: user.github};
    if(Object.keys(account).length > 0){
      return res.status(200).json({success: true, data: account})
    }else{
      return res.status(200).json({success: false, data: []})
    }
});

module.exports = router;