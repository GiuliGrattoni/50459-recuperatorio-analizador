// Generated from c:/Users/Administrator/Desktop/Recuperatorio analizador/Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorListener from './AnalizadorListener.js';
import AnalizadorVisitor from './AnalizadorVisitor.js';

const serializedATN = [4,1,12,57,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,1,2,1,2,1,3,1,3,3,3,33,8,3,1,4,1,4,1,4,3,4,38,8,4,1,4,1,4,3,4,42,
8,4,1,5,1,5,1,5,1,5,3,5,48,8,5,1,6,1,6,1,6,3,6,53,8,6,1,7,1,7,1,7,0,0,8,
0,2,4,6,8,10,12,14,0,2,1,0,2,5,1,0,8,9,56,0,16,1,0,0,0,2,26,1,0,0,0,4,28,
1,0,0,0,6,32,1,0,0,0,8,41,1,0,0,0,10,43,1,0,0,0,12,52,1,0,0,0,14,54,1,0,
0,0,16,17,3,2,1,0,17,21,3,4,2,0,18,20,3,6,3,0,19,18,1,0,0,0,20,23,1,0,0,
0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,0,24,25,5,0,0,1,
25,1,1,0,0,0,26,27,7,0,0,0,27,3,1,0,0,0,28,29,5,10,0,0,29,5,1,0,0,0,30,33,
3,8,4,0,31,33,3,10,5,0,32,30,1,0,0,0,32,31,1,0,0,0,33,7,1,0,0,0,34,37,5,
6,0,0,35,38,3,14,7,0,36,38,5,10,0,0,37,35,1,0,0,0,37,36,1,0,0,0,38,42,1,
0,0,0,39,42,5,10,0,0,40,42,5,11,0,0,41,34,1,0,0,0,41,39,1,0,0,0,41,40,1,
0,0,0,42,9,1,0,0,0,43,44,5,7,0,0,44,47,5,10,0,0,45,46,5,1,0,0,46,48,3,12,
6,0,47,45,1,0,0,0,47,48,1,0,0,0,48,11,1,0,0,0,49,53,3,14,7,0,50,53,5,11,
0,0,51,53,5,10,0,0,52,49,1,0,0,0,52,50,1,0,0,0,52,51,1,0,0,0,53,13,1,0,0,
0,54,55,7,1,0,0,55,15,1,0,0,0,6,21,32,37,41,47,52];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorParser extends antlr4.Parser {

    static grammarFileName = "Analizador.g4";
    static literalNames = [ null, "'='", "'!'", "'|'", "'#'", "'&'", "'@'", 
                            "'--'" ];
    static symbolicNames = [ null, "ASSIGN", "EXCLAMATION", "PIPE", "HASH", 
                             "AMPERSAND", "AT", "DASHDASH", "SINGLE_STRING", 
                             "DOUBLE_STRING", "WORD", "NUMBER", "WS" ];
    static ruleNames = [ "command", "prefix", "name", "argument", "positional", 
                         "optional", "value", "text" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorParser.ruleNames;
        this.literalNames = AnalizadorParser.literalNames;
        this.symbolicNames = AnalizadorParser.symbolicNames;
    }



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorParser.RULE_command);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.prefix();
	        this.state = 17;
	        this.name();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3264) !== 0)) {
	            this.state = 18;
	            this.argument();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(AnalizadorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prefix() {
	    let localctx = new PrefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorParser.RULE_prefix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(AnalizadorParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorParser.RULE_argument);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 10:
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.positional();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.optional();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	positional() {
	    let localctx = new PositionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorParser.RULE_positional);
	    try {
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.match(AnalizadorParser.AT);
	            this.state = 37;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 8:
	            case 9:
	                this.state = 35;
	                this.text();
	                break;
	            case 10:
	                this.state = 36;
	                this.match(AnalizadorParser.WORD);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.match(AnalizadorParser.WORD);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.match(AnalizadorParser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optional() {
	    let localctx = new OptionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorParser.RULE_optional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(AnalizadorParser.DASHDASH);
	        this.state = 44;
	        this.match(AnalizadorParser.WORD);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 45;
	            this.match(AnalizadorParser.ASSIGN);
	            this.state = 46;
	            this.value();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AnalizadorParser.RULE_value);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49;
	            this.text();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.match(AnalizadorParser.NUMBER);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
	            this.match(AnalizadorParser.WORD);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AnalizadorParser.RULE_text);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorParser.EOF = antlr4.Token.EOF;
AnalizadorParser.ASSIGN = 1;
AnalizadorParser.EXCLAMATION = 2;
AnalizadorParser.PIPE = 3;
AnalizadorParser.HASH = 4;
AnalizadorParser.AMPERSAND = 5;
AnalizadorParser.AT = 6;
AnalizadorParser.DASHDASH = 7;
AnalizadorParser.SINGLE_STRING = 8;
AnalizadorParser.DOUBLE_STRING = 9;
AnalizadorParser.WORD = 10;
AnalizadorParser.NUMBER = 11;
AnalizadorParser.WS = 12;

AnalizadorParser.RULE_command = 0;
AnalizadorParser.RULE_prefix = 1;
AnalizadorParser.RULE_name = 2;
AnalizadorParser.RULE_argument = 3;
AnalizadorParser.RULE_positional = 4;
AnalizadorParser.RULE_optional = 5;
AnalizadorParser.RULE_value = 6;
AnalizadorParser.RULE_text = 7;

class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_command;
    }

	prefix() {
	    return this.getTypedRuleContext(PrefixContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	EOF() {
	    return this.getToken(AnalizadorParser.EOF, 0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCommand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_prefix;
    }

	EXCLAMATION() {
	    return this.getToken(AnalizadorParser.EXCLAMATION, 0);
	};

	PIPE() {
	    return this.getToken(AnalizadorParser.PIPE, 0);
	};

	HASH() {
	    return this.getToken(AnalizadorParser.HASH, 0);
	};

	AMPERSAND() {
	    return this.getToken(AnalizadorParser.AMPERSAND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterPrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitPrefix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitPrefix(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_name;
    }

	WORD() {
	    return this.getToken(AnalizadorParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_argument;
    }

	positional() {
	    return this.getTypedRuleContext(PositionalContext,0);
	};

	optional() {
	    return this.getTypedRuleContext(OptionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitArgument(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitArgument(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PositionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_positional;
    }

	AT() {
	    return this.getToken(AnalizadorParser.AT, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	WORD() {
	    return this.getToken(AnalizadorParser.WORD, 0);
	};

	NUMBER() {
	    return this.getToken(AnalizadorParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterPositional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitPositional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitPositional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OptionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_optional;
    }

	DASHDASH() {
	    return this.getToken(AnalizadorParser.DASHDASH, 0);
	};

	WORD() {
	    return this.getToken(AnalizadorParser.WORD, 0);
	};

	ASSIGN() {
	    return this.getToken(AnalizadorParser.ASSIGN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterOptional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitOptional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitOptional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_value;
    }

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	NUMBER() {
	    return this.getToken(AnalizadorParser.NUMBER, 0);
	};

	WORD() {
	    return this.getToken(AnalizadorParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_text;
    }

	SINGLE_STRING() {
	    return this.getToken(AnalizadorParser.SINGLE_STRING, 0);
	};

	DOUBLE_STRING() {
	    return this.getToken(AnalizadorParser.DOUBLE_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitText(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AnalizadorParser.CommandContext = CommandContext; 
AnalizadorParser.PrefixContext = PrefixContext; 
AnalizadorParser.NameContext = NameContext; 
AnalizadorParser.ArgumentContext = ArgumentContext; 
AnalizadorParser.PositionalContext = PositionalContext; 
AnalizadorParser.OptionalContext = OptionalContext; 
AnalizadorParser.ValueContext = ValueContext; 
AnalizadorParser.TextContext = TextContext; 
