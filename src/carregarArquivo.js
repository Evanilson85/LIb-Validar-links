import chalk from "chalk";
import fs from "fs";
import { tratarError, extraiLinks } from "./index.js";

export async function carregarArquivo(caminhoDoArquivo) {
  const encoded = "utf8";
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoded);
    return extraiLinks(texto);
  } catch (error) {
    tratarError(erro);
  }
}

//* codigo sicrono executa em sequencia
//* codigo assíncrono não espera finalizar uma tarefa para iniciar outra asycn await

// function carregarArquivo(caminhoDoArquivo) {
//   let encodedUtf = 'utf8'
//   fs.promises.readFile(caminhoDoArquivo, encodedUtf).then((texto) => {
//     console.log(chalk.bgBlue.green(texto))
//   }).catch(error => {
//     tratarError(error)
//   })
// }

// function carregarArquivo(caminho) {
//   fs.readFile(caminho, "utf8", (erro, texto) => {
//     if (erro) {
//       tratarError(erro);
//     }

//     console.log(chalk.blue(texto));
//   });
// }

// async function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   try {
//     const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
//     console.log(chalk.green(texto))
//   } catch(erro) {
//     trataErro(erro);
//   } finally {
//     Ainda existe um último bloco, o finally, que é executado sempre, independentemente da execução do código ter sido resolvida no try ou gerado um erro passado para o catch
//   }
//  }
