nightmare
  .goto('https://in-the-sky.org/data/constellations_list.php')
  .wait('tbody')
  .evaluate(() => {
    let rows = Array.from(document.querySelectorAll('tr'));

    //change index if next line to 0 if const links, 4 is star links
    let starLinks = rows.map(row => [...row.children].map(td => td.innerHTML)[4]).slice(3, -1).map(i => i.split('"')[1]);

    return starlinks;
  })
  .end()
  .then(function (links) {
    console.log(links);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });