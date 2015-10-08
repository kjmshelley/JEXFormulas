JEXFormulas is a JS library that allows you to use Excel formulas in your javascript code! 

To JEXFormulas is extremely simple. All of Excel formulas are supported. However, there are some variations with certain functions. 

Basic usage: 
  var jex = new JEX();
  jex.Formula("=add(1,1)");

The above will return 2. JEXFormulas also supports formulas in the paramter section. 
jex.Formula("=add(add(1,1), add(1,1)") 
This will return 4. 
