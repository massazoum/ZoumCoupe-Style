const times = document.getElementById("btntimes");
const bars = document.getElementById("btnbars");
const menumobile = document.getElementById("menumobile");


times.addEventListener("click", function () {
  bars.style.display = 'block';
  times.style.display = 'none';
  menumobile.style.display = 'none';
});

bars.addEventListener("click", function () {
  bars.style.display = 'none';
  times.style.display = 'block';
  menumobile.style.display = 'block';
});




