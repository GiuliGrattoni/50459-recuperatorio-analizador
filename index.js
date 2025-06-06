import antlr4 from 'antlr4';
import { CharStreams, CommonTokenStream } from 'antlr4';
import fs from 'fs';

import analizadorLexer from './generated/analizadorLexer.js';
import analizadorParser from './generated/analizadorParser.js';
import CustomAnalizadorVisitor from './CustomAnalizadorVisitor.js';

async function main() {
  let input = '';

  try {
    input = fs.readFileSync('input.txt', 'utf8');
  } catch (err) {
    console.error("No se pudo leer input.txt");
    return;
  }

  // Crear lexer y tokens
  const inputStream = CharStreams.fromString(input);
  const lexer = new analizadorLexer(inputStream);
  const tokens = new CommonTokenStream(lexer);

  // Mostrar tabla de tokens
  const allTokens = lexer.getAllTokens();
  console.log("Tabla de Tokens y Lexemas:");
  console.log("--------------------------------------------------");
  console.log("| Lexema         | Token                         |");
  console.log("--------------------------------------------------");
  allTokens.forEach(token => {
    const name = analizadorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
    console.log(`| ${token.text.padEnd(14)} | ${name.padEnd(30)}|`);
  });
  console.log("--------------------------------------------------\n");

  // Rehacer el lexer
  const inputStream2 = CharStreams.fromString(input);
  const lexer2 = new analizadorLexer(inputStream2);
  const tokens2 = new CommonTokenStream(lexer2);

  // Crear parser y visitor
  const parser = new analizadorParser(tokens2);
  const tree = parser.command();

  if (parser.syntaxErrorsCount > 0) {
    console.error("❌ Se encontraron errores de sintaxis.");
  } else {
    console.log("✅ Entrada válida. Interpretando...\n");
    const visitor = new CustomAnalizadorVisitor();
    visitor.visit(tree);
  }
}

main();
