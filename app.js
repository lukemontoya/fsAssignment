var fs = require('fs');

//Challenge1
fs.readFile("challenge1/info.txt", "utf8", (err, data) => {
  if (err){
    throw err;
  }
  console.log(data);
});

//Challenge2
let names = fs.readFileSync('challenge2/info.txt', 'utf-8')
names = names + 'Me\nMyself\nAnd I\n'
fs.writeFileSync('challenge2/info.txt', names);

//Challenge3
fs.renameSync('challenge3/binfo.txt', 'challenge3/info.txt');

//Challenge4
fs.mkdirSync('./challenge4/copyfolder');
fs.copyFileSync("./challenge4/info.txt", "./challenge4/copyfolder/info.txt")

// Challenge5
let spaceRemoval = fs.readFileSync('challenge5/info.txt', 'utf-8')
spaceRemoval= spaceRemoval.replace(/-/g, ' ');
fs.writeFileSync('challenge5/info.txt', spaceRemoval)

// Challenge6
const files = fs.readdirSync('./challenge6/');
console.log(files.filter(file => file.includes('.txt')));
