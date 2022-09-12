let yCarros = [40,96,150, 210, 270, 318]
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let alturaCarro = 50;
let comprimentoCarro = 50;

function mostraCarro() {
  for(let i = 0; i < imagemCarros.length;i++){
  image(imagemCarros[i], xCarros[i],yCarros[i],comprimentoCarro,alturaCarro);
    //print("o valor do print é "+ i);
  }
}
function movimentaCarro() {
  for(let i = 0; i < imagemCarros.length;i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}
function voltaPosiçãoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length;i++){
  if(passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
  }
  }
}
function passouTodaTela(xCarro){
  return xCarro < -50;
}
