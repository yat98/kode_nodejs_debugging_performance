import http from 'http';
import starwarsName from 'starwars-name';
import 'dotenv/config';

const port = process.env.PORT;
const names = {};

const createName = (req) => {
  let result = starwarsName.random();
//   if(names[result]) {
//     result += names[result]++;
//   }
//   names[result] = 1;
//   return result;
  if(names[result]) {
    names[result] = names[result] + 1;
  }else{
    names[result] = 1;
  }
  return result + names[result];
};

http.createServer((req,res) => {
  res.end(`Your starwars name is: ${createName(req)} \n`);
}).listen(port);