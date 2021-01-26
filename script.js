function copiar() {
    let rango = document.createRange();
    rango.selectNode(document.getElementById("contra"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(rango);
    document.execCommand("copy");
    alert('Contraseña copiada al portapapeles!');
}

function generarContra(valor) {
    let text = "";
    let mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let minus = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let rar = "¡¿,.+@#$%&/()=;:?!";

    for (let i = 0; i < valor; i++)
        if (document.getElementById('mayus').checked && document.getElementById('minus').checked && document.getElementById('num').checked && document.getElementById('rar').checked) {
            text += (mayus + minus + num + rar).charAt(Math.floor(Math.random() * (mayus + minus + num + rar).length));
        } else if (!document.getElementById('mayus').checked && document.getElementById('minus').checked && document.getElementById('num').checked && document.getElementById('rar').checked) {
        text += (minus + num + rar).charAt(Math.floor(Math.random() * (minus + num + rar).length));
    } else if (!document.getElementById('minus').checked && document.getElementById('mayus').checked && document.getElementById('num').checked && document.getElementById('rar').checked) {
        text += (mayus + num + rar).charAt(Math.floor(Math.random() * (mayus + num + rar).length));
    } else if (!document.getElementById('num').checked && document.getElementById('mayus').checked && document.getElementById('minus').checked && document.getElementById('rar').checked) {
        text += (mayus + minus + rar).charAt(Math.floor(Math.random() * (mayus + minus + rar).length));
    } else if (!document.getElementById('rar').checked && document.getElementById('mayus').checked && document.getElementById('num').checked && document.getElementById('minus').checked) {
        text += (mayus + minus + num).charAt(Math.floor(Math.random() * (mayus + minus + num).length));
    } else if (!document.getElementById('mayus').checked && !document.getElementById('minus').checked && document.getElementById('num').checked && document.getElementById('rar').checked) {
        text += (num + rar).charAt(Math.floor(Math.random() * (num + rar).length));
    } else if (!document.getElementById('mayus').checked && document.getElementById('minus').checked && !document.getElementById('num').checked && document.getElementById('rar').checked) {
        text += (minus + rar).charAt(Math.floor(Math.random() * (minus + rar).length));
    } else if (!document.getElementById('mayus').checked && document.getElementById('minus').checked && document.getElementById('num').checked && !document.getElementById('rar').checked) {
        text += (num + minus).charAt(Math.floor(Math.random() * (num + minus).length));
    } else if (document.getElementById('mayus').checked && !document.getElementById('minus').checked && !document.getElementById('num').checked && document.getElementById('rar').checked) {
        text += (mayus + rar).charAt(Math.floor(Math.random() * (mayus + rar).length));
    } else if (document.getElementById('mayus').checked && !document.getElementById('minus').checked && document.getElementById('num').checked && !document.getElementById('rar').checked) {
        text += (num + mayus).charAt(Math.floor(Math.random() * (num + mayus).length));
    } else if (document.getElementById('mayus').checked && document.getElementById('minus').checked && !document.getElementById('num').checked && !document.getElementById('rar').checked) {
        text += (mayus + minus).charAt(Math.floor(Math.random() * (mayus + minus).length));
    } else {
        text = 'Selecciona al menos 2 casillas';
    }

    let result = document.getElementById('contra').innerHTML = text;

    return true;
}

function cambiarLongitud() {
    let slider = document.getElementById("longitud");
    let output = document.getElementById("caracteres");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }

    generarContra(slider.value);
}