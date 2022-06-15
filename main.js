
// palabras para el juego, agregar las que quieran siempre de 5 letras
// es un array de strings (dict por dictionary)
let dict = [
  'gatos',
  'papas',
  'fuego',
  'huevo',
  'color',
  'casas',
  'arbol',
  'nueve',
  'zorro',
  'remar',
  'locro',
  'jamon',
  'feliz',
  'cinco',
  'tonto',
  'cuero',
  'volar',
  'vuelo',
  'avion',
  'genio',
  'pibes'
];
// ocultar perdiste y Ganaste
document.getElementById('win').style.display = 'none';
document.getElementById('perdiste').style.display = 'none';
// intentos
function button(e) {
    let bien = 'gatos';
    let wordle = document.getElementById('game');
    let res = document.getElementById('res').value;
    for (let i = 0; i < 1; i++) {
      let row = document.createElement("div");
      row.className = "tabla";
      for(let j = 0; j < 5; j++) {
        let caja = document.createElement("div");
        caja.textContent = res[j];
        if(bien.includes(res[j])) {
          caja.style.backgroundColor = 'yellow';
        } else {
          caja.style.backgroundColor = 'gray';
        }
        if(res[j] == bien[j]) {
          caja.style.backgroundColor = 'green';
        }
        caja.className = "cajas";
        row.appendChild(caja);
      }
      wordle.appendChild(row);
      if(bien == res) {
        document.getElementById('win').style.display = 'block';
      }
    }
}
