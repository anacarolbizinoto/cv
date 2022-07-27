function rodarRelogio() {
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    
    const relogioDigital = hora + ":" + minutos + ":" + segundos;
    const relogioDigitalGet = document.getElementById('relogio');
    relogioDigitalGet.innerHTML = relogioDigital;
    
    }
    
    setInterval(rodarRelogio, 500);