const answersObj = {
  comienzo: "septiembre",
  eje: "hitler, mussolini",
  ofensiva: "kursk",
  firma: "missouri"
};

const questions = [
  {
    name: "comienzo",
  },
  {
    question: "¿Quiénes fueron los aliados del Eje?",
    name: "eje",
    answers: [
        { text: "Adolf Hitler y Benito Mussolini", value: "hitler, mussolini" },
        { text: "Iósif Stalin, Franklin Roosevelt y Wiston Churchill", value: "stalin, roosevelt, churchill" },
        { text: "Patton y Wiston Churchil", value: "patton, churchill" },
        { text: "Adolf Hitler y Iòsif Stalin", value: "hitler, stalin" },
    ],
  },
  {
    question: "¿En dónde realizaron una ofensiva los alemanes en Julio de 1943?",
    name: "ofensiva",
    answers: [
        { text: "Berlin", value: "berlin" },
        { text: "Normandía", value: "normandia" },
        { text: "Stalingrado", value: "stalingrado" },
        { text: "Kursk", value: "kursk" },
    ],
  },
  {
    question: "¿En qué barco se firmó la capitulación de Japón?",
    name: "firma",
    answers: [
        { text: "USS Thomas Jeferson", value: "jeferson" },
        { text: "USS Missouri", value: "missouri" },
        { text: "USS George Patton", value: "patton" },
        { text: "USS Benjamin Franklyn", value: "franklin" },
    ],
  },
];

let counter = 0;

let correctAnswers = 0;

const inputs = document.getElementsByTagName("input");

function setInputsListener() {
  for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener("click", function (e) {
      let userAnswer = e.target.value;
      if (userAnswer === answersObj[questions[counter].name]) {
        correctAnswers++;
      }
    });
  }
}

setInputsListener();

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(myForm)

  if (e.target.elements[questions[counter].name].value === "") {
    alert("Necesita señalar un respuesta");
    return;
  }

  if (questions.length - 1 === counter) {
    alert("Tienes " + correctAnswers + " respuestas correctas");
    return;
  }

  counter++;
  if (questions[counter].question === undefined) return;
  console.log (counter)

  let fieldset = document.getElementsByTagName("fieldset");
  fieldset[0].innerHTML = "";
  let legend = "<legend>" + questions[counter].question + "</legend>";
  //console.log(legend)

  fieldset[0].innerHTML = legend;
  //console.log(fieldset)

  questions[counter].answers.forEach((element) => {
    let answer =
      '<label for="' +
      element.value +
      '-field">' +
      element.text +
      "</label><input id=" +
      element.value +
      '"-field" type="radio" name="' +
      questions[counter].name +
      '" value="' +
      element.value +
      '"/>';
    //console.log(answer)
    fieldset[0].innerHTML += answer;
  });

  setInputsListener();
});



