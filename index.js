import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import pug from 'pug';

const app = express();
const path = require('path');
const bug = function (variable) {
  return '\nTipster told: '.console.log(variable);
};
let responceToHtml = 'hello world!';
const logger = require('morgan');

app.use(cors());
app.use(express.static(path.join(__dirname + '.../view')));
app.set('view engine', 'jade');
app.use(morgan('dev'));
// const re = new RegExp('(fullname=)?(\s)(a-zA-Z)?'); - this code != 1

// ******* code from https://github.com/iCoderXXI/skill-branch/commit/ff1cac53939622f9114d4d5d3d50953f0976c486
const f2u = function(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

app.get('/2b', (req, res) => {
  let getFullname = req.query.fullname || '';
  getFullname = getFullname.replace(/^\s*/,'').replace(/\s*$/,'').replace(/\s{2,}/g,' ');
  console.log('['+getFullname+']');
  const re = /^[^0-9_\/]+$/;
  if (getFullname && re.test(getFullname)) {
    const nameResult = getFullname.split(' ');
    if (nameResult.length == 1) {
      return res.send(f2u(nameResult[0]));
    } else if (nameResult.length == 2) {
      return res.send(`${f2u(nameResult[1])} ${f2u(nameResult[0][0])}.`);
    } if (nameResult.length == 3) {
      return res.send(`${f2u(nameResult[2])} ${f2u(nameResult[0][0])}. ${f2u(nameResult[1][0])}.`);
    }
  }
  return res.send('Invalid fullname');
});
// ******* end code from https://github.com/iCoderXXI/skill-branch/commit/ff1cac53939622f9114d4d5d3d50953f0976c486

app.get('/2c', (req, res) => {
  const re2c = new RegExp('[^\/]*\/');
  const url = req.originalUrl;
  console.log(url);
  // res.send('We got your request!');
  // res.sendFile(path.join(__dirname + '/view/responce.html'));
  res.render('responce.jade');
});
app.listen(80, () => {
  console.log('App working on port 80!');
});
