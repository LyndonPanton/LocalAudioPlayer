(function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	let formFieldLabel = document.getElementById("form-file-label");
	formFieldLabel.addEventListener("keydown", function(event) {
		if (event.keyCode == "13") {
			document.getElementById("form-file").click();
		}
	});

	let file document.getElementById("form-file");
	file.addEventListener("change", function(event) {
		let firstFile = this.files[0];
	});
}());