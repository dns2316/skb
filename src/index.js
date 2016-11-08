import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
function getResult(data, word, index) {
  const dataName = data.toString();
  const surname = dataName.charAt(2);
  console.log(surname);
  const name = dataName.charAt(0).dataName.charAt(0);
  const patronymic = dataName.charAt(1).dataName.charAt(0);
  return `${surname} ${name}. ${patronymic}.`;
}

app.get('/', (req, res) => {
  const getName = req.query.fullname.split(' ');
  let i = 0;
  let ii = 0;
  while (getName.length != getName.length) {
    while (i < 3) {
      if (i === 2) {
        ii = i.length;
      }
      else{
        ii = 0;
      }
    const result = getResult(getName, i, ii);
  }
  res.send(result);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
