function soundKey (selectorSound) {
    const element = document.querySelector(selectorSound);

    if (element && element.localName === 'audio') {
        element.play();
    } else {
        alert ('Elemento não encontrado');
    }
}

//Buscando lista de elementos
const listKeys = document.querySelectorAll('.key');

//para
for (let counter = 0; counter < listKeys.length; counter++) {

    const key = listKeys[counter];
    const instrument = key.classList[1];
    const idAudio = `#sound_${instrument}`; //template string

    key.onclick = function () {
        soundKey(idAudio);
    }

    key.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter')  {
            key.classList.add('ativa');
        }
    }

    key.onkeyup = function () {
        key.classList.remove('ativa');
    }

}

// Buscando os elementos 1 a 1

//document.querySelector('.key_pom').onclick = keySoundPom; 

