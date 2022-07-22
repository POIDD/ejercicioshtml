/*procesa los numeros */ 
function ejecutar () {
    var a = parseInt(document.form.a.value);
    var b = parseInt(document.form.b.value);
    var c = parseInt(document.form.c.value);
    var d = parseInt(document.form.d.value);
   

    if(a==b && b==c && c==d) {
      document.write(' <br> todos son iguales');	
    }
    if(a==b && b==c && c>d) { 
      document.write(' <br> el primero, segundo y tercero son mayores:'+c);
      document.write(' <br> el cuarto es el menor:'+d);
    }
    if(a==b && b==c && c<d) { 
      document.write(' <br> el cuarto es el mayor:'+d); 
      document.write(' <br> el primero, segundo y tercero son menores:'+c);
      document.write(' <br> el primero y segundo son iguales mayores:'+a);
      document.write(' <br> el tercero y cuarto son iguales menores:'+c);
    }
    if(a==b && b<c && c==d){ 
      document.write(' <br> el tercero y cuarto son mayores iguales:'+c);
      document.write(' <br> el primero y segundo son menores iguales:'+a); 
    }
    if(a>b && b==c && c==d){
      document.write(' <br> el primero es el mayor:'+a);
      document.write(' <br>  el segundo, tercera y cuarta son menores iguales:'+b);
    }
    if(a<b && b==c && c==d){ 
        document.write('el segundo, tercero y cuarto son mayores:'+b);
        document.write(' <br> el primero es el menor:'+a);
    }
    if(a>b && b>c && c==d){ 
        document.write(' <br> el primero es el mayor:'+a); 
        document.write(' <br> el segundo es:'+b);
        document.write(' <br> tercero y cuarto son iguales menores:'+c);
    }
    if(a==b && b>c && c>d){
        document.write(' <br> el primero y segundo son mayores iguales:'+a); 
        document.write(' <br> el intermedio es:'+c);
        document.write(' <br> el menor es:'+d); 
    }
    if(a==b && b<c && c<d){
        document.write(' <br> el cuarto es el mayor:'+d); 
        document.write(' <br> el segundo es:'+c);
        document.write(' <br> el primero y segundo son menores iguales:'+a); 
    }
    if(a<b && b<c && c==d){
        document.write(' <br> el tercero y cuarto son mayores:'+c);
        document.write(' <br> el segundo es:'+b);
        document.write(' <br> el menor es :'+a); 
    }
    if(a>d && d>c && c==b){
        document.write(' <br> el primero es el mayor:'+a); 
        document.write(' <br> el intermedio  es :'+d); 
        document.write(' <br> el segundo y tercero son iguales menores:'+b);
    }
    if(a<b && b==c && c<d){
        document.write(' <br> el cuarto es el mayor:'+d);
       document.write(' <br> el segundo y tercero son iguales menores:'+b);
        document.write(' <br> el menor es:'+a);
    }
    if(a==d && d>c && c>b){
        document.write(' <br> el primero y cuarto son iguales mayores:'+a);
        document.write(' <br> el intermedio es'+c);
        document.write(' <br> el menor es:'+b);
    }
    if(c>b && b>d && d==a) {
        document.write(' <br> el tercero es mayor'+c);
        document.write(' <br> el intermedio es:'+b);
        document.write(' <br> el primero y el cuarto son menores iguales:'+d); 
    }
    if(a<c && c<b && b==d) {
        document.write(' <br> el segundo y cuarto son mayores iguales:'+b);
        document.write(' <br> el intermedio es:'+c);
        document.write(' <br> el menor es:'+a); 
    }
    if(a==c && c>b && b==d){
        document.write(' <br> el primero y el tercero son mayores iguales:'+a);
        document.write(' <br> el segundo y el cuarto son menores iguales:'+b);
    }
    if(a==c && c<b && b==d){
        document.write(' <br> el segundo y cuarto son mayores iguales:'+b);
        document.write(' <br> el primero y el tercero son menores iguales:'+a); 
    }
    if(a==d && d>b && b==c){
        document.write(' <br> el primero y cuarto son mayores:'+a); 
        document.write(' <br> el segundo y tercero son menores iguales:'+b);
    }
    if(a==d && d<b && b==c){
        document.write(' <br> el segundo y tercero son mayores iguales:'+b);
        document.write(' <br> el primero y cuarto son menores iguales:'+a); 
    }
    if(a==d && d<c && c<b){
        document.write(' <br> el mayor es:'+b);
        document.write(' <br> el intermedio es:'+c);
            document.write(' <br> el primero y el cuarto son menores iguales:'+a); 
    }
    if (a==b && b<d && d<c){
        document.write(' <br> el tercero es el mayor :'+c);
        document.write(' <br> el intermedio es:'+d); 
        document.write(' <br> el primero y segundo son menores iguales:'+a); 
    }
    if(a==b&& b>d&& d>c){
        document.write(' <br> el primero y el segundo son mayores:'+a); 
        document.write(' <br> el intermedio es:'+d); 
        document.write(' <br> el menor es :'+c);
    }
    if(a==b&& b==d&& d<c){
        document.write(' <br> el mayor es :'+c);
        document.write(' <br> el primero, segundo y cuarto son iguales menores:'+a); 
    }
    if(a==b&& b==d&& d>c){
        document.write(' <br> el primero, segundo y cuarto son mayores iguales:'+a); 
        document.write(' <br> el menor es:'+c);
    }
    if(a==c&& c==d&& d<b){
        document.write(' <br> el mayor es:'+b);
        document.write(' <br> el primero, tercero y cuarto son iguales menores:'+a); 
    }
    if(a==c&& c==d&& d>b){
        document.write(' <br> el primero, tercero y cuarto son mayores:'+a); 
        document.write(' <br> el menor es:'+b);
    }
    if(c>a&& a>b&& b==d){
        document.write(' <br> el tercero es mayor:'+c);
        document.write(' <br> el intermedio es :'+a); 
        document.write(' <br> el segundo y tercero son iguales:'+b);
    }
    if(b==d&& d>a&& a>c){
        document.write(' <br> el segundo y cuarto son mayores iguales:'+b);
        document.write(' <br> el intermedio es:'+a); 
        document.write(' <br> el menor es:'+c);
    }
    if(b>a&& a==d&& d>c){
        document.write(' <br> el mayor :'+b);
        document.write(' <br> el primero y el cuarto son iguales menores:'+a); 
        document.write(' <br> el menor es:'+c);
    }
    if(a>c&& c>b&& b==d){
        document.write(' <br> el mayor es:'+a); 
        document.write(' <br> el intermedio es:'+c);
        document.write(' <br> el segundo y cuarto son menores iguales:'+b);
    }
    if(a==d&& d>b&& b>c){
        document.write(' <br> el primero y cuarto son mayores:'+a); 
        document.write(' <br> el intermedio es:'+b);
        document.write(' <br> el menor es'+c);	
    }
    if(b>a&& a==c&& c>d){
        document.write(' <br> el mayor :'+b);
        document.write(' <br> el primero y el tercero son iguales menores:'+a); 
        document.write(' <br> el menor es:'+d); 
    }
    if(a==c&& c>d&& d>b){
        document.write(' <br> el primero y tercero son mayores:'+a); 
        document.write(' <br> el intermedio es:'+d); 
        document.write(' <br> el menor es:'+b);	
    }
    if(a==c&& c>b&& b>d){
        document.write(' <br> el primero y tercero son mayores:'+a); 
        document.write(' <br> el intermedio es:'+b);
        document.write(' <br> el menor es:'+d);	
    }
    if(d==c&& c>a&& a>b){
        document.write(' <br> el tercero y cuarto son mayores'+c);
        document.write(' <br> el intermedio es:'+a); 
        document.write(' <br> el menor es:'+b);
    }
    if(d>b&& b>a&& a==c){
        document.write(' <br> el mayor es:'+d); 
        document.write(' <br> el intermedio es:'+b);
        document.write(' <br> el primero y tercero son menores:'+a); 
    }
    if(b>d&& d>a&& a==c){
        document.write(' <br> el mayor es:'+b);
        document.write(' <br> el intermedio es:'+d); 
        document.write(' <br> el primero y tercero son menores:'+a); 
    }
    if(c>a&& a==b&& b>d){
        document.write(' <br> el mayor es:'+c);
        document.write(' <br> el primero y segundo son menores iguales:'+a); 
        document.write(' <br> el menor es:'+d); 
    }
    if(d>a&& a==b&& b>c){
        document.write(' <br> el mayor es:'+d); 
        document.write(' <br> el primero y segundo son menores iguales:'+a); 
        document.write(' <br> el menor es:'+c);
    }
    if(d>a&& a==c&& c>b){
        document.write(' <br> el mayor es:'+d); 
        document.write(' <br> el primero y tercero son menores iguales:'+a); 
        document.write(' <br> el menor es:'+b);
    }
    if(a>b&& b>c&& c>d){
        document.write(' <br> el primero es el mayor :'+a); 
        document.write(' <br> el segundo es:'+b);
        document.write(' <br> el tercero es :'+c);
        document.write(' <br> el menor es:'+d);  
    }
    if(a<b&& b<c&& c<d){
        document.write(' <br> el primero es el mayor :'+d); 
        document.write(' <br> el segundo es:'+c);
        document.write(' <br> el tercero es :'+b);
        document.write(' <br> el menor es:'+a);  
    }
    if(a>b&& b>d&& d>c){
        document.write(' <br> el mayor es:'+a); 
        document.write(' <br> el segundo es:'+b);
        document.write(' <br> el tercero es:'+d); 
        document.write(' <br> el menor es:'+c);
        

    }
    if(a>c&& c>d&& d>b){
        document.write(' <br> el mayor es:'+a);
    
        document.write(' <br> el segundo es'+c);
        document.write(' <br> el tercero es:'+d); 
        document.write(' <br> el menor es:'+b);
    }
    if(b>c&& c>d&& d>a){
        document.write(' <br> el mayor es:'+b);
        document.write(' <br> el segundo es'+c);
        document.write(' <br> el tercero es:'+d);
        document.write(' <br> el menor es:'+a);
    }
    if(a>d&& d>c&& c>b){
        document.write(' <br> el mayor es:'+a);
        document.write(' <br> el segundo es:'+d);
        document.write(' <br> el tercero es'+c);
        document.write(' <br> el menor es:'+b);
    }
    if(c>a&& a>d&& d>b){
        document.write(' <br> el mayor es'+c);
        document.write(' <br> el segundo es:'+a);
        document.write(' <br> el tercero es:'+d);
        document.write(' <br> el menor es:'+b);
    }
    if(c>d&& d>a&& a>b){
        document.write(' <br> el mayor es'+c);
        document.write(' <br> el segundo es:'+d);
        document.write(' <br> el tercero es:'+a);
        document.write(' <br> el menor es:'+b);
    }
    if(c>a&& a>b&& b>d){
        document.write(' <br> el mayor es'+c);
        document.write(' <br> el segundo es:'+a);
        document.write(' <br> el tercero es:'+b);
        document.write(' <br> el menor es:'+d);
    }
    if(c>b&& b>d&& d>a){
        document.write(' <br> el mayor es'+c);
        document.write(' <br> el segundo es:'+b);
        document.write(' <br> el tercero es:'+d);
        document.write(' <br> el menor es:'+a);
    }
    if(c>d&& d>b&& b>a){
        document.write(' <br> el mayor es'+c);
        document.write(' <br> el segundo es:'+d);
        document.write(' <br> el tercero es:'+b);
        document.write(' <br> el menor es:'+a);
    }
    if(d>a&& a>b&& b>c){
        document.write(' <br> el mayor es:'+d);
        document.write(' <br> el segundo es:'+a);
        document.write(' <br> el tercero es:'+b);
        document.write(' <br> el menor es'+c);
    }
    if(a>c&& c>b&& b>d){
        document.write(' <br> el mayor es:'+a);
        document.write(' <br> el segundo es'+c);
        document.write(' <br> el tercero es:'+b);
        document.write(' <br> el menor es:'+d);
    }
    if(d>a&& a>c&& c>b){
        document.write(' <br> el mayor es:'+d);
        document.write(' <br> el segundo es:'+a);
        document.write(' <br> el tercero es'+c);
        document.write(' <br> el menor es:'+b);
    }
    if(b>d&& d>a&& a>c){
        document.write(' <br> el mayor es:'+b);
        document.write(' <br> el segundo es:'+d);
        document.write(' <br> el tercero es:'+a);
        document.write(' <br> el menor es'+c);
    }
    if(d>b&& b>c&& c>a){
        document.write(' <br> el mayor es:'+d);
        document.write(' <br> el segundo es:'+b);
        document.write(' <br> el tercero es'+c);
        document.write(' <br> el menor es:'+a);
    }
    if(b>a&& a>d&& d>c){
        document.write(' <br> el mayor es:'+b);
        document.write(' <br> el segundo es:'+a);
        document.write(' <br> el tercero es:'+d);
        document.write(' <br> el menor es'+c);
    }
} 
