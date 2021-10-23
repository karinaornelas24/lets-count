function count() {
  let numStart = document.getElementById("txtstart");
  let numEnd = document.getElementById("txtend");
  let numPace = document.getElementById("txtpace");
  let res = document.querySelector("div#res");

  if (
    numStart.value.length == 0 ||
    numEnd.value.length == 0 ||
    numPace.value.length == 0
  ) {
    res.innerHTML = "Impossible to count!";
    window.alert("[ERROR] Something is missing!");
  } else {
    res.innerHTML = "Counting... <br>";
    let i = Number(numStart.value);
    let f = Number(numEnd.value);
    let p = Number(numPace.value);
    if (p <= 0) {
      window.alert("Invalid pace number! Considering pace 1");
      p = 1;
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}

/*    window.alert(`Passo inválido. Considerando PASSO 1`);
    txtpasso.innerHTML = 1;
  } else {
    for (numInicio; numFim; numPasso++) {
      res.innerHTML = console.log(`Contando: ${res} 👉`);
    }
    console.log("🏁");
*/
