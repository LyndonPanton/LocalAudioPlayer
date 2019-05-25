(function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	let formFieldLabel = document.getElementById("form-file-label");
	formFieldLabel.addEventListener("keydown", function(event) {
		if (event.keyCode == "13") {
			document.getElementById("form-file").click();
		}
	});

	let file = document.getElementById("form-file");
	file.addEventListener("change", function(event) {
		let firstFile = this.files[0];

		let valid = checkInput(firstFile);

		if (valid) {
			// Add file src to audio
			addAudio(firstFile);
		} else {
			return;
		}
	});

	function addAudio(file) {
		let reader = new FileReader();

		reader.addEventListener("load", function(event) {
			let audio = document.getElementById("audio-player");
			audio.src = event.target.result;
		})

		reader.readAsDataURL(file)
	}

	function checkInput(input) {
		// If a file has been received
		if (input.name) {
			// If the file has the mp3, ogg, wav or webm extension
            if (input.name.slice(-3) == "mp3" || input.name.slice(-3) == "ogg" || input.name.slice(-3) == "wav" || input.name.slice(-4) == "webm") {
                document.getElementById("form-file-label").textContent = "You have selected a valid file";
                document.getElementById("feedback-name").textContent = input.name;
                document.getElementById("feedback-size").textContent = input.size + " bytes";
                document.getElementById("feedback-type").textContent = input.type;
                return true;
            } else {
                document.getElementById("form-file-label").textContent = "Please select an audio file with the mp3/ogg/webm/wav extension";
                document.getElementById("feedback-name").textContent = input.name;
                document.getElementById("feedback-size").textContent = input.size + " bytes";
                document.getElementById("feedback-type").textContent = input.type;
                return false;
            }
        } else {
            document.getElementById("form-file-label").textContent = "You have not selected a file";
            document.getElementById("feedback-name").textContent = "N/A";
            return false;
        }
	}

	function toggleNavigation() {
		document.getElementById("navigation").classList.toggle("navigation-visible");
		document.getElementById("navigation").classList.toggle("navigation-hidden");
	}

	let menu = document.getElementById("menu");
	menu.addEventListener("click", toggleNavigation);
	menu.addEventListener("keydown", function(event) {
		if (event.keyCode == "13") {
			toggleNavigation();
		}
	});
}());