import Lexer from "./Lexer";
import Parser from "./Parser";

const code =
    `
    ахмед ДЕБИЛ 5 ЗАНЯТ 9;
    лукас ДЕБИЛ ;
    
    ПОЧЕМУ_НЕ_ОТВЕЧАЕШЬ ахмед;
    ПОЧЕМУ_НЕ_ОТВЕЧАЕШЬ лукас;
    
    `

const lexer = new Lexer(code);

lexer.lexAnalysis()

const parser = new Parser(lexer.tokenList);

const rootNode = parser.parseCode()

parser.run(rootNode);
