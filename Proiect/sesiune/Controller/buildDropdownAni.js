let dropdownAni = document.getElementById('dropdownAni');
dropdownAni.length = 0;

let defaultOption1 = document.createElement('option');
defaultOption1.text = 'First choose a location';

dropdownAni.add(defaultOption1);
dropdownAni.selectedIndex = 0;

function CDropdownAni(locatie){
	//document.getElementById("cevaD").style.visibility = "hidden";
	dropdownAni.length = 0;

	let defaultOption1 = document.createElement('option');
	defaultOption1.text = 'Choose Year';

	dropdownAni.add(defaultOption1);
	dropdownAni.selectedIndex = 0;

	const url1 = 'http://localhost/TW/proiecttw/Model/mgetyears.php';

	const request1 = new XMLHttpRequest();
	request1.open('POST', url1);

	request1.onload = function() {
		if (request1.status === 200) {
			const data = JSON.parse(request1.responseText);
			let option;
			for (let i = 0; i < data.years.length; i++) {
				option = document.createElement('option');
				option.text = data.years[i].an;
				dropdownAni.add(option);
			}
		} else {
			// Reached the server, but it returned an error
		}   
	}

	const json = {
		"locatie": locatie
	};
	console.log(json);

	request1.setRequestHeader('Content-Type', 'application/json');

	request1.onerror = function() {
		console.error('An error occurred fetching the JSON from ' + url);
	};

	request1.send(JSON.stringify(json));
}

function tranzitieComparare(){
	dropdownAni.length = 0;

	let defaultOption1 = document.createElement('option');
	defaultOption1.text = 'Choose the other location';

	dropdownAni.add(defaultOption1);
	dropdownAni.selectedIndex = 0;

	const url1 = 'http://localhost/TW/Proiect_TW/Model/mgetlocations.php';

	const request1 = new XMLHttpRequest();
	request1.open('GET', url1, true);

	request1.onload = function() {
		if (request1.status === 200) {
			const data = JSON.parse(request1.responseText);
			let option;
			for (let i = 0; i < data.values.length; i++) {
				option = document.createElement('option');
				option.text = data.values[i].Locationdesc;
				dropdownAni.add(option);
			}
		} else {
			// Reached the server, but it returned an error
		}   
	}

	request1.onerror = function() {
		console.error('An error occurred fetching the JSON from ' + url);
	};

	request1.send();
}