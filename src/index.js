import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  console.log(req.query.fullname);
  console.log(req.query.fullname.length);
  const fullname = req.query.fullname.split(' ');
  console.log(fullname.length);

  const result = `${fullname[fullname.length -1]} ${fullname[0].charAt(0)}.`;

  if (fullname.length === 3) {
    res.send(`${result} ${fullname[fullname.length-2].charAt(0)}.`);
  }
  if (fullname.length === 2) {
    res.send(result);
  }
  if (fullname.length === 1 && fullname[0].charAt(0 > 1)) {
    res.send(fullname[0]);
  }
  else {
    res.send(`Invalid fullname`);
  }
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
