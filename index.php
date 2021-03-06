<!doctype html>

<head>
  <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

  <script src="jex.js"></script>
  <script>

    var j = new JEX();
    var params; // ['k','o','i'];
  //  console.log(j.Formula("=list('i')", params));
    //j.Formula("=vlist('i', lv('a','b'), lv('i','d'))"));
  </script>

  <style>
    html,body {
      height:100%;
    }
    .title {
      background-color:#81ab38;
      color:#FFFFFF;
      padding:15px;
    }
    .title-blank {
      background-color:#81ab38;
      color:#81ab38;
      font-size:50px;
    }
    .formula-list {
      height:100%;
      overflow-y:scroll;
    }
    .formula-name {
      margin-bottom:0;
      padding-bottom:0;
    }
    .formula-container {
      height:100%;
      padding:0;
    }
    .formula-list {
      list-style:none;
      border:1px solid black;
    }
    .formula-list li:hover {
      text-decoration:underline;
      cursor:pointer;
    }
    .formula-list li i {
      color:#81ab38;
    }

    table {
      border:1px solid #ddd;
    }
    table thead tr th {
      background-color:#ddd;
      padding:5px;
      padding-right:15px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <h1 class="title">JEX Formulas</h1>
      </div>
      <div class="col-lg-8 col-md-8 title-blank">

      </div>
    </div>

    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="formula-container">
            <ul class="formula-list">
              <li><i class="fa fa-gg"></i> Add</li>
              <li><i class="fa fa-gg"></i> Subtract</li>
              <li><i class="fa fa-gg"></i> Multiply</li>
              <li><i class="fa fa-gg"></i> divide</li>
              <li><i class="fa fa-gg"></i> Repeat</li>
              <li><i class="fa fa-gg"></i> ASC</li>
              <li><i class="fa fa-gg"></i> Char</li>
              <li><i class="fa fa-gg"></i> Clean</li>
              <li><i class="fa fa-gg"></i> Code</li>
              <li><i class="fa fa-gg"></i> Concat</li>
              <li><i class="fa fa-gg"></i> Concatenate</li>
              <li><i class="fa fa-gg"></i> &</li>
              <li><i class="fa fa-gg"></i> Dollar</li>
              <li><i class="fa fa-gg"></i> Exact</li>
              <li><i class="fa fa-gg"></i> Find</li>
              <li><i class="fa fa-gg"></i> Fixed</li>
              <li><i class="fa fa-gg"></i> Format</li>
              <li><i class="fa fa-gg"></i> Instr</li>
              <li><i class="fa fa-gg"></i> LCase</li>
              <li><i class="fa fa-gg"></i> Lower</li>
              <li><i class="fa fa-gg"></i> RCase</li>
              <li><i class="fa fa-gg"></i> Left</li>
              <li><i class="fa fa-gg"></i> Len</li>
              <li><i class="fa fa-gg"></i> LTrim</li>
              <li><i class="fa fa-gg"></i> Mid</li>
              <li><i class="fa fa-gg"></i> Proper</li>
              <li><i class="fa fa-gg"></i> Replace</li>
              <li><i class="fa fa-gg"></i> Rept</li>
              <li><i class="fa fa-gg"></i> Right</li>
              <li><i class="fa fa-gg"></i> RTrim</li>
              <li><i class="fa fa-gg"></i> Search</li>
              <li><i class="fa fa-gg"></i> Split</li>
              <li><i class="fa fa-gg"></i> Str</li>
              <li><i class="fa fa-gg"></i> Strcomp</li>
              <li><i class="fa fa-gg"></i> Strconv</li>
              <li><i class="fa fa-gg"></i> Strreverse</li>
              <li><i class="fa fa-gg"></i> Substitute</li>
              <li><i class="fa fa-gg"></i> T</li>
              <li><i class="fa fa-gg"></i> Text</li>
              <li><i class="fa fa-gg"></i> Trim</li>
              <li><i class="fa fa-gg"></i> UCase</li>
              <li><i class="fa fa-gg"></i> Upper</li>
              <li><i class="fa fa-gg"></i> Val</li>
              <li><i class="fa fa-gg"></i> Value</li>

              <li><i class="fa fa-gg"></i> Date</li>
              <li><i class="fa fa-gg"></i> Dateadd</li>
              <li><i class="fa fa-gg"></i> Datediff": return true;
              <li><i class="fa fa-gg"></i> Datepart</li>
              <li><i class="fa fa-gg"></i> Datepart</li>
              <li><i class="fa fa-gg"></i> Dateserial</li>
              <li><i class="fa fa-gg"></i> Datevalue</li>
              <li><i class="fa fa-gg"></i> Day</li>
              <li><i class="fa fa-gg"></i> Days360</li>
              <li><i class="fa fa-gg"></i> Format</li>
              <li><i class="fa fa-gg"></i> Hour</li>
              <li><i class="fa fa-gg"></i> Minute</li>
              <li><i class="fa fa-gg"></i> Month</li>
              <li><i class="fa fa-gg"></i> MonthName</li>
              <li><i class="fa fa-gg"></i> Networkdays</li>
              <li><i class="fa fa-gg"></i> Now</li>
              <li><i class="fa fa-gg"></i> Second</li>
              <li><i class="fa fa-gg"></i> Time</li>
              <li><i class="fa fa-gg"></i> Timeserial</li>
              <li><i class="fa fa-gg"></i> Timevalue</li>
              <li><i class="fa fa-gg"></i> Today</li>
              <li><i class="fa fa-gg"></i> Time</li>
              <li><i class="fa fa-gg"></i> Weekday</li>
              <li><i class="fa fa-gg"></i> Weekdayname</li>
              <li><i class="fa fa-gg"></i> Year</li>
              <li><i class="fa fa-gg"></i> if</li>
              <li><i class="fa fa-gg"></i> list</li>
              <li><i class="fa fa-gg"></i> Vlist</li>
              <li><i class="fa fa-gg"></i> lv</li>
            </ul>
          </div>
        </div>

        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <div class="formula-information">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <h3 class="formula-name">Formula</h3>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <p class="formula-description">Formula</p>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <h5>Syntax</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 formula-meta-description">
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <h4>Example:</h4>
                <h5 class="formula-example"></h5>
              </div>
            </div>
            <br>
            <br>
          </div>

          <div class="row">
            <div class="col-lg-12 col-md-12">
              <p>Test Formula:</p>
              <textarea class="form-control"></textarea>
              <p class="test-formula"></p>
              <br>
              <button class="executeButton btn btn-success btn-lg">Execute</button>
            </div>
          </div>

          </div>
        </div>
    </div>
  </div>


  <script>
    function formulas(f) {
      switch(f) {
        case "add" : {
            var x = { fn:"add()",
                      d:"Returns the sum of a series of numbers",
                      p:"n1,n2...",
                      dd:"Unlimited number of parameters",
                      ex:"=add(1,1)"
                    };
            return x;
        }
        case "subtract": {
            var x = { fn:"substract()",
                      d:"Returns the difference of a series of numbers",
                      p:"n1,n2...",
                      dd:"Unlimited number of parameters",
                      ex:"=subtract(1,1)"
                    };
            return x;
        }
        case "multiply": {
            var x = { fn:"multiply()",
                      d:"Returns the product of a series of numbers",
                      p:"n1,n2...",
                      dd:"Unlimited number of parameters",
                      ex:"=multiply(1,1)"
                    };
            return x;
        }
        case "divide": {
            var x = { fn:"divide()",
                      d:"Returns the results of a series of numbers",
                      p:"n1,n2...",
                      dd:"Unlimited number of parameters",
                      ex:"=divide(1,1)"
                    };
            return x;
        }
        case "repeat":{
            var x = { fn:"repeat()",
                      d:"Returns the results of a series of numbers",
                      p:{a:"The string to repeat", b:"Number of times to repeat"},
                      dd:{a:"This can be an empty string, static string, or the results from a formula", b:"This can be a constant or the results from a formula"},
                      ex:"=repeat('Hi',3)"
                    };
            return x;
        }
        case "asc": return true;
        case "char": return true;
        case "clean": return true;
        case "code": return true;
        case "concat" || "concatenate" || "&" : return true;
        case "dollar": return true;
        case "exact": return true;
        case "find": return true;
        case "fixed": return true;
        case "format": return true;
        case "instr": return true;
        case "lcase" || "lower": return true;
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
        case "ucase": return true;
        case "upper": return true;
        case "val": return true;
        case "value": return true;

        case "date": return true;
        case "dateadd": return true;
        case "datediff": return true;
        case "datepart": return true;
        case "datepart": return true;
        case "dateserial": return true;
        case "datevalue": return true;
        case "day": return true;
        case "days360": return true;
        case "format": return true;
        case "hour": return true;
        case "minute": return true;
        case "month": return true;
        case "monthname": return true;
        case "networkdays": return true;
        case "now": return true;
        case "second": return true;
        case "time": return true;
        case "timeserial": return true;
        case "timevalue": return true;
        case "today": return true;
        case "time": return true;
        case "weekday": return true;
        case "weekdayname": return true;
        case "year": return true;

        case "if": return true;
        case "list": return true;
        case "vlist": return true;
        case "lv": return true;
        default: return false;
      }
    }

    $(".formula-information").hide();

    $(".executeButton").click(function() {
      //console.log($("textarea").val());
      $(".test-formula").text("Result: " + j.Formula($("textarea").val()));
    });

    $(".formula-list li").click(function() {
      var f = formulas($(this).text().trim().toLowerCase());
      $(".formula-name").text(f.fn);
      $(".formula-description").text(f.d);
      if(f.p && typeof f.p === "object") {
        var keys = Object.keys(f.p), dkeys = Object.keys(f.dd);
        keys.sort();
        dkeys.sort();

        $(".formula-meta-description").empty().append($("#formulaStructure").text());
        for(var i=0; i<keys.length; i++) {
          var html = "<tr>";
          //html += '<td class="fn-name">' + f.p[i].fn + '</td>';
          console.log(f.p);
          html += '<td class="fn-parameter">' + f.p[keys[i]] + '</td>';
          html += '<td class="fn-description">' + f.dd[keys[i]] + '</td>';
          html += "</tr>";
          $("#fns").append(html);
        }
      }
      else {
        $(".formula-meta-description").empty().append($("#formulaOnePar").text());
        $(".fn-name").text(f.fn);
        $(".fn-parameter").text(f.p);
        $(".fn-description").text(f.dd);
        $(".formula-example").text(f.ex);
      }
      $(".formula-information").show();
      //console.log(formulas($(this).text().toLowerCase()));
    });
    //$("formula-container").
  </script>
  <script type="jex/template" id="formulaOnePar">
  <table>
    <thead>
      <tr>
        <th>Function</th>
        <th>Parameters</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="fn-name"></td>
        <td class="fn-parameter"></td>
        <td class="fn-description"></td>
      </tr>
    </tbody>
  </table>
  </script>

  <script type="jex/template" id="formulaStructure">
  <table>
    <thead>
      <tr>
        <th>Function</th>
        <th>Parameters</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody id="fns">
    </tbody>
  </table>
  </script>
</body>
</html>
