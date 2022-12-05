// Autor: Karl Kustav Muldia

dates = ['2022-10-06', '2022-10-13', '2022-10-17', '2022-10-24', '2022-10-24', '2022-10-24', '2022-11-03', '2022-11-03', '2022-11-17', '2022-11-21', 
	 '2022-11-21', '2022-11-21', '2022-11-29', '2022-12-08', '2022-12-12', '2022-12-19', '2022-12-19', '2023-01-02']


// Võta esimene element kuupäevade järjendist
var countDownDate = new Date(dates[0]).getTime();

// Hetkene kuupäev ja kellaaeg
var now = new Date().getTime();

// Otsi päevade järjendist sellist, mis pole enne tänast
while (now > countDownDate) {
    dates.shift()
    countDownDate = new Date(dates[0]).getTime();
}

// Leia praeguse ja allaloenduse sihtkuupäeva vahe
var distance = countDownDate - now;

// Nädalate ja päevade arvutamine
var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24) + 1);

// Näita jäänud aega nädalates ja päevades
document.getElementById("countdown").innerHTML = "Järgmise kontrolltööni on jäänud " + weeks + " nädalat ja " + days + " päeva!";

// Kui nädalaid on 0, näita ainult päevi
if (weeks==0 && days != 0){
    document.getElementById("countdown").innerHTML = "Järgmise kontrolltööni on jäänud " + days + " päeva!"
}

// Kui allaloendus on lõppenud, näita teksti, mis ütleb, et kontrolltöö on täna
if (weeks == 0 && days == 0) {
    document.getElementById("countdown").innerHTML = "Täna on kontrolltöö!";
}

// Kui kontrolltöö on vähem kui 7 päeva pärast, näita teksti, mis soovitab õppima hakata
if (weeks == 0 && days < 7) {
    document.getElementById("to_study").innerHTML = "Tuleb õppima hakata!"
}
