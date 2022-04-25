class MiObjecto2 {
 
    private texto: string;
    public readonly texto2: string;
 
  constructor(s:string){
      this.texto = s;
      this.texto2 = "Hola";
  }
 
   datos(){
      
     console.log(this.texto);
     
  }
 
 }
 
 let auxMiObjeto2 = new MiObjecto2("xxxxxx");
 
 auxMiObjeto2.datos();
 console.log(auxMiObjeto2.texto2);
 

