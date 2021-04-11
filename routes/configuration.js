//https://api.github.com/users/romariosc97/repos
var express = require('express');
var router = express.Router();

router.get('/api/configuration', async function (req, res) {
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

router.post('/api/configuration', async function (req, res) {
  const userCollection = db.collection('users');
  const githubUsername = req.body.github;
  const query = { email: req.session.user.email },
        options = {};
  const updated = await userCollection.updateOne(query, {$set: {github: githubUsername}}, options);
  console.log(updated.result);
  if(updated.result.ok){
    return res.status(200).json({success: true, data: []})
  }else{
    return res.status(200).json({success: false, data: []})
  }
});

router.post('/api/configuration/change-password', async function (req, res) {
  const userCollection = db.collection('users');
  const password = req.body.password;
  const newPassword = req.body.new_password;
  const query = { password: password },
        options = {};
  const updated = await userCollection.updateOne(query, {$set: {password: newPassword}}, options);
  console.log(updated.result);
  if(updated.result.nModified){
    return res.status(200).json({success: true, data: []})
  }else{
    return res.status(200).json({success: false, data: []})
  }
});

module.exports = router;