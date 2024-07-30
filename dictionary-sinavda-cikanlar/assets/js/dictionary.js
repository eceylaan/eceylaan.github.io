//
const res = [];

let sound;

function createSectionHtml(title, definitions, synonyms, antonyms) {
  const definitionsHtml = definitions.map((x) => `<p>${x.definition}</p>`).join("");

  const synonymsHtml = synonyms.map((x) => `${x}`).join("");

  const antonymsHtml = antonyms.map((x) => `${x}`).join(", ");

  return `
    <h3>${title}</h3>
    ${definitionsHtml}
    <h5>Synonyms</h5>
    <p>${synonymsHtml}</p>
    <h5>Antonyms</h5>
    <p>${antonymsHtml}</p>
    <hr>
  `;
}

function handleSearchForm(e) {
  e.preventDefault();

  const searchedWord = searchForm["word"].value.replaceAll(" ", "%20");

  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchedWord)
    .then((res) => res.json())
    .then((res) => {
      wordText.innerText = res[0].word;
      let phonetics = res[0].phonetics.find((x) => x.text);
      if (!phonetics) {
        phonetics = res[0].phonetics[0];
        phonetics.text = "";
      }
      wordPronoun.innerText = phonetics.text;
      sound = new Audio(phonetics.audio);

      const generatedHtmlItems = [];

      for (const meaning of res[0].meanings) {
        generatedHtmlItems.push(createSectionHtml(meaning.partOfSpeech, meaning.definitions, meaning.synonyms, meaning.antonyms));
      }

      details.innerHTML = generatedHtmlItems.join("");
    });
}

searchForm.addEventListener("submit", handleSearchForm);

function playWordSound() {
  sound.play();
}

playWordSoundBtn.addEventListener("click", playWordSound);
