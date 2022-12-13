import { carregarArquivo } from "./carregarArquivo.js";
import { listaValidada } from "./http-validacao.js";
import fs from "fs";
import chalk from "chalk";
const caminho = process.argv; // dois caminho uma do node e outro pasta do caminho absoluto e o 3 o que passo o cmd

async function imprimirLista(valida, resultados, nome = "") {
  if (valida) {
    console.log(
      chalk.yellow("lista validada"),
      chalk.bgRed.white(nome),
      await listaValidada(resultados)
    );
  } else {
    console.log(chalk.yellow("lista"), chalk.bgRed.white(nome), resultados);
  }
}
async function processaTexto(argumentos) {
  const caminho = process.argv[2];
  const valida = process.argv[3] === "--valida";

  try {
    fs.lstatSync(caminho);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(chalk.bgRed("Arquivo não existe"));
      return;
    }
  }

  if (fs.lstatSync(caminho).isFile()) {
    // se for caminho aquivo
    const resultados = await carregarArquivo(argumentos[2]);
    imprimirLista(valida, resultados);
  } else if (fs.lstatSync(caminho).isDirectory()) {
    // se for caminho diretorio
    const arquivos = await fs.promises.readdir(caminho); // vai ler o meu diretorio e me retorinar o nome do arquivo
    arquivos.forEach(async (nomeDoArquivos) => {
      const lista = await carregarArquivo(`${caminho}/${nomeDoArquivos}`);
      imprimirLista(valida, lista, nomeDoArquivos);
    });
  }
}

processaTexto(caminho);
