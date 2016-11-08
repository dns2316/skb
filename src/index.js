import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
function getResult(data) {
  const dataName = data.toString();
  const surname = dataName.charAt(2);
  const name = dataName.charAt(0).dataName.charAt(0);
  const patronymic = dataName.charAt(1).dataName.charAt(0);
  return `${surname} ${name}. ${patronymic}.`;
}

app.get('/', (req, res) => {
  const getName = req.query.fullname.split(' ');
  const result = getResult(getName);
  res.send(result.toString());
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
