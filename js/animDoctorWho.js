$(document).ready(function () {

	$("#tardis").on("mousemove", function () {
		$("#tardisFlashlight").attr("fill", "rgba(255,165,0,0.8)");
	});

	$("#tardis").on("mouseleave", function () {
		$("#tardisFlashlight").attr("fill", "none");
	});

});
