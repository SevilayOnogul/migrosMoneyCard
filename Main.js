let mesaj = `
Migros'a Hoşgeldiniz.
Money kartınız var mı ?
1-Evet
2-Hayır
`;

const urunler = [
  {
    urunIsmi: "Süt",
    fiyat: 30,
  },
  {
    urunIsmi: "Bebek bezi",
    fiyat: 100,
  },
  {
    urunIsmi: "Kuşbaşı",
    fiyat: 220,
  },
];

let sonuc = confirm(mesaj);
let odenecekTutar;
if (sonuc) {
  let isim = prompt("Adınızı Giriniz:");
  let soyisim = prompt("Soyisminizi Giriniz:");

  const musteri = new Musteri(isim, soyisim, sonuc, urunler);
  odenecekTutar = musteri.hesapla();
  alert(`Müşteri bilgileri: ${musteri.isim} ${musteri.soyisim}
        Ödenecek tutar:${odenecekTutar}
  `);
} else {
  const musteri = new Musteri(null, null, sonuc, urunler);
  odenecekTutar = musteri.hesapla();
  alert(`Ödenecek Tutar: ${odenecekTutar}`);
}
