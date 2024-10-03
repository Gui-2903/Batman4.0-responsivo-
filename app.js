
let resultadosPesquisa = document.getElementById("resultados-pesquisa");

function Pesquisa(valorL,valorC,ArrayDados){
    
   
    let resultado = "";
    let i=valorL;
    let L=valorC;


    if (Array.isArray(ArrayDados) && Array.isArray(ArrayDados[0])){
  
      //e uma matriz 
      for (  i ; i < L ; i++) {
          console.log("Era:", i );
         
          for (let j = 0; j < ArrayDados[i].length; j++){
              
              const filme = ArrayDados[i][j];
              resultado += resultados(filme);
          }
          
      }

    }else{
     
       for (  i ; i < L ; i++) {
           console.log("Era:", i );

            const filme = ArrayDados[i];
            resultado += resultados(filme);

        }

    }

    console.log(resultado)
    resultadosPesquisa.innerHTML = resultado;
    
        
    var destino = document.getElementById('ponto-de-destino');
    // Faz a página rolar até o elemento de destino
    destino.scrollIntoView({ behavior: 'smooth' });
        
       
}

function verificarPosicao() {
        // Verifica se o usuário está abaixo do topo da página
        if (window.scrollY > 500) {
          // Mostra o botão
          document.querySelector('.botaoVoltar').style.display = 'block';
          document.querySelector('.botaoVoltar').style.animation = 'fadeIn 1s';
        } else {
            // Esconde o botão
            document.querySelector('.botaoVoltar').style.animation = 'fadeOut 1s';
            if(document.querySelector('.botaoVoltar').style.display =='block'){
               
                document.querySelector('.botaoVoltar').addEventListener('animationend', function(event) {
                    // Muda o display para none apenas quando a animação termina
                    if (event.animationName === 'fadeOut') {
                        // Muda o display para none apenas quando a animação 'fadeOut' termina
                        document.querySelector('.botaoVoltar').style.display = 'none';
                      }
                  });
            } 
                
         
        }
      }

      window.addEventListener('scroll', verificarPosicao);

      document.querySelector('.botaoVoltar').addEventListener('click', function() {
        // Faz a página voltar ao topo
        window.scrollTo(0, 0);
      });


      
/// funcao para psesquisar nos dados 
//barrraaaa de pesquisa 

const searchInput = document.getElementById('barraPesquisa');
const goButton = document.getElementById('botaoGo'); 
searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {

    if(searchInput.value != ""){
      filtrar();
    }
  }
});

goButton.addEventListener('click', function() {
  if(searchInput.value != ""){
    filtrar();
  }
});


//filtrar imput 
function filtrar(){
  const searchTerm = searchInput.value.toLowerCase();
  const resultados = dados.flat().filter(item => {
    return item.nome.toLowerCase().includes(searchTerm) || item.ator.toLowerCase().includes(searchTerm);
  });
  Pesquisa(0, resultados.length, resultados);
}
//HTML com os resultados 
function resultados(filme){
  return `
              <div class="item-resultado">
              
              
              <img id="ponto-de-destino" class="imgbat" src= "${filme.data}" alt="">
              
              <div class="texto">
              <h1 class="nomeF">${filme.nome}</h1>
              <p class="descricao">
               ${filme.ator}
              </p>
              
              
              </div>
              
              </div>
              `;
}