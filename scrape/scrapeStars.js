var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
var fs = require('fs');

const links = [
  'https://in-the-sky.org/data/constellation.php?id=2',
  'https://in-the-sky.org/data/constellation.php?id=3',
  'https://in-the-sky.org/data/constellation.php?id=4',
  'https://in-the-sky.org/data/constellation.php?id=5',
  'https://in-the-sky.org/data/constellation.php?id=6',
  'https://in-the-sky.org/data/constellation.php?id=7',
  'https://in-the-sky.org/data/constellation.php?id=8',
  'https://in-the-sky.org/data/constellation.php?id=9',
  'https://in-the-sky.org/data/constellation.php?id=10',
  'https://in-the-sky.org/data/constellation.php?id=11',
  'https://in-the-sky.org/data/constellation.php?id=12',
  'https://in-the-sky.org/data/constellation.php?id=13',
  'https://in-the-sky.org/data/constellation.php?id=14',
  'https://in-the-sky.org/data/constellation.php?id=15',
  'https://in-the-sky.org/data/constellation.php?id=16',
  'https://in-the-sky.org/data/constellation.php?id=17',
  'https://in-the-sky.org/data/constellation.php?id=18',
  'https://in-the-sky.org/data/constellation.php?id=19',
  'https://in-the-sky.org/data/constellation.php?id=20',
  'https://in-the-sky.org/data/constellation.php?id=21',
  'https://in-the-sky.org/data/constellation.php?id=22',
  'https://in-the-sky.org/data/constellation.php?id=23',
  'https://in-the-sky.org/data/constellation.php?id=24',
  'https://in-the-sky.org/data/constellation.php?id=25',
  'https://in-the-sky.org/data/constellation.php?id=26',
  'https://in-the-sky.org/data/constellation.php?id=27',
  'https://in-the-sky.org/data/constellation.php?id=28',
  'https://in-the-sky.org/data/constellation.php?id=29',
  'https://in-the-sky.org/data/constellation.php?id=30',
  'https://in-the-sky.org/data/constellation.php?id=31',
  'https://in-the-sky.org/data/constellation.php?id=32',
  'https://in-the-sky.org/data/constellation.php?id=33',
  'https://in-the-sky.org/data/constellation.php?id=34',
  'https://in-the-sky.org/data/constellation.php?id=35',
  'https://in-the-sky.org/data/constellation.php?id=36',
  'https://in-the-sky.org/data/constellation.php?id=37',
  'https://in-the-sky.org/data/constellation.php?id=38',
  'https://in-the-sky.org/data/constellation.php?id=39',
  'https://in-the-sky.org/data/constellation.php?id=40',
  'https://in-the-sky.org/data/constellation.php?id=41',
  'https://in-the-sky.org/data/constellation.php?id=42',
  'https://in-the-sky.org/data/constellation.php?id=43',
  'https://in-the-sky.org/data/constellation.php?id=44',
  'https://in-the-sky.org/data/constellation.php?id=45',
  'https://in-the-sky.org/data/constellation.php?id=46',
  'https://in-the-sky.org/data/constellation.php?id=47',
  'https://in-the-sky.org/data/constellation.php?id=48',
  'https://in-the-sky.org/data/constellation.php?id=49',
  'https://in-the-sky.org/data/constellation.php?id=50',
  'https://in-the-sky.org/data/constellation.php?id=51',
  'https://in-the-sky.org/data/constellation.php?id=52',
  'https://in-the-sky.org/data/constellation.php?id=53',
  'https://in-the-sky.org/data/constellation.php?id=54',
  'https://in-the-sky.org/data/constellation.php?id=55',
  'https://in-the-sky.org/data/constellation.php?id=56',
  'https://in-the-sky.org/data/constellation.php?id=57',
  'https://in-the-sky.org/data/constellation.php?id=58',
  'https://in-the-sky.org/data/constellation.php?id=59',
  'https://in-the-sky.org/data/constellation.php?id=60',
  'https://in-the-sky.org/data/constellation.php?id=61',
  'https://in-the-sky.org/data/constellation.php?id=62',
  'https://in-the-sky.org/data/constellation.php?id=63',
  'https://in-the-sky.org/data/constellation.php?id=64',
  'https://in-the-sky.org/data/constellation.php?id=65',
  'https://in-the-sky.org/data/constellation.php?id=66',
  'https://in-the-sky.org/data/constellation.php?id=67',
  'https://in-the-sky.org/data/constellation.php?id=68',
  'https://in-the-sky.org/data/constellation.php?id=69',
  'https://in-the-sky.org/data/constellation.php?id=70',
  'https://in-the-sky.org/data/constellation.php?id=71',
  'https://in-the-sky.org/data/constellation.php?id=72',
  'https://in-the-sky.org/data/constellation.php?id=73',
  'https://in-the-sky.org/data/constellation.php?id=74',
  'https://in-the-sky.org/data/constellation.php?id=75',
  'https://in-the-sky.org/data/constellation.php?id=76',
  'https://in-the-sky.org/data/constellation.php?id=77',
  'https://in-the-sky.org/data/constellation.php?id=78',
  'https://in-the-sky.org/data/constellation.php?id=79',
  'https://in-the-sky.org/data/constellation.php?id=80',
  'https://in-the-sky.org/data/constellation.php?id=81',
  'https://in-the-sky.org/data/constellation.php?id=82',
  'https://in-the-sky.org/data/constellation.php?id=83',
  'https://in-the-sky.org/data/constellation.php?id=84',
  'https://in-the-sky.org/data/constellation.php?id=85',
  'https://in-the-sky.org/data/constellation.php?id=86',
  'https://in-the-sky.org/data/constellation.php?id=87',
  'https://in-the-sky.org/data/constellation.php?id=88',
  'https://in-the-sky.org/data/constellation.php?id=89',
  'https://in-the-sky.org/data/constellation.php?id=90'
]

links.reduce((acc, link) => {
  return acc.then(results => {
    return nightmare.goto(link)
      .wait('.stripy')
      .evaluate(() => {
        let name = document.querySelector('.topTitleC').innerText;
        name = name.split(' Constellation ')[1];

        let data = { constName: name, stars: [] };

        let table = document.querySelector('.scrolltable');
        let rows = Array.from(table.querySelectorAll('tr'));
        let text = rows.map(row => [[...row.children][0].innerText, [...row.children][0].innerHTML.split('"')[1]]);

        text.forEach(star => {
          if (!data.stars.map(star => star.name).includes(star[0].split(' (')[0])) {
            data.stars.push({
              name: star[0].split(' (')[0],
              magnitude: star[0].split('mag ')[1],
              link: star[1]
            })
          }
        });

        return JSON.stringify(data);
      })
      .then(result => {
        console.log(result)
        results.push(result);
        return results;
      })
      .catch(function (error) {
        console.error('Search failed:', error);
      });
  });
}, Promise.resolve([]))
  .then(results => {
    console.log(results)
    fs.writeFileSync('data.json', JSON.stringify(results));
  })
  .catch(err => console.log(err));