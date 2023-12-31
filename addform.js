let formData = document.getElementById("addMasjid");
formData.addEventListener("submit", (e) => {
  e.preventDefault();
  let masjidName = document.getElementById("masjidName").value;
  let areaName = document.getElementById("areaName").value;
  let fajr = document.getElementById("fajr").value;
  let zuhar = document.getElementById("zuhar").value;
  let asr = document.getElementById("asr").value;
  let magrib = document.getElementById("magrib").value;
  let isha = document.getElementById("isha").value;
  let juma_1 = document.getElementById("juma_1").value;
  let juma_2 = document.getElementById("juma_2").value;
  let juma_3 = document.getElementById("juma_3").value;
  const masjid = [
    `=ROW()`,
    masjidName,
    areaName,
    fajr,
    zuhar,
    asr,
    magrib,
    isha,
    juma_1,
    juma_2,
    juma_3,
  ];
  console.log(masjid);
  const options = {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(masjid),
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbyp_xPFdzOgGO02KagE_5fpgtKvKqhCLE2R8TGlQjFlIjS1a7c5n4J7du_TqiG3HVJ3/exec",
    options
  )
    // .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
});
