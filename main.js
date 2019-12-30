const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const textbox = document.querySelector('textarea')


function speak(){
    speechSynthesis.cancel()
    msg.text = textbox.value // value is better than textcontent because it updates as you change the text
    speechSynthesis.speak(msg)
}

function getvoices(){
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .map((voice)=>{
            return `<option value ="${voice.name}">${voice.name} ${voice.lang}</option>`})
        .join(" ")
        //msg.voice = voices[0] ---- not needed will default to first voice.
}


speechSynthesis.addEventListener('voiceschanged', getvoices)
speakButton.addEventListener('click', speak)
stopButton.addEventListener('click', ()=>speechSynthesis.cancel())

