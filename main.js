const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');


function speak(){
    msg.text = textbox.value // value is better than textcontent because it updates as you change the text
}

function getvoices(){
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .map((voice)=>{
            return `<option value ="${voice.name}">${voice.name} ${voice.lang}</option>`})
        .join(" ")
        msg.voice = voices[0]
}


speechSynthesis.addEventListener('voiceschanged', getvoices)

speakButton.addEventListener('click', speak)

