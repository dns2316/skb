import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  const fullname = req.query.fullname.split(' ');
  console.log(fullname.length);
  const result = `${fullname[fullname.length -1]} ${fullname[fullname.length-3].charAt(0)}. ${fullname[fullname.length-2].charAt(0)}.`;
  res.send(result);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
