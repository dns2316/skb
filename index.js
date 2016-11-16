import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import pug from 'pug';
import Promise from 'bluebird';
import saveDataInDb from './src/saveDataInDb';
import canonize from './src/canonize';

// const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://publickdb.mgbeta.ru/dns2316');

const app = express();
const path = require('path');
const bug = function (variable) {
  return console.log('\nTipster told: ' + variable);
};
const logger = require('morgan');

app.use(cors());
app.use(express.static(path.join(__dirname + '.../views')));
app.use(morgan('dev'));

const data = {
  user: {
    name: 'dns2316',
  },
  pets: [
    {
      name: 'Starhorse',
      type: 'pokemon',
    },
    {
      name: 'Pika4y',
      type: 'pokemon',
    },
  ],
};
// saveDataInDb(data);

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
  const url = req.url;
  console.log('url in index.js: ', url);
  res.send (canonize(url));
  console.log('res.send (canonize(url));');
});

app.listen(80, () => {
  console.log('App working on port 80!');
});
