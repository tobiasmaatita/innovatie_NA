d3.selectAll(".text").on("mouseover", function() {
    d3.selectAll(".text").style("opacity", 0.6);
    d3.selectAll(".subClass").style("opacity", 1)
    d3.select(this).style("opacity", 1);
});

d3.selectAll(".text").on("mouseout", function() {
    d3.selectAll(".text").style("opacity", 1);
});

// d3.selectAll("#governance").on("click", function(){
//     console.log("klik")
//     d3.selectAll(".tableStrategie").transition().duration(1000).attr("hidden", true);
// })

// d3.selectAll("#ecosysteem").on("click", function(){
//     d3.selectAll(".tableStrategie").transition().duration(1000).attr("hidden", null)
// })
var wrapper = d3.select("#bigWrapper");
var menuWrapper = wrapper.append("div").attr("id", "menuWrapper");
var ul = menuWrapper.append("ul").attr("id", "menu");
let hidden = {
    ".tableStrategie": false, 
    ".tableResultaat": false, 
    ".tableGovernance": false, 
    ".tableEcosysteem": false, 
    ".tableCultuur": false
};
const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
var errorMessageGiven = false

d3.select("#menu")
.selectAll("li")
.data(["Strategie", "Ecosysteem", "Cultuur", "Governance", "Resultaat"])
.enter()
.append("li")
.text(function(d) {return d; })
.classed("selected", function(d){
    return hidden[`.table${d}`];
})
.on("click", function(d){
    if (sumValues(hidden) == 4) {
        if (hidden[`.table${d}`] == false) {
            errorText = d3.select("body").append("div").attr("id", "errorMessage");
            errorMessageGiven = true;
            errorText.append("p").text("Je kan niet alle categorieën wegklikken.\n \
            Kies een andere categorie om door te gaan of klik hier om deze waarschuwing te verwijderen.")
            .on("click", function() {
                d3.selectAll("#errorMessage").remove();
                errorMessageGiven = false;
            });
            return;
        };
    };
    var hide = (hidden[`.table${d}`] == false) ? true : null;
    (hide == true) ? hidden[`.table${d}`] = true : hidden[`.table${d}`] = false;
    d3.selectAll(`.table${d}`).attr("hidden", hide);
    updateList(d);
    if (errorMessageGiven) {
        d3.selectAll("#errorMessage").remove();
        errorMessageGiven = false;
    }
    console.log(sumValues(hidden))
});

function updateList(typeInfo) {
    // update menu with selected info
    d3.select("#menu").selectAll("li").classed("selected", function(d) {
        return d == typeInfo;
    });
};

