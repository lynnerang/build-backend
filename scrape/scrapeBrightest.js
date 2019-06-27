var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
var fs = require('fs');

const links = [
  'https://in-the-sky.org/data/object.php?id=TYC1735-3180-1',
  'https://in-the-sky.org/data/object.php?id=TYC7184-2065-1',
  'https://in-the-sky.org/data/object.php?id=TYC9436-2393-1',
  'https://in-the-sky.org/data/object.php?id=TYC5216-1725-1',
  'https://in-the-sky.org/data/object.php?id=TYC1058-3399-1',
  'https://in-the-sky.org/data/object.php?id=TYC8350-2600-1',
  'https://in-the-sky.org/data/object.php?id=TYC1758-2416-1',
  'https://in-the-sky.org/data/object.php?id=HIP24608',
  'https://in-the-sky.org/data/object.php?id=TYC1472-1436-1',
  'https://in-the-sky.org/data/object.php?id=TYC7589-1693-1',
  'https://in-the-sky.org/data/object.php?id=TYC4079-2478-1',
  'https://in-the-sky.org/data/object.php?id=TYC794-1622-1',
  'https://in-the-sky.org/data/object.php?id=TYC3021-2645-1',
  'https://in-the-sky.org/data/object.php?id=HIP32349',
  'https://in-the-sky.org/data/object.php?id=HIP37279',
  'https://in-the-sky.org/data/object.php?id=HIP107556',
  'https://in-the-sky.org/data/object.php?id=TYC8534-2277-1',
  'https://in-the-sky.org/data/object.php?id=TYC4017-2319-1',
  'https://in-the-sky.org/data/object.php?id=HIP71683',
  'https://in-the-sky.org/data/object.php?id=TYC4252-1870-1',
  'https://in-the-sky.org/data/object.php?id=TYC5847-2333-1',
  'https://in-the-sky.org/data/object.php?id=TYC9398-2714-1',
  'https://in-the-sky.org/data/object.php?id=TYC9015-1445-1',
  'https://in-the-sky.org/data/object.php?id=TYC7064-1357-1',
  'https://in-the-sky.org/data/object.php?id=TYC1996-2400-1',
  'https://in-the-sky.org/data/object.php?id=TYC7917-2653-1',
  'https://in-the-sky.org/data/object.php?id=TYC2029-1690-1',
  'https://in-the-sky.org/data/object.php?id=TYC6098-1754-1',
  'https://in-the-sky.org/data/object.php?id=TYC5514-1423-1',
  'https://in-the-sky.org/data/object.php?id=TYC8979-3464-1',
  'https://in-the-sky.org/data/object.php?id=TYC3574-3347-1',
  'https://in-the-sky.org/data/object.php?id=TYC1100-1720-1',
  'https://in-the-sky.org/data/object.php?id=TYC8512-2115-1',
  'https://in-the-sky.org/data/object.php?id=TYC3523-1684-1',
  'https://in-the-sky.org/data/object.php?id=TYC536-2354-1',
  'https://in-the-sky.org/data/object.php?id=TYC8478-1395-1',
  'https://in-the-sky.org/data/object.php?id=TYC6445-990-1',
  'https://in-the-sky.org/data/object.php?id=TYC1920-2194-1',
  'https://in-the-sky.org/data/object.php?id=TYC8438-1959-1',
  'https://in-the-sky.org/data/object.php?id=TYC1518-1442-1',
  'https://in-the-sky.org/data/object.php?id=TYC7581-1600-1',
  'https://in-the-sky.org/data/object.php?id=TYC5460-1592-1',
  'https://in-the-sky.org/data/object.php?id=TYC9350-1626-1',
  'https://in-the-sky.org/data/object.php?id=TYC8411-1822-1',
  'https://in-the-sky.org/data/object.php?id=TYC3628-3193-1',
  'https://in-the-sky.org/data/object.php?id=TYC833-1381-1',
  'https://in-the-sky.org/data/object.php?id=TYC2521-2271-1',
  'https://in-the-sky.org/data/object.php?id=TYC5920-1685-1',
  'https://in-the-sky.org/data/object.php?id=TYC5585-1014-1',
  'https://in-the-sky.org/data/object.php?id=TYC8283-4134-1',
  'https://in-the-sky.org/data/object.php?id=TYC2496-1728-1',
  'https://in-the-sky.org/data/object.php?id=HIP91262',
  'https://in-the-sky.org/data/object.php?id=TYC9176-987-1',
  'https://in-the-sky.org/data/object.php?id=TYC7475-1129-1',
  'https://in-the-sky.org/data/object.php?id=TYC5414-2746-1',
  'https://in-the-sky.org/data/object.php?id=TYC9228-3049-1',
  'https://in-the-sky.org/data/object.php?id=TYC8320-2290-1',
  'https://in-the-sky.org/data/object.php?id=TYC9478-1483-1',
  'https://in-the-sky.org/data/object.php?id=TYC1000-2508-1',
  'https://in-the-sky.org/data/object.php?id=TYC5331-1752-1',
  'https://in-the-sky.org/data/object.php?id=TYC8785-1898-1',
  'https://in-the-sky.org/data/object.php?id=TYC1125-2186-1',
  'https://in-the-sky.org/data/object.php?id=TYC3320-2808-1',
  'https://in-the-sky.org/data/object.php?id=TYC7527-1031-1',
  'https://in-the-sky.org/data/object.php?id=TYC8899-2202-1',
  'https://in-the-sky.org/data/object.php?id=TYC1198-1597-1',
  'https://in-the-sky.org/data/object.php?id=TYC6977-1267-1',
  'https://in-the-sky.org/data/object.php?id=TYC7663-4093-1',
  'https://in-the-sky.org/data/object.php?id=TYC7141-2725-1',
  'https://in-the-sky.org/data/object.php?id=TYC8869-2461-1',
  'https://in-the-sky.org/data/object.php?id=TYC1624-3414-1',
  'https://in-the-sky.org/data/object.php?id=TYC7401-3471-1',
  'https://in-the-sky.org/data/object.php?id=TYC6803-2158-1',
  'https://in-the-sky.org/data/object.php?id=TYC6424-2270-1',
  'https://in-the-sky.org/data/object.php?id=TYC5691-1338-1',
  'https://in-the-sky.org/data/object.php?id=TYC363-1135-1',
  'https://in-the-sky.org/data/object.php?id=TYC5102-416-1',
  'https://in-the-sky.org/data/object.php?id=TYC4903-1750-1',
  'https://in-the-sky.org/data/object.php?id=TYC1266-1416-1',
  'https://in-the-sky.org/data/object.php?id=TYC8359-3650-1',
  'https://in-the-sky.org/data/object.php?id=TYC2317-1647-1',
  'https://in-the-sky.org/data/object.php?id=TYC9275-3641-1',
  'https://in-the-sky.org/data/object.php?id=TYC9117-1947-1',
  'https://in-the-sky.org/data/object.php?id=TYC3845-1190-1',
  'https://in-the-sky.org/data/object.php?id=TYC4628-237-1',
  'https://in-the-sky.org/data/object.php?id=TYC8140-6533-1',
  'https://in-the-sky.org/data/object.php?id=TYC5547-1518-1',
  'https://in-the-sky.org/data/object.php?id=TYC9182-1411-1',
  'https://in-the-sky.org/data/object.php?id=TYC2129-2772-1'
]


links.reduce((acc, link) => {
  return acc.then(results => {
    return nightmare.goto(link)
      .wait('.mainpane')
      .evaluate(() => {
        let starData = {};

        let rows = Array.from(document.querySelectorAll('tr'));
        rows = rows.map(row => [...row.children].map(td => td.innerText.trim()));
        rows.forEach((row, i) => {
          if (i === 1) {
            starData[row[0].split('\n')[0]] = row[0].split('\n')[1];
            starData[row[1].split('\n')[0]] = row[1].split('\n')[1];
          } else if (i > 1 && i < 11) {
            starData[row[0].split(':')[0]] = row[1].replace(/ *\[[^\]]*]/g, '').replace(/\n/g, ', ');
          }
        });

        return JSON.stringify(starData);
      })
      .then(result => {
        results.push(result);
        console.log(result);
        return results;
      })
      .catch(function (error) {
        console.error('Search failed:', error);
      });
  });
}, Promise.resolve([]))
  .then(results => console.log(results))
  .catch(err => console.log(err));