// Generated from c:/Users/Administrator/Desktop/Recuperatorio analizador/Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,83,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,
0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,7,1,7,5,7,43,8,7,
10,7,12,7,46,9,7,1,7,1,7,1,8,1,8,5,8,52,8,8,10,8,12,8,55,9,8,1,8,1,8,1,9,
4,9,60,8,9,11,9,12,9,61,1,10,4,10,65,8,10,11,10,12,10,66,1,10,1,10,4,10,
71,8,10,11,10,12,10,72,3,10,75,8,10,1,11,4,11,78,8,11,11,11,12,11,79,1,11,
1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,1,
0,5,3,0,10,10,13,13,39,39,3,0,10,10,13,13,34,34,15,0,65,90,95,95,97,122,
193,193,201,201,205,205,209,209,211,211,218,218,225,225,233,233,237,237,
241,241,243,243,250,250,1,0,48,57,3,0,9,10,13,13,32,32,89,0,1,1,0,0,0,0,
3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,
0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,1,
0,0,0,3,27,1,0,0,0,5,29,1,0,0,0,7,31,1,0,0,0,9,33,1,0,0,0,11,35,1,0,0,0,
13,37,1,0,0,0,15,40,1,0,0,0,17,49,1,0,0,0,19,59,1,0,0,0,21,64,1,0,0,0,23,
77,1,0,0,0,25,26,5,61,0,0,26,2,1,0,0,0,27,28,5,33,0,0,28,4,1,0,0,0,29,30,
5,124,0,0,30,6,1,0,0,0,31,32,5,35,0,0,32,8,1,0,0,0,33,34,5,38,0,0,34,10,
1,0,0,0,35,36,5,64,0,0,36,12,1,0,0,0,37,38,5,45,0,0,38,39,5,45,0,0,39,14,
1,0,0,0,40,44,5,39,0,0,41,43,8,0,0,0,42,41,1,0,0,0,43,46,1,0,0,0,44,42,1,
0,0,0,44,45,1,0,0,0,45,47,1,0,0,0,46,44,1,0,0,0,47,48,5,39,0,0,48,16,1,0,
0,0,49,53,5,34,0,0,50,52,8,1,0,0,51,50,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,
0,53,54,1,0,0,0,54,56,1,0,0,0,55,53,1,0,0,0,56,57,5,34,0,0,57,18,1,0,0,0,
58,60,7,2,0,0,59,58,1,0,0,0,60,61,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,
20,1,0,0,0,63,65,7,3,0,0,64,63,1,0,0,0,65,66,1,0,0,0,66,64,1,0,0,0,66,67,
1,0,0,0,67,74,1,0,0,0,68,70,5,46,0,0,69,71,7,3,0,0,70,69,1,0,0,0,71,72,1,
0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,75,1,0,0,0,74,68,1,0,0,0,74,75,1,0,
0,0,75,22,1,0,0,0,76,78,7,4,0,0,77,76,1,0,0,0,78,79,1,0,0,0,79,77,1,0,0,
0,79,80,1,0,0,0,80,81,1,0,0,0,81,82,6,11,0,0,82,24,1,0,0,0,8,0,44,53,61,
66,72,74,79,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class AnalizadorLexer extends antlr4.Lexer {

    static grammarFileName = "Analizador.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'='", "'!'", "'|'", "'#'", "'&'", "'@'", 
                         "'--'" ];
	static symbolicNames = [ null, "ASSIGN", "EXCLAMATION", "PIPE", "HASH", 
                          "AMPERSAND", "AT", "DASHDASH", "SINGLE_STRING", 
                          "DOUBLE_STRING", "WORD", "NUMBER", "WS" ];
	static ruleNames = [ "ASSIGN", "EXCLAMATION", "PIPE", "HASH", "AMPERSAND", 
                      "AT", "DASHDASH", "SINGLE_STRING", "DOUBLE_STRING", 
                      "WORD", "NUMBER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

AnalizadorLexer.EOF = antlr4.Token.EOF;
AnalizadorLexer.ASSIGN = 1;
AnalizadorLexer.EXCLAMATION = 2;
AnalizadorLexer.PIPE = 3;
AnalizadorLexer.HASH = 4;
AnalizadorLexer.AMPERSAND = 5;
AnalizadorLexer.AT = 6;
AnalizadorLexer.DASHDASH = 7;
AnalizadorLexer.SINGLE_STRING = 8;
AnalizadorLexer.DOUBLE_STRING = 9;
AnalizadorLexer.WORD = 10;
AnalizadorLexer.NUMBER = 11;
AnalizadorLexer.WS = 12;



