inputText = document.querySelector("#inputText");
translateButton = document.querySelector("#translateButton");
outputText = document.querySelector("#outputText");

var url = "https://api.funtranslations.com/translate/pirate.json";

const getTranslatedUrl = (input) => {
  return url + "?" + "text=" + input;
};

const catchError = (e) => {
  console.log(e);
  alert("Something went wrong with the server");
};

const clickHandler = () => {
  const input = inputText.value;
  const translatedUrl = getTranslatedUrl(input);

  fetch(translatedUrl)
    .then((response) => response.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch(catchError);
};

translateButton.addEventListener("click", clickHandler);
