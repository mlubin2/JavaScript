const tableData = data;

document.getElementById("formDate").addEventListener("submit", (ev) => {
	ev.preventDefault();
	
	const inputDateValue = document.getElementById("datetime").value;

	if (inputDateValue == "" || inputDateValue == null) return;

	let html = "";

	tableData.forEach((el, i) => {
		
		let dataTime = el.datetime;
		
		if (inputDateValue == el.datetime) {
			html += `
				<tr class="text-center">
					<td>${el.datetime}</td>
      				<td>${el.city}</td>
      				<td>${el.state}</td>
      				<td>${el.country}</td>
      				<td>${el.shape}</td>
      				<td>${el.durationMinutes}</td>
      				<td>${el.comments}</td>
    			</tr>
			`;
		}

		document.getElementById("insertResults").innerHTML = html;

	});
});