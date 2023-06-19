const options = { method: "GET" };

fetch(
  "https://script.google.com/macros/s/AKfycbyp_xPFdzOgGO02KagE_5fpgtKvKqhCLE2R8TGlQjFlIjS1a7c5n4J7du_TqiG3HVJ3/exec",
  options
)
  .then((response) => response.json())
  .then((response) => {
    var table = document.getElementById("myTable");
    for (let i = 1; i < response.length; i++) {
      const element = response[i];
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
      var cell10 = row.insertCell(9);
      var cell11 = row.insertCell(10);
      // cell1.innerHTML = element.sr_no;

      cell1.innerHTML = `<th scope="row">${element.sr_no}</th> `;
      cell2.innerHTML = element.masjidName;
      cell3.innerHTML = element.Area;
      cell4.innerHTML = new Date(element.Fajr).toLocaleTimeString();
      cell5.innerHTML = new Date(element.zuhar).toLocaleTimeString();
      cell6.innerHTML = new Date(element.asr).toLocaleTimeString();
      cell7.innerHTML = new Date(element.magrib).toLocaleTimeString();
      cell8.innerHTML = new Date(element.isha).toLocaleTimeString();
      cell9.innerHTML = new Date(element.Juma_1).toLocaleTimeString();
      cell10.innerHTML =
        element.Juma_2.length != 0
          ? new Date(element.Juma_2).toLocaleTimeString()
          : "NA";
      cell11.innerHTML =
        element.Juma_3.length != 0
          ? new Date(element.Juma_3).toLocaleTimeString()
          : "NA";
    }

    console.log(response);
  })
  .catch((err) => console.error(err));
