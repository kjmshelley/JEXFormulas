function JEX() {
    function xf() {
      var tokens = [], x = {};
      function addToken(type, value) {
        tokens.push({
          type:type,
          value: value
        });
      }
      function isOperator(c) { return /[+\-*\/\^%=(),<>]/.test(c); }
      function isRealOperator(c) { return /[+\-*\/\^%=<>]/.test(c); }
      function isWhiteSpace(c) { return /\s/.test(c); }
      function isString(c) { return typeof c === "string" && !isOperator(c) && !isDigit(c) && !isWhiteSpace(c); }
      function isCharacter(c) { return /[a-zA-z]/.test(c); }
      function isDigit(c) { return /[0-9]/.test(c); }
      function isIdentifier(token) {
        switch(token.toLowerCase()) {
          case "true": return true;
          case "false": return true;
          default: return false;
        }
      }

      function isFormula(token) {
        switch(token) {
          case "add" : { return true; break; }
          case "subtract": { return true; break; }
          case "multiply": { return true; break; }
          case "divide": { return true; break; }
          case "repeat": { return true; break; }
          case "asc": { return true; break; }
          case "char": { return true; break; }
          case "clean": { return true; break; }
          case "code": { return true; break; }
          case "concat":
          case "concatenate":
          case "&" : { return true; break; }
          case "dollar": { return true; break; }
          case "exact": { return true; break; }
          case "find": { return true; break; }
          case "fixed": { return true; break; }
          case "format": { return true; break; }
          case "instr": { return true; break; }
          case "lcase": { return true; break; }
          case "lower": { return true; break; }
          case "rcase": { return true; break; }
          case "left": { return true; break; }
          case "len": { return true; break; }
          case "ltrim": { return true; break; }
          case "mid": { return true; break; }
          case "proper": { return true; break; }
          case "replace": { return true; break; }
          case "rept": { return true; break; }
          case "right": { return true; break; }
          case "rtrim": { return true; break; }
          case "search": { return true; break; }
          case "split": { return true; break; }
          case "str": { return true; break; }
          case "strcomp": { return true; break; }
          case "strconv": { return true; break; }
          case "strreverse": { return true; break; }
          case "substitute": { return true; break; }
          case "t": { return true; break; }
          case "text": { return true; break; }
          case "trim": { return true; break; }
          case "ucase": { return true; break; }
          case "upper": { return true; break; }
          case "val": { return true; break; }
          case "value": { return true; break; }

          case "date": { return true; break; }
          case "dateadd": { return true; break; }
          case "datediff": { return true; break; }
          case "datepart": { return true; break; }
          case "datepart": { return true; break; }
          case "dateserial": { return true; break; }
          case "datevalue": { return true; break; }
          case "day": { return true; break; }
          case "days360": { return true; break; }
          case "format": { return true; break; }
          case "hour": { return true; break; }
          case "minute": { return true; break; }
          case "month": { return true; break; }
          case "monthname": { return true; break; }
          case "networkdays": { return true; break; }
          case "now": { return true; break; }
          case "second": { return true; break; }
          case "time": { return true; break; }
          case "timeserial": { return true; break; }
          case "timevalue": { return true; break; }
          case "today": { return true; break; }
          case "time": { return true; break; }
          case "weekday": { return true; break; }
          case "weekdayname": { return true; break; }
          case "year": { return true; break; }

          case "if": { return true; break; }
          case "list": { return true; break; }
          case "vlist": { return true; break; }
          case "lv": { return true; break; }
          default: return false;
        }
      }

    function fx(t) {
      var value="";
      if(t.p.a && typeof t.p.a === "object") value = xFormula(t.p.a); //this is for json formula format
      else if(t.p.a) value = t.p.a; //this is for excel formula format
      else value = "";
      return value;
    }

    function generateTokens(code) {
      if(tokens.length>0) tokens = [];
      var tempTokenHolder = "";
      console.log(code);
      for(var i=0;i<code.length;i++) {
        if(isWhiteSpace(code[i])) continue;
        tempTokenHolder += code[i];
        console.log(tempTokenHolder);
        if (isCharacter(tempTokenHolder)) {
          var et = tempTokenHolder, ix=i+1;
          while(isCharacter(code[ix]) && ix<code.length) { et += code[ix]; ix++; }
          if(isIdentifier(et) && !isFormula(et)) {
            addToken("IDENTIFIER", et);
            tempTokenHolder = "";
            i=ix-1; //need this here because we read up to the last character
            continue;
          }
        }

        if(isDigit(tempTokenHolder)) {
          var d = i + 1;
          while(d < code.length) {
            if(!isDigit(code[d])) break;
            tempTokenHolder += code[d];
            ++d;
          }
          i = d-1; //need this here because we read up to the last character
          addToken("PARAMETER", tempTokenHolder);
          tempTokenHolder = "";
        }
        else if(isFormula(tempTokenHolder)) {
          console.log("ff " + tempTokenHolder);
          addToken("FORMULA", tempTokenHolder);
          console.log(tokens);
          tempTokenHolder = "";
        }
        else if(tempTokenHolder === "'") {
          var et = tempTokenHolder, ix=i;
          while(code[++ix] != "'" && ix<code.length) { et += code[ix]; }
          et += code[ix];
          addToken("PARAMETER", et);
          tempTokenHolder = "";
          i=ix;
          continue;
        }
        else if(isOperator(tempTokenHolder)) {
          if(isRealOperator(tempTokenHolder) && isRealOperator(code[i+1])) {
            tempTokenHolder += code[i+1];
            i++;
          }
          addToken("OPERATOR", tempTokenHolder);
          tempTokenHolder = "";
        }
      }
      console.log(tokens);
      return tokens;
    }

    function parse(code) {
      var sym = {}, token, index=-1, par = 96, level=0,
        parameter = function() { par++; return String.fromCharCode(par); },
        advance = function() { token = tokens[++index]; };
      tokens = generateTokens(code);
      function generateSymbolTable(x) {
        par = 96;
        if(!x) x = sym;
        while(index < tokens.length) {
          advance();
          if(!token) continue;

          if(token.type === "OPERATOR" && token.value === ")") {level--; return;}

          if(token.type === "FORMULA" && level===0) {
            if(tokens[(index+1)].value!=="(") throw "Formula is not in the correct format";
            x.f = token.value;
            level++;
          }
          else if(token.type === "PARAMETER") {
            if(!x.p) x.p = {};
            if(!token || token.value.length === 0) continue;
            else if(isDigit(token.value)) {
              var c = parameter();
              x.p[c] = parseFloat(token.value);
            }
            else if(token.value[0] === "'") {
              var c = parameter();
              token.value = token.value.slice(1, token.value.length-1);
              x.p[c] = token.value;
            }
          }
          else if (token.type==="IDENTIFIER") {
            var c = parameter();
            x.p[c] = token.value;
          }
          else if (token.type==="OPERATOR") {
            if(token.value === ",") continue;
            if(tokens[(index-1)].type === "FORMULA") continue;
            if(!token || token.value.length === 0) continue;
            if(x && x.f === "if") {
              if(!x.p) x.p = {};
              var c = parameter();
              x.p[c] = token.value;
            }
          }
          else if(token.type==="FORMULA" && level > 0 && isFormula(token.value)) {
            level++;
            if(!x.p) x.p = {};
            var c = parameter();
            x.p[c] = {};
            x.p[c].f = token.value;
            var tp = par;
            generateSymbolTable(x.p[c]);
            par = tp;
          }
        }
      }
      generateSymbolTable();
      return sym;
    }

    this.evaluate = function (statement, params) {
      if(!statement) return statement;
      else if(statement.length<1) return statement;
      else if(statement[0] === "=") return xFormula(parse(statement.substring(1)));
      else return xFormula(statement);
      return -1;
    }

    function xFormula(token, params) {
      var total;
      switch(token.f) {
        /* Math */
        case "add" : {
          if(!total) total = 0;
          for(var par in token.p) {
            if(isDigit(token.p[par])) {
              total += token.p[par];
            }
            else if(typeof token.p[par] === "object") { total += xFormula(token.p[par]); }
            else return 0;
          }
          return total;
        }
        case "subtract": {
          for(var par in token.p) {
            if(isDigit(token.p[par])) {
              if(!total) total = token.p[par];
              else total -= token.p[par];
            }
            else if(typeof token.p[par] === "object") {
              if(!total) total = token.p[par];
              else total -= xFormula(token.p[par]);
            }
            else return 0;
          }
          return total;
        }
        case "multiply": {
          if(total === 0) total = 1; //need this line for multiplication
          for(var par in token.p) {
            if(isDigit(token.p[par])) {
              if(!total) total = token.p[par];
              else total *= token.p[par];
            }
            else if(typeof token.p[par] === "object") {
              if(!total) total = token.p[par];
              else total *= xFormula(token.p[par]);
            }
            else return 0;
          }
          return total;
        }
        case "divide": {
          for(var par in token.p) {
            if(isDigit(token.p[par])) {
              total /= token.p[par];
            }
            else if(typeof token.p[par] === "object") total /= xFormula(token.p[par]);
            else return 0;
          }
          return total;
        }

        /* string */
        case "repeat": {
          var to=-1, value=fx(token), i=1, temp="";
          if(typeof token.p.to === "object") to = xFormula(token.p.to);
          else to = token.p.to;
          for(i=1; i<=to; i++) temp += value;
          return temp;
        }
        case "code":
        case "asc": {
          var value = fx(token);
          return value.charCodeAt(0);
        }
        case "chr":
        case "char": {
          var value = fx(token);
          return String.fromCharCode(value);
        }
        case "clean": {
          var value = fx(token);
          return value.replace(/[^\x20-\x7E]+/g, '');
        }
        case "concat":
        case "concatenate": {
          var value = "";
          for(var par in token.p) {
            if(typeof token.p[par] === "object") {
              var i = xFormula(token.p[par]);
              value += i.toString();
            }
            else value += token.p[par];
          }
          return value;
        }
        case "dollar": {

        }
        case "exact": return true;
        case "find": return true;
        case "fixed": return true;
        case "format": return true;
        case "instr": return true;
        case "lcase":
        case "lower": {
          var value = fx(token);
          return value.toLowerCase();
        }
        case "rcase": return true;
        case "left": return true;
        case "len": return true;
        case "ltrim": return true;
        case "mid": return true;
        case "proper": return true;
        case "replace": return true;
        case "rept": return true;
        case "right": return true;
        case "rtrim": return true;
        case "search": return true;
        case "split": return true;
        case "str": return true;
        case "strcomp": return true;
        case "strconv": return true;
        case "strreverse": return true;
        case "substitute": return true;
        case "t": return true;
        case "text": return true;
        case "trim": return true;
        case "ucase":
        case "upper": {
          var value = fx(token);
          return value.toUpperCase();
        }
        case "val": return true;
        case "value": return true;

        /* DATES */
        case "date": return true;
        case "dateadd": return true;
        case "datediff": return true;
        case "datepart": return true;
        case "datepart": return true;
        case "dateserial": return true;
        case "datevalue": return true;
        case "day":{

        }
        case "days360": return true;
        case "format": { throw "Not Implemented"; }
        case "hour": {
          var value = fx(token);
          if(value) value = (new Date(value)).getHours();
          else value = (new Date()).getHours();
          return value;
        }
        case "minute": {
          var value = fx(token);
          if(value) value = (new Date(value)).getMinutes();
          else value = (new Date()).getMinutes();
          return value;
        }
        case "month": {
          var value = fx(token);
          if(value) value = (new Date(value)).getMonth();
          else value = (new Date()).getMonth();
          return value;
        }
        case "monthname": {
          var value = fx(token);
          if(value) value = (new Date(value)).getTime();
          else value = (new Date()).getTime();

          if(value === 0) return "January";
          else if(value === 1) return "February";
          else if(value === 2) return "March";
          else if(value === 3) return "April";
          else if(value === 4) return "May";
          else if(value === 5) return "June";
          else if(value === 6) return "July";
          else if(value === 7) return "August";
          else if(value === 8) return "September";
          else if(value === 9) return "October";
          else if(value === 10) return "November";
          else if(value === 11) return "December";
          else return "";
        }
        case "networkdays": {
          throw "Not Implemented";
        }
        case "now": {
          return Date.now();
        }
        case "second": {
          var value = fx(token);
          if(value) value = (new Date(value)).getSeconds();
          else value = (new Date()).getSeconds();
          return value;
        }
        case "timenow": {
          var value = "", d = new Date();
          value = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds();
          return value;
        }
        case "timeserial": return true;
        case "timevalue": {
          /* this is the time representation of the date object passed in */
          var value = fx(token);
          if(value) value = (new Date(value));
          else value = (new Date());
          return value
        }
        case "today": {
          return Date.now().toDateString();
        }
        case "time": {
          var value = fx(token);
          if(value) value = (new Date(value)).getTime();
          else value = (new Date()).getTime();
          return value;
        }
        case "weekday": {
          var value = fx(token);
          if(value) value = (new Date(value)).getDay();
          else value = (new Date()).getDay();
          return value;
        }
        case "weekdayname": {
          var value = fx(token);
          if(value) value = (new Date(value)).getDay();
          else value = (new Date()).getDay();
          if(value === 0) return "Monday";
          else if(value === 1) return "Tuesday";
          else if(value === 2) return "Wednesday";
          else if(value === 3) return "Thursday";
          else if(value === 4) return "Friday";
          else if(value === 5) return "Saturday";
          else if(value === 6) return "Sunday";
          else return "";
        }
        case "year": {
          var value = fx(token);
          if(value) value = (new Date(value)).getFullYear();
          else value = (new Date()).getFullYear();
          return value;
        }

        case "if": {
          /*if statement
            if cond, true, false
          */
          var l, o, r, a = token.p.hasOwnProperty('a'), b = token.p.hasOwnProperty('b'),
          c = token.p.hasOwnProperty('c');

          if(!a || !b) throw "the if formula is not in the correct format";
          if(b && !isOperator(token.p.b)) throw "the if formula is not in the correct format";

          /* if(true, 'x','y') OR if(false, 'x','y') */
          if(a && token.p.a === "true" && !isOperator(token.p.b) && !c) return token.p.b;
          if(a && token.p.a === "false" && !isOperator(token.p.b) && !c) return token.p.b;

          if(a && (typeof token.p.a !== "object")) l = token.p.a;
          else if(typeof token.p.a === "object") l = xFormula(token.p.a);

          if(c && (typeof token.p.c !== "object")) r = token.p.c;
          else if(c && (typeof token.p.c === "object")) r = xFormula(token.p.c);

          var value;
          if(token.p.b) {
            switch(token.p.b) {
              case "+": value = (l + r); break;
              case "-": value = (l - r); break;
              case "*": value = (l * r); break;
              case "/": value = (l / r); break;
              case "^": value = (l ^ r); break;
              case "=": value = (l == r); break;
              case "!=": value = (l != r); break;
              case "<": value = (l < r); break;
              case ">": value = (l > r); break;
              case "<=": value = (l <= r); break;
              case ">=": value = (l >= r); break;
              default : value = false;
            }
          }
          return value ? token.p.d : token.p.e;
        }
        case "list" : {
          var a;
          if(token.p.hasOwnProperty('a')) a = token.p.a;
          if(token.p.length>1) {
            //remove first parameter
            delete token.p.a;
            if(!a) throw "Error with the list formula";
            //compare the remaining parameters against a
            for(var i in token.p) {
              if(token.p[i] == a) return true;
            }
          }
          else {
            if(params) {
              for(var i in params) {
                if(params[i] == a) return true;
              }
            }
          }
          return false;
        }
        case "vlist" : {
          var a;
          if(token.p.hasOwnProperty('a')) a = token.p.a;
          if(token.p.length>1) {
            //remove first parameter
            delete token.p.a;
            if(!a) throw "Error with the list formula";
            //compare the remaining parameters against a
            for(var i in token.p) {
              if(token.p[i].p.a == a) return token.p[i].p.b;
            }
          }
          else {
            if(params) {
              for(var i in params) {
                if(params[i] == a) return true;
              }
            }
          }
          return "N\\A";
        }

        default: throw "Formula Not Found";
      }
    }
  }
  xf.prototype.Formula = function(statement, params) {
    return this.evaluate(statement, params);
  }

  return new xf();
}
