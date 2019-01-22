let settings = {
	"results_ig": [
		{"thumb": "potree/results/results_ig/UW_Campus_Mapping_Offline/IG_UW_CAMPUS_GS.png", "label": "UW Campus", "url": "UW_Campus_Mapping_Offline/IG_UW_CAMPUS_GS.html"},
	],
	"results_roben": [
		{"thumb": "potree/results/results_roben/ats/ats.png", "label": "ATS", "url": "ats/ats.html"},
	],
	"results_faro": [
		{"thumb": "potree/results/results_faro/demo_01/demo_01.png", "label": "Demo 01", "url": "demo_01/demo_01.html"},
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
		<a href="potree/results/results_faro/demo_01/demo_01.html" target="_blank" style="display: inline-block">
			<div class="thumb2" style="background-image: url('potree/results/results_faro/demo_01/demo_01.png'); ">
				<div class="thumb-label">Snowy Map</div>
			</div>
		</a>
		`;
		document.write(resultCode);
}

function includeMooseResults2(){
		let resultCode = "";
		resultCode += `
			<a href="potree/results/results_faro/demo_01/demo_01.html" target="_blank" style="display: inline-block">
				<div class="thumb2" style="background-image: url('potree/results/results_faro/demo_01/demo_01.png'); ">
					<div class="thumb-label">Filtered Map</div>
				</div>
			</a>
			`;
		document.write(resultCode);
}
