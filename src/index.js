import chalk from "chalk"; // mudar cor de console
import { carregarArquivo } from "./carregarArquivo.js";

const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

export function tratarError(erro) {
  throw new Error(chalk.red(erro.code, "Deu um erro no arquivo"));
}

export function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)]; //match combinar o regex texto.match(regex) exec metato regex [Object [RegExp String Iterator] {} ...]
  const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
  return resultados.length > 0 ? resultados : 'Não há links'
}


// carregarArquivo("./arquivos/texto.md");

