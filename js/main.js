// Init Speech Synth
const message = new SpeechSynthesisUtterance()
let voices = []

// Get available voices
speechSynthesis.addEventListener("voiceschanged", () => {
   voices = speechSynthesis.getVoices()
   loadVoices(voices)
})

// DOM elements
const quotesELement = document.querySelector(".quotes")
const selectElement = document.querySelector(".custom__select")
const custom = document.querySelector(".custom")
const textareaElement = document.querySelector(".custom__textarea")

// Load select with voices
function loadVoices(voices) {
    voices.forEach(voice => {
        const { name, lang } = voice
        const optionElement = document.createElement("option")
        optionElement.innerText = `${ name } - ${ lang }`
        optionElement.value = name
        selectElement.appendChild(optionElement)
    })
}

// Listen for change events on select
selectElement.addEventListener("change", (event) => {
    const name = event.target.value
    const voice = voices.find(voice => voice.name === name)
    message.voice = voice
})

// Listen for for form submission
custom.addEventListener("submit", (event) => {
    event.preventDefault()
    const customText = textareaElement.value
    message.text = customText
    speechSynthesis.speak(message)
})


// App data
const quotes = [
    {
      text: "Hola, Buenos días ",
     // author: "Epictecto",
    },
    {
      text: "Necesito ayuda ",
      //author: "Séneca",
    },
    {
      text: "Gracias",
     // author: "Marco Aurelio",
    },
    {
      text: "Por favor",
      //author: "Séneca",
    },
    {
      text: "Disculpa",
      //author: "Séneca",
    },
    {
      text: "¿Te puedo hacer una pregunta?",
      //author: "Musonio Rufo",
    },
    {
      text: "¿Puedo ayudarte?",
      //author: "Musonio Rufo",
    },
    {
      text: "¿Puedes decirme la hora, por favor?",
      //author: "Musonio Rufo",
    },
    {
      text: "Un gusto en conocerte",
      //author: "",
    },
    {
      text: "No puedo hablar",
      //author: "Séneca",
    },
    {
      text: "Tengo que irme",
      //author: "Epictecto",
    },
    {
      text: "¿Puedes indicarme una dirección?",
      //author: "Marco Aurelio",
    },
    
  ];

// Load quotes in the DOM
quotes.forEach(quote => {
    const { text, author } = quote
    const quoteTemplate = `
        <section class="quote">
            <h2 class="quote__text">${ text }</h2>
           
        </section> `
    quotesELement.innerHTML += quoteTemplate
})

// Listen for clicks on quotes
const quotesCollection = document.querySelectorAll(".quote")
quotesCollection.forEach(quoteElement => {
    quoteElement.addEventListener("click", (event) => {
        message.text = event.target.innerText
        speechSynthesis.speak(message)
    })
})

// Listen for errors
// try {
//     const name = "Juan"
//     name = "Andres"
// } catch(error) {
//     console.error(error.message) 
//     message.text = error.message
//     speechSynthesis.speak(message)
// }



