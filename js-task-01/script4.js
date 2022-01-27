// Интернет магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка - 122 г. Напишите программу, запрашивающую у пользователя количество тех или других покупок, после чего выведите на экран общий вес посылки.


const souvenir = 75;
const bauble = 122;

let buySouvenir = prompt("How many souvenirs do you want?", "5");
let buyBauble = prompt("How many baubles do you want?", "10");

let souvenirWeight = souvenir * buySouvenir; // 5 * 75 = 375
let baubleWeight = bauble * buyBauble;       // 10 * 122 = 1220

let totalWeight = souvenirWeight + baubleWeight; // 1595 gramm
let totalWeightKg = totalWeight / 1000   // 1.595 kg

alert("The total weight of your items: " + totalWeightKg + " kg.  " + " Have a nice Day!");

