table = d3.select('body').append('table').style("border-collapse", "collapse").style("border", "2px black solid");

const rows = [
    ['a', 'b', 'c'],
    [1, 2, 3]
];

table.append("thead").append("tr")
.select_all("th")
.data(rows[0])
.enter().append("th")
.text(function(d) {return d; })