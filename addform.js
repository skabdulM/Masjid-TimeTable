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
    ,
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
    body: masjid,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbwdlEeaioow9F1Zf2ebxZM3mCN6od-_yIzC8mUlKvH2R5FI1PpTnr7v49g3K0jwwCGr/exec",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
});
