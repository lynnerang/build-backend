var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
var fs = require('fs');

nightmare
  .goto('https://in-the-sky.org/data/constellations_list.php')
  .wait('tbody')
  .evaluate(() => {
    let rows = Array.from(document.querySelectorAll('tr'));

    let starLinks = rows.map(row => [...row.children].map(td => td.innerHTML)[4]).slice(3, -1).map(i => i.split('"')[1]);

    rows = rows.map(row => [...row.children].map(td => td.innerText.trim())).slice(3, -1);

    let constellations = [];

    rows.forEach(row => {
      constellations.push({
        "name": row[0],
        "mythology": row[1],
        "appeared": row[2],
        "genitiveForm": row[3],
        "brightestStar": row[4]
      })
    })
    return constellations;
  })
  .end()
  .then(function (constellations) {
    console.log(constellations);
    fs.writeFileSync('testOutput.json', JSON.stringify(constellations));
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });



