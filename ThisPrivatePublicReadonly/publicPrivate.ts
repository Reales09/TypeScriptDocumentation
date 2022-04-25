class MiObjecto {
 
   private texto: string;
   public texto2: string;

 constructor(s:string){
     this.texto = s;
 }

  datos(){
     
    console.log(this.texto);
    
 }

}

let auxMiObjeto = new MiObjecto("xxxxxx");

auxMiObjeto.datos();
auxMiObjeto.texto2="Prueba";