import Lexer from "./Lexer";
import Parser from "./Parser";

const code =
    `
    ахмед РАВНО 5 ЗАНЯТ 9;
    лукас РАВНО 7 ОТСТАНЬ 6;
  
    ПОЧЕМУ_НЕ_ОТВЕЧАЕШЬ ахмед;
    ПОЧЕМУ_НЕ_ОТВЕЧАЕШЬ лукас;
    `

const lexer = new Lexer(code);

lexer.lexAnalysis()

const parser = new Parser(lexer.tokenList);

const rootNode = parser.parseCode()

parser.run(rootNode);
