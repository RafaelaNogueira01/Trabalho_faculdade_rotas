const lista = [
    {
      nome: "D. Elza",
      endereco:
        "Rua Gabriela da Costa, 379 – Bairro Pinheirinho, Alfenas - MG",
    },
    {
      nome: "Irmão da Risley",
      endereco: "Rua Juscelino Barbosa, 1439 – Res. Aeroporto, Alfenas - MG",
    },
    {
      nome: "Maria José",
      endereco: "Rua Benjamim Constant, 432 – Res. Aeroporto, Alfenas - MG",
    },
    {
      nome: "Laís e cunhada",
      endereco: "Rua Fany Enguel Macedo, 137 – Campos Eliseos, Alfenas - MG",
    },
    {
      nome: "Ezequiel",
      endereco:
        "Rua Barão de Alfenas, 1637 – Vila Santa Luzia, Alfenas - MG",
    },
    {
      nome: "Joaquim",
      endereco: "Rua Barão de Alfenas, 204 – Vila Santa Luzia, Alfenas - MG",
    },
    {
      nome: "Daiana",
      endereco:
        "Rua Onofre Gomes Pereira, 400 Bloco 1 - AP 24 – Recreio Vale do Sol, Alfenas - MG",
    },
    {
      nome: "Célia",
      endereco: "Rua Cafezinho, 297 – Recreio Vale do Sol, Alfenas - MG",
    },
    {
      nome: "Filha do Vicente",
      endereco: "Rua Elísio Ayer, 679 – Vila Promessa, Alfenas - MG",
    },
    {
      nome: "Vania Maria de Souza",
      endereco: "Rua Elísio Ayer, 413 – Res. Itaparica, Alfenas - MG",
    },
    {
      nome: "Nen",
      endereco: "Rua Elízio Ayer, 470 – Res. Itaparica, Alfenas - MG",
    },
    {
      nome: "Jussara",
      endereco: "Rua Antônio Generoso da Silva, 61 – Vista Grande, Alfenas - MG",
    },
    {
      nome: "Aparecido Ferreira de Freitas (Hominho das pernas tortas)",
      endereco: "Rua Elísio Ayer, 293 – Campos Elíseos, Alfenas - MG",
    },
  ];
  
  let latAtual = 0;
let longAtual = 0;

function inicializar() {
  renderizarLista();

  navigator.geolocation.getCurrentPosition((posicao) => {
    latAtual = posicao.coords.latitude;
    longAtual = posicao.coords.longitude;

    tratarOpcaoLista(0);
  });
}

function renderizarLista() {
  const elementoLista = document.querySelector("#list");

  lista.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `<a href="#mapa"><button class="list-item" onclick="tratarOpcaoLista(${index})">${item.nome} - ${item.endereco}</button>`;
    elementoLista.appendChild(li);
  });
}

function tratarOpcaoLista(indice) {
  const elementoMapa = document.querySelector("#mapa");
  const item = lista[indice];

  const origem = latAtual && longAtual ? `${latAtual},${longAtual}` : "Alfenas, MG";
  const centro = latAtual && longAtual ? `${latAtual},${longAtual}` : "";

  elementoMapa.src = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyC_tdV7FfH0Wj0DgTdmQs36zDc4fBW1T7k&origin=${origem}&destination=${item.endereco}&zoom=13${centro && `&center=${centro}`}`;
}

window.onload = inicializar;