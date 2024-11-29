const lamp = document.querySelector('.lamp');
const switchToggle = document.getElementById('switch');
const switchContainer = document.querySelector('.switch-container');
const labelOn = document.querySelector('.label.on');
const labelOff = document.querySelector('.label.off');

let isLampOn = false; 

function updateSwitchState() {
    if (isLampOn) {
        switchToggle.classList.add('on');
        switchToggle.classList.remove('off');
        switchContainer.classList.add('on');
        switchContainer.classList.remove('off');
        lamp.style.backgroundColor = 'white';
        lamp.style.boxShadow = '0 0 150px white';
        console.log("Lâmpada Ligada");
        labelOn.style.opacity = '1';
        labelOff.style.opacity = '0';
    } else {
        switchToggle.classList.add('off');
        switchToggle.classList.remove('on');
        switchContainer.classList.add('off');
        switchContainer.classList.remove('on');
        lamp.style.backgroundColor = '#444';
        lamp.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
        console.log("Lâmpada Desligada");
        labelOn.style.opacity = '0';
        labelOff.style.opacity = '1';
    }
}

switchToggle.addEventListener('click', () => {
   
    isLampOn = !isLampOn;
    updateSwitchState(); 
});

updateSwitchState();
