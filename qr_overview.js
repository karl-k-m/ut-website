
// Allikas: https://stackoverflow.com/a/39914235
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// animatsioon
// Kood: Marko Tsengov

// käita lõpmatult animatsiooni
async function animation_loop() {
    // liigutatav element
    const data = document.getElementById("animation_data");

    // algul reset
    data.style.left = "500px";

    await sleep(1000);

    data.innerText = "Päring";
    data.classList.remove("important");
    data.classList.remove("destroy");
    
    // liigu veebilehitseja "ette"
    
    data.style.left = "420px";
    
    await sleep(1500);

    // liigu serverisse
    data.style.left = "10px";

    await sleep(1000);

    // võta "tähtis" olek ja liigu veebilehitseja juurde
    data.classList.add("important");
    data.innerText = "Andmed";
    data.style.left = "320px";

    await sleep(1500);

    // "hävita" andmed
    data.classList.add("destroy");
    
    // taaskäivita
    setTimeout(animation_loop, 2000);
}

// alusta animatsioon "kõrval"
setTimeout(animation_loop, 100);

// modaali loomine
// Kood (põhi): ChatGPT

// näita modaali
function showModal(id) {
    var modal = document.getElementById(id);
    modal.classList.add("show");
}

// peida modaal
function hideModal(id) {
    var modal = document.getElementById(id);
    modal.classList.remove("show");
}
