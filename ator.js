// Ator
let yAtor = 368;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor,yAtor,30,26);
  //print(yAtor);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
    
  }
   if (keyIsDown(DOWN_ARROW)){
     if(podeSeMover()){
       yAtor += 3;
     }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
  colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      voltarAtorParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}
function voltarAtorParaPosicaoInicial(){
  yAtor = 368;
}
function incluiPontos(){
  stroke(10);
  fill(color(25,140, 0));
  rect(80, 10, 40, 20);
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 27);
  fill(color(255,165,60));
}
function marcaPonto(){
  if(yAtor < 6){
    meusPontos += 1;
    somDoPonto.play();
    voltarAtorParaPosicaoInicial();
  }
}
function pontosMaiorQueZero(){
  return meusPontos >0;
}
function podeSeMover(){
  return yAtor < 368;
  
}