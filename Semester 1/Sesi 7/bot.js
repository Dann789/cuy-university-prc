const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = () => {
  return [
    "Halo, aku adalah chat bot. Siapa namamu?",
    `Halo ${jawaban.value}, berapa umurmu?`,
    `Wah, ${jawaban.value} tahun ya! Apa hobimu?`,
    `Keren! Aku juga suka ${jawaban.value}. Apa makanan favoritmu?`,
    `Mantap! Aku juga suka ${jawaban.value}. Senang berkenalan denganmu!`,
  ];
};

pertanyaan.innerHTML = botSay()[init];

function botStart() {
  init++;
  pertanyaan.innerHTML = botSay()[init]
  switch (init) {
    case 1:
      console.log({ nama: jawaban.value });
      break;
    case 2:
      console.log({ umur: jawaban.value });
      break;
    case 3:
      console.log({ hobi: jawaban.value });
      break;
    case 4:
      console.log({ makanan_favorit: jawaban.value });
      break;
    case 5:
      console.log("Percakapan selesai");
      break;
    default:
      console.log("Selesai");
      break;
  }
}
