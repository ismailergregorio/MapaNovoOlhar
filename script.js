    // Criar o mapa centralizado em São Paulo
var map = L.map('map', {
    center: [-20.294915659067243, -40.347506360915474],
    zoom: 40,
    zoomControl: false // Remove o controle de zoom padrão
});

// Adicionar camada do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Adicionar controle de zoom em outra posição (exemplo: canto inferior direito)
L.control.zoom({
    position: 'bottomright' // Posição do zoom
}).addTo(map);


var popupContent = `
            <div class="popup-content">
                <h3>Meu Local</h3>
                <p>Este é um local muito interessante!</p>
                <p><strong>Endereço:</strong> Rua Fictícia, 123</p>
                <p><strong>Descrição:</strong> Localizado no coração da cidade, com acesso fácil a várias atrações turísticas.</p>
                <p><a href="https://www.exemplo.com" target="_blank">Saiba mais</a></p>
            </div>
        `;


L.marker([-20.294915659067243, -40.347506360915474]).addTo(map)
    .bindPopup(popupContent)
    autoPan: true
    // .openPopup();



function clikMenu() {
    let mn = document.getElementById("mn"); // Certifique-se de que existe um elemento com id="mn"
    let menu_m = document.getElementById("menu");

    let menu = document.getElementById("menu_maximo"); // Certifique-se de que existe um elemento com id="mn"
    let lista_salvar = document.getElementById("combo_sua_lista");
    let lista_historico = document.getElementById("combo_sua_historico")
    
    if (mn.style.height === "46px" || mn.style.height === "") {
        for (let index = 46; index <= 260; index++) {
            setTimeout(() => {
                mn.style.height = index + "px";
            }, (index - 46) * 1); // Ajuste no tempo para suavizar a animação
        }
        menu_m.style.display = "block";
    } else {
        menu_m.style.display = "none";
        for (let index = 260; index >= 46; index--) {
            setTimeout(() => {
                mn.style.height = index + "px";
            }, (260 - index) * 1);
        }

        for (let index = 300; index >= 0; index--) {
            setTimeout(() => {
                menu.style.width = index + "px";
            }, (300 - index) * 1);
        }
        lista_historico.style.display = "none"
        lista_salvar.style.display = "none"
        menu.style.display = "none";
    }

}

function clikPerfio(){
    let menu = document.getElementById("menu_maximo"); // Certifique-se de que existe um elemento com id="mn"
    // let lista_salvar = document.getElementById(lista);
    menu.style.display = "flex"
    // lista_salvar.style.display = "block"
    if (menu.style.width === "0px" || menu.style.width === "") {
        for (let index = 0; index <= 300; index++) {
            setTimeout(() => {
                menu.style.width = index + "px";
            }, (index - 0) * 1); // Ajuste no tempo para suavizar a animação
        }
    }else {
        for (let index = 300; index >= 0; index--) {
            setTimeout(() => {
                menu.style.width = index + "px";
            }, (300 - index) * 1);
        }
        
        menu.style.display = "none";
    }
}

function clikSalvar(){
    let menu = document.getElementById("menu_maximo"); // Certifique-se de que existe um elemento com id="mn"
    let lista_salvar = document.getElementById("combo_sua_lista");
    let lista_historico = document.getElementById("combo_sua_historico")
    menu.style.display = "flex"
    // lista_salvar.style.display = "block"

    if (menu.style.width === "300px"){
        lista_historico.style.display = "none"
        lista_salvar.style.display = "block"
    }else{
        if (menu.style.width === "0px" || menu.style.width === "") {
            for (let index = 0; index <= 300; index++) {
                setTimeout(() => {
                    menu.style.width = index + "px";
                }, (index - 0) * 1); // Ajuste no tempo para suavizar a animação
            }
            lista_historico.style.display = "none"
            lista_salvar.style.display = "block"
        }else {
            for (let index = 300; index >= 0; index--) {
                setTimeout(() => {
                    menu.style.width = index + "px";
                }, (300 - index) * 1);
            }
            lista_historico.style.display = "none"
            lista_salvar.style.display = "none"
            menu.style.display = "none";
        }
    }
}

function clikHistorico(){
    let menu = document.getElementById("menu_maximo"); // Certifique-se de que existe um elemento com id="mn"
    let lista_salvar = document.getElementById("combo_sua_lista");
    let lista_historico = document.getElementById("combo_sua_historico")
    menu.style.display = "flex"
    // lista_salvar.style.display = "block"

    if (menu.style.width === "300px"){
        lista_historico.style.display = "block"
        lista_salvar.style.display = "none"
    }else{
        if (menu.style.width === "0px" || menu.style.width === "") {
            for (let index = 0; index <= 300; index++) {
                setTimeout(() => {
                    menu.style.width = index + "px";
                }, (index - 0) * 1); // Ajuste no tempo para suavizar a animação
            }
            lista_historico.style.display = "blovk"
            lista_salvar.style.display = "none"
        }else {
            for (let index = 300; index >= 0; index--) {
                setTimeout(() => {
                    menu.style.width = index + "px";
                }, (300 - index) * 1);
            }
            lista_historico.style.display = "none"
            lista_salvar.style.display = "none"
            menu.style.display = "none";
        }
    }
}

// clikMenulista()