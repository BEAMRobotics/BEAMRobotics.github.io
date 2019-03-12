let settings = {
	"results_ig": [
		{"thumb": "potree/results/results_ig/UW_Structures_Lab/UW_Structures_Lab.png", "label": "UW Structures Lab", "url": "UW_Structures_Lab/UW_Structures_Lab.html"},
		{"thumb": "potree/results/results_ig/UW_Campus_Mapping_Offline/IG_UW_CAMPUS_GS.png", "label": "UW Campus", "url": "UW_Campus_Mapping_Offline/IG_UW_CAMPUS_GS.html"},
		{"thumb": "potree/results/results_ig/Conestogo_Bridge_Delams/conestogo_bridge_delams.png", "label": "Conestogo Bridge Delams", "url": "Conestogo_Bridge_Delams/conestogo_bridge_delams.html"},
	],
	"results_roben": [
		// {"thumb": "potree/results/results_roben/ats/ats.png", "label": "ATS", "url": "ats/ats.html"},
		{"thumb": "potree/results/results_roben/structures_lab/structures_lab.png", "label": "Structures Lab", "url": "structures_lab/structures_lab.html"},
		{"thumb": "potree/results/results_roben/fairway/fairway.jpg", "label": "Fairway Bridge", "url": "fairway/fairway.html"}
	],
	"results_faro": [
		// {"thumb": "potree/results/results_faro/ats_faro/ats_faro.png", "label": "ATS (Faro)", "url": "ats_faro/ats_faro.html"},
		{"thumb": "potree/results/results_faro/fairway_faro/fairway_faro.png", "label": "Fairway Bridge (Faro)", "url": "fairway_faro/fairway_faro.html"}
	]
}

function includeIGResults(){
	let resultCode = "";
	for(let result of settings.results_ig){
		resultCode += `
		<a href="potree/results/results_ig/${result.url}" target="_blank" style="display: inline-block">
			<div class="thumb2" style="background-image: url('${result.thumb}'); ">
				<div class="thumb-label">${result.label}</div>
			</div>
		</a>
		<br><br>
		`;
	}
	document.write(resultCode);
}

function includeRobenResults(){
	let resultCode = "";
	for(let result of settings.results_roben){
		resultCode += `
		<a href="potree/results/results_roben/${result.url}" target="_blank" style="display: inline-block">
			<div class="thumb2" style="background-image: url('${result.thumb}'); ">
				<div class="thumb-label">${result.label}</div>
			</div>
		</a>
		<br><br>
		`;
	}
	document.write(resultCode);
}

function includeFaroResults(){
	let resultCode = "";
	for(let result of settings.results_faro){
		resultCode += `

		<a href="potree/results/results_faro/${result.url}" target="_blank" style="display: inline-block">
			<div class="thumb2" style="background-image: url('${result.thumb}'); ">
				<div class="thumb-label">${result.label}</div>
			</div>
		</a>
		<br><br>
		`;
	}
	document.write(resultCode);
}


function includeMooseResults1(){
	let resultCode = "";
	resultCode += `
		<a href="potree/results/results_moose/Colby_Filtered/Colby_Filtered.html" target="_blank" style="display: inline-block">
			<div class="thumb2" style="background-image: url('potree/results/results_moose/Colby_Filtered/Colby_Filtered.png'); ">
				<div class="thumb-label">Filtered Map</div>
			</div>
		</a>
		`;
		document.write(resultCode);
}

function includeMooseResults2(){
		let resultCode = "";
		resultCode += `
			<a href="potree/results/results_moose/Colby_Snowy/Colby_Snowy.html" target="_blank" style="display: inline-block">
				<div class="thumb2" style="background-image: url('potree/results/results_moose/Colby_Snowy/Colby_Snowy.png'); ">
					<div class="thumb-label">Snowy Map</div>
				</div>
			</a>
			`;
		document.write(resultCode);
}

function includeMooseImage(){
		let resultCode = "";
		resultCode += `
			<a href="https://www.autonomoose.net/" target="_blank" style="display: inline-block">
				<div class="thumb2" style="background-image: url('images/Moose.jpg'); ">
					<div class="thumb-label">The Autonomoose</div>
				</div>
			</a>
			`;
		document.write(resultCode);
}
