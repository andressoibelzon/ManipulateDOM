// let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

let myCountriesSelect = document.querySelector("#mySelect");


window.addEventListener('load', function() {
    let countries = ['USA', 'France', 'Italy', 'Brazil', 'Colombia', 'Belize', 'Venezuela'];
    for (let i = 0; i < countries.length; i++) {
      let opt = countries[i];
      let el = document.createElement("option");
      el.innerHTML = opt;
      el.value = opt;
      myCountriesSelect.appendChild(el);
    }
});


myCountriesSelect.addEventListener("change", function(event){
  alert(event.target.value)
});



