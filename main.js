const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const textbox = document.querySelector('textarea')


function toggle(startover = true){
    msg.text = textbox.value // value is better than textcontent because it updates as you change the text
    speechSynthesis.cancel()
    if (startover){speechSynthesis.speak(msg)}
}

function getvoices(){
    voices = speechSynthesis.getVoices();
    voicesDropdown.innerHTML = voices
        .map((voice)=>{
            return `<option value ="${voice.name}">${voice.name} ${voice.lang}</option>`})
        .join(" ")
        //msg.voice = voices[0] ---- not needed will default to first voice.
}

function changeVoice(event){
    let newVoice = voices.filter((value) =>{
        return value.voiceURI == event.target.value})
    msg.voice = newVoice[0]
    toggle()
    //alot less clumsy
    // voices.find(voice => voice.name == this.value)
} 



speakButton.addEventListener('click', toggle)
stopButton.addEventListener('click', ()=>toggle(false))
voicesDropdown.addEventListener('change',changeVoice)
speechSynthesis.addEventListener('voiceschanged', getvoices) // voiceschanged event reandomly stopped wprkng in firefox

