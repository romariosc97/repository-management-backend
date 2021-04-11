var express = require('express');
var router = express.Router();

router.post('/login', async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let account = {};
  const userCollection = db.collection('users');
  const query = { email: email, password: password },
        options = {};
  const user = await userCollection.findOne(query, options);
  account = user;
  if(/*Object.keys(account).length > 0*/account){
    req.session['user'] = {
      name: account.name,
      last_name: account.last_name,
      email: account.email
    };
    return res.status(200).json({success: true, data: account})
  }else{
    return res.status(200).json({success: false, data: []})
  }
});

router.get('/logout', function (req, res) {
  req.session.destroy();
  return res.status(200).json({success: true, data: []})
});

router.get('/session', async function (req, res) {
  if ('user' in req.session){
    const userCollection = db.collection('users');
    const query = { email: req.session.user.email },
          options = {};
    const user = await userCollection.findOne(query, options);
    account = user;
    if(account){
      return res.status(200).json({success: true, data: account})
    }else{
      return res.status(200).json({success: false, data: []})
    }
  }else{
      return res.status(200).json({success: false, data: []})
  }
});


module.exports = router;
