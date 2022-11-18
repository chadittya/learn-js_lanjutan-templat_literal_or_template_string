//template literal / template string
const nama = "galih";
const umur = 31;
console.log(`Halo nama saya ${nama}, umur saya ${umur}`);

//embedded expression
console.log(`${1 + 1}`);
//console.log(`${alert(`halo`)}`);
const x = 10;
console.log(`${x % 2 == 0 ? `genap` : `ganji`}`);

//html fragment
const mhs = {
  nama: "Galih Arizza",
  umur: 31,
  nrp: "00987986",
  email: "askdahjd@gmail.com",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
