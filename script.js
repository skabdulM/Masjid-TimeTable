const options = { method: "GET" };

fetch(
  "https://script.google.com/macros/s/AKfycbwwvhdAy6iBAs3yEuuZgaezFRHn-DbrJksU9_V-dl1TUp9RQ11dSoNBhILk-ip7gPmf/exec",
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
      cell4.innerHTML = element.Fajr;
      cell5.innerHTML = element.zuhar;
      cell6.innerHTML = element.asr;
      cell7.innerHTML = element.magrib;
      cell8.innerHTML = element.isha;
      cell9.innerHTML = element.Juma_1;
      cell10.innerHTML = element.Juma_2;
      cell11.innerHTML = element.Juma_3;
    }

    console.log(response);
  })
  .catch((err) => console.error(err));
