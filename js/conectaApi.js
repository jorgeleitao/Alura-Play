async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const  conexaoConvertida = await conexao.json();

    return conexaoConvertida;
    // console.log(conexaoConvertida);
}

// estrutura de uma função assincrona que faz uma conexão com a API e uma requisição POST (que é de cadastrar na API e no db.json)
async function criaVideo(titulo,descricao,url,imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
        })
    });
    

    if (!conexao.ok) {
        throw new Error("NÃO FOI POSSIVEL ENVIAR O VIDEO");
    }

    const conexaoConvertida = await conexao.json();
    

    console.log(conexaoConvertida)
    return conexaoConvertida;

}

async function buscarVideo(termoDeBusca){
   const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
   const conexaoConvertida = conexao.json();

   return conexaoConvertida;

}
export const conectaAPI ={
    listaVideos,
    criaVideo,
    buscarVideo
}

