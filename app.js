// Log a message to the console
console.log("Loaded the page!");
let viz;

// To do list:
// 1. Find the URL of the dashboard
const url =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";

// 2. Find the vizContainer on the page
const vizContainer = document.getElementById("vizContainer");
// 3. Create viz options
const options = {
  device: "desktop",
  Region: "North",
  Category: ["Furniture", "Technology"],
  onFirstInteractive: function () {
    console.log("The viz had loaded!");
    document.getElementById("showViz").disabled = false;
    document.getElementById("hideViz").disabled = false;
  },
};

function initViz() {
  viz = new tableau.Viz(vizContainer, url, options);
}

//on click of the hide viz button, hide the dashboard
const hideVizButton = document.getElementById("hideViz");
hideVizButton.addEventListener("click", function () {
  viz.hide();
  // show the show button
  document.getElementById("showViz").style.display = "inline";
  //hide the hide button
  document.getElementById("hideViz").style.display = "none";
});

//on click of the show viz button, show the dashboard
const showVizButton = document.getElementById("showViz");
showVizButton.addEventListener("click", function () {
  viz.show();
  // hide the show button
  document.getElementById("showViz").style.display = "none";
  //show the hide button
  document.getElementById("hideViz").style.display = "inline";
});

// export to PDF button
const exportToPDF = document.getElementById("exportToPDF");
exportToPDF.addEventListener("click", function () {
  viz.showExportPDFDialog();
});
// export to Crosstab
const exportToCrossTab = document.getElementById("exportToCrossTab");
exportToCrossTab.addEventListener("click", function () {
  viz.showExportCrossTabDialog();
});
//export to PowerPoint
const exportToPowerPoint = document.getElementById("exportToPowerPoint");
exportToPowerPoint.addEventListener("click", function () {
  viz.showExportPowerPointDialog();
});

//export to Excel
const exportToExcel = document.getElementById("exportToExcel");
exportToExcel.addEventListener("click", function () {
  viz.exportCrossTabToExcel();
});

document.addEventListener("DOMContentLoaded", initViz);
