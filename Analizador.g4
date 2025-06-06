grammar Analizador;

command: prefix name argument* EOF;

prefix: EXCLAMATION | PIPE | HASH | AMPERSAND;
name: WORD;

argument
    : positional
    | optional
    ;

positional
    : AT (text | WORD)
    | WORD
    | NUMBER
    ;

optional
    : DASHDASH WORD ('=' value)?
    ;

value
    : text
    | NUMBER
    | WORD
    ;

text
    : SINGLE_STRING
    | DOUBLE_STRING
    ;

ASSIGN: '=';
EXCLAMATION: '!';
PIPE: '|';
HASH: '#';
AMPERSAND: '&';
AT: '@';
DASHDASH: '--';

SINGLE_STRING: '\'' (~['\r\n])* '\'';
DOUBLE_STRING: '"' (~["\r\n])* '"';

WORD: [a-zA-ZáéíóúñÁÉÍÓÚÑ_]+;
NUMBER: [0-9]+ ('.' [0-9]+)?;

WS: [ \t\r\n]+ -> skip;
