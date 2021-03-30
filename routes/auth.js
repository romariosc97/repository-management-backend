var express = require('express');
var router = express.Router();
const auth = require("../src/auth");

router.post('/login', async (req, res, next) => {
  console.log(auth.session);
  const email = req.body.email;
  const password = req.body.password;
  let account = {};
  const userCollection = db.collection('users');
  const query = { email: email, password: password },
        options = {};
  const user = await userCollection.findOne(query, options);
  console.log(user, '1');
  account = user;
  if(Object.keys(account).length > 0){
    console.log(req.session, '2');
    req.session['user'] = {
      name: account.name,
      last_name: account.last_name,
      email: account.email,
    };
    console.log(req.session, '3');
    return res.status(200).json({success: true, data: account})
  }else{
    return res.status(200).json({success: false, data: []})
  }
});

router.get('/logout', function (req, res) {
  req.session.destroy();
  return res.status(200).json({success: true, data: []})
});

router.get('/session', function (req, res) {
  console.log(req.session, '4');
  if ('user' in req.session){
      return res.status(200).json({success: true, data: req.session})
  }else{
      return res.status(200).json({success: false, data: []})
  }
});


module.exports = router;
