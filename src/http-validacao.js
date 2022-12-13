import chalk from "chalk";

function extrairLinks(arryLinks) {
  return arryLinks.map((objectLinks) => Object.values(objectLinks).join(""));
}

function manejaErros(error) {
  if(error.cause.code === 'ENOTFOUND') {
    return 'Link não encontrada'
  } else {
    return 'Algo deu errado'
    // console.log(chalk.red("Algo deu errado"), error);
  } 
}

async function checaStatus(listaUrls) {
  const arrStatus = await Promise.all(
    listaUrls.map(async (url) => {
      try {
        const response = await fetch(url);
        return response.status;
      } catch (error) {
        return manejaErros(error);
      }
    })
  );
  return arrStatus;
}

export async function listaValidada(listaDeLinks) {
  const links = await extrairLinks(listaDeLinks);
  const status = await checaStatus(links);

  return listaDeLinks.map((obj, index) => ({
    ...obj,
    status: status[index],
  }));
}

//[gatinho salsicha](http://gatinhosalsicha.com.br/)
