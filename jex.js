function JEX() {
    function xf() {
      var tokens = [], x = {};
      function addToken(type, value) {
        tokens.push({
          type:type,
          value: value
        });
      }
      //function isOperator(c) { return /[+\-*\/\^%=(),<>]/.test(c); }
      function isOperator(c) { return /[+\-*^%=()]/.test(c); }
      function taboo(c) { return /[,()]/.test(c); }
      function isMathOperator(c) { return /[+\-*\/\^%=<>]/.test(c); }
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
          case "getDate": { return true; break; }
          case "second": { return true; break; }
          case "time": { return true; break; }
          case "timeserial": { return true; break; }
          case "timevalue": { return true; break; }
          case "today": { return true; break; }
          case "time": { return true; break; }
          case "weekday": { return true; break; }
          case "weekdayname": { return true; break; }
          case "year": { return true; break; }
          case "t": { return true; break; }

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
      for(var i=0;i<code.length;i++) {
        if(isWhiteSpace(code[i])) continue;
        if(code[i] === ')') { addToken("TERMINATE", ""); continue; }
        if(taboo(code[i])) continue;
        tempTokenHolder += code[i];
        // check for identifiers
        if (isCharacter(tempTokenHolder)) {
          var et = tempTokenHolder, ix=i+1;
          while(isCharacter(code[ix]) && ix<code.length) { et += code[ix]; ix++; }
          if(isIdentifier(et) && !isFormula(et)) {
            addToken("IDENTIFIER", et);
            tempTokenHolder = "";
            i=ix-1; //need this here because we read up to the last character
            continue;
          }
          else if(isFormula(et)) {
            addToken("FORMULA", et);
            tempTokenHolder = "";
            i=ix-1; //need this here because we read up to the last character
            continue;
          }
        }

        // check for numeric values
        // the below will test for 1 or 100 or -100 and will fail for 100-1
        if(isDigit(tempTokenHolder)) { // || (tempTokenHolder === "-" && isDigit(code[i+1]) &&
            //(((i-1)>-1 && !isDigit(code[i-1])) || !isDigit(code[i-1])))) {
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
        else if(tempTokenHolder === "'") {
          var et = tempTokenHolder, ix=i;
          while(code[++ix] != "'" && ix<code.length) { et += code[ix]; }
          et += code[ix];
          addToken("PARAMETER", et);
          tempTokenHolder = "";
          i=ix;
          continue;
        }
        else if(tempTokenHolder === "#") {
          var et = tempTokenHolder, ix=i;
          while(code[++ix] != "#" && ix<code.length) { et += code[ix]; }
          et += code[ix];
          addToken("VARSOURCE", et);
          tempTokenHolder = "";
          i=ix;
          continue;
        }
        else if(isMathOperator(tempTokenHolder)) {
          if(isMathOperator(code[i+1])) {
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
          if(token.type === "TERMINATE") return;
          /* ACCOUNT FOR THIS =add(1,1)+1+1 !!!!*/

          /* statements can start as a formula or as a paramter */
          if(token.type==="FORMULA") {
            if(!x.p) x.p = {};
            var c = parameter();
            x.p[c] = {};
            x.p[c].f = token.value;
            var tp = par;
            generateSymbolTable(x.p[c]);
            par = tp;
          }
          else if(token.type === "PARAMETER") {
            if(!x.p) x.p = {};
            var c = parameter();
            x.p[c] = token.value;
          }
          else if(token.type === "OPERATOR") {
            if(!x.p) throw "Formula is not in the correct format";
            var c = parameter();
            x.p[c] = token.value;
          }
          else if(token.type === "VARSOURCE") {
            if(!x.p) x.p = {};
            var c = parameter();
            x.p[c] = "#[add value]#";//token.value;
          }
        }
      }
      generateSymbolTable();
      return sym;
    }

    this.evaluate = function (statement, params) {
      if(!statement || statement.length < 1) return "";
      else if(statement[0] === "=") return xFormula(parse(statement.substring(1)));
      else return xFormula(statement);
      return -1;
      //console.log(parse(statement.substring(1)));
      //generateTokens(statement.substring(1));
    }

    function xFormula(token, params) {
      var total, tv, operator = "";
      var pars = (token.p) ? Object.keys(token.p) : [];
      pars.sort();
      for(var i=0; i<pars.length; i++) {
        var o = token.p[pars[i]];
        if(typeof o === "object") {
          switch(o.f.toLowerCase()) {
            //Math
            case "add" : {
              if(!total) total = 0;
              for(var par in o.p) {
                if(isDigit(o.p[par])) {
                  total += parseFloat(o.p[par]);
                }
                else if(typeof o.p[par] === "object") { total += parseFloat(xFormula(o.p[par])); }
                else total = 0;
              }
              break;
            }
            case "now":
            case "today":
            case "getdate": {
              total = new Date();
              break;
            }
          }
        }
        else {
          /* if formula is null then check to see if an operation needs to be perform */
          switch(operator) {
              case "+": {
                if(o.p && typeof o.p[i] === "object") {

                }
                else if(typeof total === "object" & Date.parse(total) > 0) {
                    total = new Date(Date.parse(total) + (parseInt(o)*86400000));
                }
                else if(TryParseInt(o)) total = (total || 0) + parseInt(o);
                operator = "";
                break;
              }
              case "-": {
                if(o.p && typeof o.p[i] === "object") {

                }
                else if(typeof total === "object" & Date.parse(total) > 0) {
                    total = new Date(Date.parse(total) - (parseInt(o)*86400000));
                }
                else if(TryParseInt(o)) total = (total || 0) - parseInt(o);
                operator = "";
                break;
              }
              case "*": total = (total || 0) * o; operator = ""; break;
              case "/": total = (total || 0) / o; operator = ""; break;
              case "^": total = (total || 0) ^ o; operator = ""; break;
              default : if(!isOperator(o)) total = (total || 0) + parseInt(o);
            }
            if(o === "+") operator = "+";
            else if(o === "-") operator = "-";
            else if(o === "*") operator = "*";
            else if(o === "/") operator = "/";
            else if(o === "^") operator = "^";
        }
      }
      return total;
    }


  }
  xf.prototype.Formula = function(statement, params) {
    return this.evaluate(statement, params);
  }

  function TryParseInt(str,defaultValue) {
     var retValue = defaultValue;
     if(str !== null) {
         if(str.length > 0) {
             if (!isNaN(str)) {
                 retValue = parseInt(str);
             }
         }
     }
     return retValue;
  }

  return new xf();
}
