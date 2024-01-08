import {
  arabicHadith as arabicHadiths,
  englishHadith as englishHadiths,
} from "./hadith.js";

const leftPageContentTitle = document.getElementsByClassName(
  "page__content-title"
);
const hadithArabicElement = document.getElementById(
  "page__content-hadith-text-arabic"
);
const hadithEnglishElement = document.getElementById(
  "page__content-hadith-text-english"
);
console.log(leftPageContentTitle);

const radioButtons = document.getElementsByTagName("input");
console.log(radioButtons);

radioButtons[0].addEventListener("change", reset);
radioButtons[1].addEventListener("change", generateHadith);

function generateHadith(event) {
  const index = Math.floor(Math.random() * arabicHadiths.length);
  console.log(leftPageContentTitle);
  const arabicHadith = arabicHadiths[index];
  const englishHadith = englishHadiths[index];
  leftPageContentTitle[1].innerText = `Hadith Number ${index + 1}`;
  leftPageContentTitle[0].innerText = `حديث رقم ${(index + 1).toLocaleString(
    "ar-EG"
  )}`;

  hadithArabicElement.innerText = arabicHadith.hadith;
  hadithEnglishElement.innerText = englishHadith.hadith;
}

function reset() {
  leftPageContentTitle[1].innerText = ``;
  leftPageContentTitle[0].innerText = ``;
  hadithArabicElement.innerText = "";
  hadithEnglishElement.innerText = "";
}
