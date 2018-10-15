window.onload = function() {

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: "Desktop Browser Market Share in 2016"
	},
	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b>{label}</b>: {y}%",
		showInLegend: false,
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}%",
		dataPoints: [
			{ y: 25.00, label: "Construction" },
			{ y: 25.00, label: "Analysis" },
			{ y: 20.00, label: "Design" },
			{ y: 20.00, label: "Testing" },
			{ y: 10.00, label: "Promotion" },
		]
	}]
});
chart.render();

}
