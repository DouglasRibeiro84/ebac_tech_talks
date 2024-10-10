AOS.init();

const dataEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampatual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampatual;

    const diaMs = 1000 * 60 * 60 * 24;
    const horaMs = 1000 * 60 * 60;
    const minutoMs = 1000*60;

    const diasAteEvento = Math.floor(distanciaEvento / diaMs);
    const horasAteEvento = Math.floor((distanciaEvento % diaMs) / horaMs);
    const minutosAteEvento = Math.floor((distanciaEvento % horaMs) / minutoMs);
    const segundosAteEvento = Math.floor((distanciaEvento % minutoMs) / 1000);

    console.log(diasAteEvento);
    console.log(horasAteEvento);
    console.log(minutosAteEvento);
    console.log(segundosAteEvento);

    document.getElementById("contador").innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (distanciaEvento < 0) {
        clearInterval(contaHoras)
        document.getElementById("contador").innerHTML = `Evento expirado`
    }
}, 1000)