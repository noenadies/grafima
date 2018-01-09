
var valorxmin=-12;
var valorxmax=12;

//  colocar  esta  function  cargaimaeditext();en la  function  game  preload  necesaria 
function cargaimaeditext(){


    game.load.spritesheet('gamepad', 
            'gamepad_spritesheet.png', 100, 100);

    game.load.spritesheet('gamepad2', 
            'gamepad_spritesheet.png', 100, 100);


  game.load.image('btf1', 'btf1.png');
  game.load.image('btf2', 'btf2.png');
  game.load.image('btf3', 'btf3.png');
  game.load.image('btcero', 'btcero.png');
  game.load.image('btuno', 'bt1.png');




   game.load.image('btmenos', 'btmenos.png');


     game.load.image('btmas', 'btmas.png');



      game.load.image('btdos', 'btdos.png');

      game.load.image('bt3', 'bt3.png');
       game.load.image('bt4', 'bt4.png');

        game.load.image('bt5', 'bt5.png');

        game.load.image('bt6', 'bt6.png');

        game.load.image('bt7', 'bt7.png');

        game.load.image('bt8', 'bt8.png');

        game.load.image('bt9', 'bt9.png');

         game.load.image('btx', 'btx.png');

         game.load.image('btmulti', 'btmulti.png');

         game.load.image('btdiv', 'btdiv.png');
         game.load.image('btpote', 'btpote.png');

         game.load.image('btparenizq', 'btparenizq.png');

          game.load.image('btparender', 'btparender.png');

          game.load.image('btac', 'btac.png');

          game.load.image('btflechad', 'btflechad.png');
 game.load.image('btflechai', 'btflechai.png');










  game.load.image('btdel', 'btdel.png');
  game.load.image('bte', 'bte.png');
  game.load.image('btigual', 'btigual.png');
  game.load.image('btxy', 'btxy.png');



  game.load.image('btxmin', 'btxmin.png');

  game.load.image('btxmax', 'btxmax.png');




  game.load.image('btsin', 'btsin.png');

 game.load.spritesheet('btgrafi', 'btgrafi.png',60, 60, 2);



  //game.load.image('sprite', 'btcero.png');

   game.load.image('btpunto', 'btpunto.png');
  game.load.spritesheet('cualquiera', 'cualquiera.png', 60, 60)





 game.load.image('btcos', 'btcos.png');
  game.load.image('bttan', 'bttan.png');

   game.load.image('btcot', 'btcot.png');

   game.load.image('btsec', 'btsec.png');

   game.load.image('btcsc', 'btcsc.png');

   game.load.image('btsinh', 'btsinh.png');

   game.load.image('btcosh', 'btcosh.png');
   game.load.image('bttanh', 'bttanh.png');

   game.load.image('btcoth', 'btcoth.png');

    game.load.image('btcsch', 'btcsch.png');

    game.load.image('btsech', 'btsech.png');

    game.load.image('btasin', 'btasin.png');

     game.load.image('btacos', 'btacos.png');

     game.load.image('btatan', 'btatan.png');

      game.load.image('btacot', 'btacot.png');

       game.load.image('btasec', 'btasec.png');

        game.load.image('btacsc', 'btacsc.png');




   game.load.image('btasinh', 'btasinh.png');

   game.load.image('btacosh', 'btacosh.png');
   game.load.image('btatanh', 'btatanh.png');

   game.load.image('btacoth', 'btacoth.png');

    game.load.image('btacsch', 'btacsch.png');

    game.load.image('btasech', 'btasech.png');
 game.load.image('btderi', 'btderi.png');



}



function  Editext(game,vw,vh,styletext){



  if(vw>600){
    vw=vw*0.46;
  }

this.sprite=game.add.sprite(vw/2, vh/2- vh/2, 'cualquiera');


this.sprite.animations.add('bt', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

this.booltexto_f3=false;

this.booltexto_minmax=false;


// todo le  de  text funcion matematica  uno
this.booltexto_f1=false;
this.valortexto_f1="";
this.contarborrarchar_f1=1;
this.charantes_f1=[];
 this.charantes_f1[0]="";
 this.textoactual_f1="";
 this.charantes_f1[-1]="";
 this.charantes_f1[-2]="";


  
 //var  style={ font: "bold "+String(vw*0.04)+"px Arial", fill: "#B21437", boundsAlignH: "center", boundsAlignV: "middle" };
 
        this.tamanotexto_f1=vw*0.01;
   
        this.style_f1 = { font: "bold "+String(vw*0.04)+"px Arial", fill: "#D500FF", boundsAlignH: "center", boundsAlignV: "middle" };
 
  
     

       this.text_f1= game.add.text(vw/2- vw/2*0.5, vh/2-vh/2*0.7, "", this.style_f1);
   
    
       this.text_f1.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);




//  inicia   texto  de  la  funcion matematica  dos



this.booltexto_f2=false;
this.valortexto_f2="";
this.contarborrarchar_f2=1;
this.charantes_f2=[];
 this.charantes_f2[0]="";
 this.textoactual_f2="";
 this.charantes_f2[-1]="";
 this.charantes_f2[-2]="";


  
 //var  style={ font: "bold "+String(vw*0.04)+"px Arial", fill: "#B21437", boundsAlignH: "center", boundsAlignV: "middle" };
 
        this.tamanotexto_f2=vw*0.01;
   
        this.style_f2 = { font: "bold "+String(vw*0.04)+"px Arial", fill: "#DCFF00", boundsAlignH: "center", boundsAlignV: "middle" };
 
  
     

       this.text_f2= game.add.text(this.text_f1.x, this.text_f1.y+33, "", this.style_f2);
   
    
       this.text_f2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);


var styles = { font: "bold "+String(vw*0.04)+"px Arial", fill: "#15FFCB", boundsAlignH: "center", boundsAlignV: "middle" };
 
         
 

//  boton  texto  fucnion matematica  f3 

 this.Textsalx = game.add.text(this.text_f2.x+vw*0.4, this.text_f1.y, 'x=', styles);
 this.Textsaly = game.add.text(this.text_f2.x+vw*0.4, this.text_f2.y+33,'y=', styles);
this.Textsaly.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
this.Textsalx.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);





//  inicia   texto  de  la  funcion matematica  f3



this.booltexto_f3=false;
this.valortexto_f3="";
this.contarborrarchar_f3=1;
this.charantes_f3=[];
 this.charantes_f3[0]="";
 this.textoactual_f3="";
 this.charantes_f3[-1]="";
 this.charantes_f3[-2]="";


  
 //var  style={ font: "bold "+String(vw*0.04)+"px Arial", fill: "#B21437", boundsAlignH: "center", boundsAlignV: "middle" };
 
        this.tamanotexto_f3=vw*0.01;
   
        this.style_f3 = { font: "bold "+String(vw*0.04)+"px Arial", fill: "#B8320C", boundsAlignH: "center", boundsAlignV: "middle" };
 
  
     

       this.text_f3= game.add.text(this.text_f2.x, this.text_f2.y+33, "", this.style_f3);
   
    
       this.text_f3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);







this.booltexto_xmin=false;
this.valortexto_xmin="";
this.contarborrarchar_xmin=1;
this.charantes_xmin=[];
 this.charantes_xmin[0]="";
 this.textoactual_xmin="";
 this.charantes_xmin[-1]="";
 this.charantes_xmin[-2]="";


        this.style_xmin = { font: "bold "+String(vw*0.04)+"px Arial", fill: "#D500FF", boundsAlignH: "center", boundsAlignV: "middle" };
 
  
     

       this.text_xmin= game.add.text(this.text_f3.x, this.text_f3.y+33, "", this.style_xmin);
   
    
       this.text_xmin.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);


        this.style_xmax = { font: "bold "+String(vw*0.04)+"px Arial", fill: "#D500FF", boundsAlignH: "center", boundsAlignV: "middle" };
 
  
     
this.booltexto_xmax=false;
this.valortexto_xmax="";
this.contarborrarchar_xmax=1;
this.charantes_xmax=[];
 this.charantes_xmax[0]="";
 this.textoactual_xmax="";
 this.charantes_xmax[-1]="";
 this.charantes_xmax[-2]="";
       this.text_xmax= game.add.text(this.text_xmin.x, this.text_xmin.y+33, "", this.style_xmax);
   
    
       this.text_xmax.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);




















//  inicia  botonera editext


this.valortexto="";
this.contarborrarchar=1;
this.charantes=[];
 this.charantes[0]="";
 this.textoactual="";
 this.charantes[-1]="";
 this.charantes[-2]="";



btf1 = game.add.sprite(vw/2, vh/2- vh/2, 'btf1');
btf1.scale.set(vw*0.0012);
btf1.inputEnabled = true;
btf1.input.useHandCursor = true;


btf1.events.onInputOver.add(fbtf1_onOver, this);
btf1.events.onInputOut.add(fbtf1_onOut, this);
btf1.events.onInputDown.add(fbtf1_onDown, this);


function fbtf1_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtf1_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtf1_onDown(){

this.visiblebasico(true);
this.booltexto_f2=false;
this.booltexto_f3=false;
this.booltexto_f1=true;

this.booltexto_xmin=false;
this.booltexto_xmax=false;


if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}














}







//  boton  texto  fucnion matwmatica  f2 





btf2 = game.add.sprite(vw/2, vh/2- vh/2*0.5, 'btf2');
btf2.scale.set(vw*0.0012);
btf2.inputEnabled = true;
btf2.input.useHandCursor = true;


btf2.events.onInputOver.add(fbtf2_onOver, this);
btf2.events.onInputOut.add(fbtf2_onOut, this);
btf2.events.onInputDown.add(fbtf2_onDown, this);


function fbtf2_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtf2_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtf2_onDown(){
//console.log(booltexto_f3);
 limpiarxy();
   this.visiblebasico(true);
   this.booltexto_f2=true;
  this.booltexto_f3=false;
   this.booltexto_f1=false;
   this.booltexto_xmin=false;
this.booltexto_xmax=false;

console.log(this.booltexto_f3);

if(this.valortexto_f2=='undefined'){
this.valortexto_f2="";
  
}



if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}










}


   





btf3 = game.add.sprite(vw/2, vh/2- vh/2*0.5, 'btf3');
btf3.scale.set(vw*0.0012);
btf3.inputEnabled = true;
btf3.input.useHandCursor = true;


btf3.events.onInputOver.add(fbtf3_onOver, this);
btf3.events.onInputOut.add(fbtf3_onOut, this);
btf3.events.onInputDown.add(fbtf3_onDown, this);


function fbtf3_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtf3_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtf3_onDown(){
this.visiblebasico(true);
this.booltexto_f2=false;
this.booltexto_f3=true;
this.booltexto_f1=false;

this.booltexto_xmin=false;
this.booltexto_xmax=false;


if(this.valortexto_f3=='undefined'){
this.valortexto_f3="";
  
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}












//  crea el boton de "0"


btcero = game.add.sprite(vw/2, vh/2- vh/2, 'btcero');
btcero.scale.set(vw*0.0012);
btcero.inputEnabled = true;
btcero.input.useHandCursor = true;


btcero.events.onInputOver.add(fbtcero_onOver, this);
btcero.events.onInputOut.add(fbtcero_onOut, this);
btcero.events.onInputDown.add(fbtcero_onDown, this);


function fbtcero_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtcero_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtcero_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"0";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"0";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"0";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}



if(this.booltexto_xmin===true){
  this.charantes_xmin[this.contarborrarchar_xmin]=this.valortexto_xmin;
   this.valortexto_xmin=this.charantes_xmin[this.contarborrarchar_xmin]+"0";


    this.mostrartexto(this.text_xmin,this.valortexto_xmin);
 

this.contarborrarchar_xmin=this.contarborrarchar_xmin+1;
}


if(this.booltexto_xmax===true){

  this.charantes_xmax[this.contarborrarchar_xmax]=this.valortexto_xmax;
   this.valortexto_xmax=this.charantes_xmax[this.contarborrarchar_xmax]+"0";


    this.mostrartexto(this.text_xmax,this.valortexto_xmax);
 

this.contarborrarchar_xmax=this.contarborrarchar_xmax+1;
}










}




//  inicia  boton  punto decimal


btpunto = game.add.sprite(vw/2, vh/2- vh/2, 'btpunto');
btpunto.scale.set(vw*0.0012);
btpunto.inputEnabled = true;
btpunto.input.useHandCursor = true;


btpunto.events.onInputOver.add(fbtpunto_onOver, this);
btpunto.events.onInputOut.add(fbtpunto_onOut, this);
btpunto.events.onInputDown.add(fbtpunto_onDown, this);


function fbtpunto_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtpunto_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtpunto_onDown(){




if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+".";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+".";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+".";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}



if(this.booltexto_xmin===true){
  this.charantes_xmin[this.contarborrarchar_xmin]=this.valortexto_xmin;
   this.valortexto_xmin=this.charantes_xmin[this.contarborrarchar_xmin]+".";


    this.mostrartexto(this.text_xmin,this.valortexto_xmin);
 

this.contarborrarchar_xmin=this.contarborrarchar_xmin+1;
}


if(this.booltexto_xmax===true){

  this.charantes_xmax[this.contarborrarchar_xmax]=this.valortexto_xmax;
   this.valortexto_xmax=this.charantes_xmax[this.contarborrarchar_xmax]+".";


    this.mostrartexto(this.text_xmax,this.valortexto_xmax);
 

this.contarborrarchar_xmax=this.contarborrarchar_xmax+1;
}











}









// inica  boton uno  



btuno = game.add.sprite(vw/2, vh/2- vh/2, 'btuno');
btuno.scale.set(vw*0.0012);
btuno.inputEnabled = true;
btuno.input.useHandCursor = true;

btuno.events.onInputOver.add(fbtuno_onOver, this);
btuno.events.onInputOut.add(fbtuno_onOut, this);
btuno.events.onInputDown.add(fbtuno_onDown, this);



function fbtuno_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtuno_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtuno_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"1";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"1";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"1";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}



if(this.booltexto_xmin===true){
  this.charantes_xmin[this.contarborrarchar_xmin]=this.valortexto_xmin;
   this.valortexto_xmin=this.charantes_xmin[this.contarborrarchar_xmin]+"1";


    this.mostrartexto(this.text_xmin,this.valortexto_xmin);
 

this.contarborrarchar_xmin=this.contarborrarchar_xmin+1;
}


if(this.booltexto_xmax===true){

  this.charantes_xmax[this.contarborrarchar_xmax]=this.valortexto_xmax;
   this.valortexto_xmax=this.charantes_xmax[this.contarborrarchar_xmax]+"1";


    this.mostrartexto(this.text_xmax,this.valortexto_xmax);
 

this.contarborrarchar_xmax=this.contarborrarchar_xmax+1;
}







}




// 


// inica  boton e  



bte = game.add.sprite(vw/2, vh/2- vh/2, 'bte');
bte.scale.set(vw*0.0012);
bte.inputEnabled = true;
bte.input.useHandCursor = true;

bte.events.onInputOver.add(fbte_onOver, this);
bte.events.onInputOut.add(fbte_onOut, this);
bte.events.onInputDown.add(fbte_onDown, this);



function fbte_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbte_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbte_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"e";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"e";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"e";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}








}






// inica  boton menos  



btmenos = game.add.sprite(vw/2, vh/2- vh/2, 'btmenos');
btmenos.scale.set(vw*0.0012);
btmenos.inputEnabled = true;
btmenos.input.useHandCursor = true;

btmenos.events.onInputOver.add(fbtmenos_onOver, this);
btmenos.events.onInputOut.add(fbtmenos_onOut, this);
btmenos.events.onInputDown.add(fbtmenos_onDown, this);



function fbtmenos_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtmenos_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtmenos_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"-";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"-";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"-";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}




if(this.booltexto_xmin===true){
  this.charantes_xmin[this.contarborrarchar_xmin]=this.valortexto_xmin;
   this.valortexto_xmin=this.charantes_xmin[this.contarborrarchar_xmin]+"9";


    this.mostrartexto(this.text_xmin,this.valortexto_xmin);
 

this.contarborrarchar_xmin=this.contarborrarchar_xmin+1;
}


if(this.booltexto_xmax===true){

  this.charantes_xmax[this.contarborrarchar_xmax]=this.valortexto_xmax;
   this.valortexto_xmax=this.charantes_xmax[this.contarborrarchar_xmax]+"9";


    this.mostrartexto(this.text_xmax,this.valortexto_xmax);
 

this.contarborrarchar_xmax=this.contarborrarchar_xmax+1;
}








}






///




// inica  boton mas 



btmas = game.add.sprite(vw/2, vh/2- vh/2, 'btmas');
btmas.scale.set(vw*0.0012);
btmas.inputEnabled = true;
btmas.input.useHandCursor = true;

btmas.events.onInputOver.add(fbtmas_onOver, this);
btmas.events.onInputOut.add(fbtmas_onOut, this);
btmas.events.onInputDown.add(fbtmas_onDown, this);



function fbtmas_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtmas_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtmas_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"+";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"+";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"+";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}








}





// inica  boton dos



bt2 = game.add.sprite(vw/2, vh/2- vh/2, 'btdos');
bt2.scale.set(vw*0.0012);
bt2.inputEnabled = true;
bt2.input.useHandCursor = true;

bt2.events.onInputOver.add(fbt2_onOver, this);
bt2.events.onInputOut.add(fbt2_onOut, this);
bt2.events.onInputDown.add(fbt2_onDown, this);



function fbt2_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbt2_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbt2_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"2";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"2";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"2";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}



if(this.booltexto_xmin===true){
  this.charantes_xmin[this.contarborrarchar_xmin]=this.valortexto_xmin;
   this.valortexto_xmin=this.charantes_xmin[this.contarborrarchar_xmin]+"2";


    this.mostrartexto(this.text_xmin,this.valortexto_xmin);
 

this.contarborrarchar_xmin=this.contarborrarchar_xmin+1;
}


if(this.booltexto_xmax===true){

  this.charantes_xmax[this.contarborrarchar_xmax]=this.valortexto_xmax;
   this.valortexto_xmax=this.charantes_xmax[this.contarborrarchar_xmax]+"2";


    this.mostrartexto(this.text_xmax,this.valortexto_xmax);
 

this.contarborrarchar_xmax=this.contarborrarchar_xmax+1;
}








}







// inica  boton 3



bt3 = game.add.sprite(vw/2, vh/2- vh/2, 'bt3');
bt3.scale.set(vw*0.0012);
bt3.inputEnabled = true;
bt3.input.useHandCursor = true;

bt3.events.onInputOver.add(fbt3_onOver, this);
bt3.events.onInputOut.add(fbt3_onOut, this);
bt3.events.onInputDown.add(fbt3_onDown, this);



function fbt3_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbt3_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbt3_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"3";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"3";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"3";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}




if(this.booltexto_xmin===true){
  this.charantes_xmin[this.contarborrarchar_xmin]=this.valortexto_xmin;
   this.valortexto_xmin=this.charantes_xmin[this.contarborrarchar_xmin]+"3";


    this.mostrartexto(this.text_xmin,this.valortexto_xmin);
 

this.contarborrarchar_xmin=this.contarborrarchar_xmin+1;
}


if(this.booltexto_xmax===true){

  this.charantes_xmax[this.contarborrarchar_xmax]=this.valortexto_xmax;
   this.valortexto_xmax=this.charantes_xmax[this.contarborrarchar_xmax]+"3";


    this.mostrartexto(this.text_xmax,this.valortexto_xmax);
 

this.contarborrarchar_xmax=this.contarborrarchar_xmax+1;
}







}







// inica  boton 4



bt4 = game.add.sprite(vw/2, vh/2- vh/2, 'bt4');
bt4.scale.set(vw*0.0012);
bt4.inputEnabled = true;
bt4.input.useHandCursor = true;

bt4.events.onInputOver.add(fbt4_onOver, this);
bt4.events.onInputOut.add(fbt4_onOut, this);
bt4.events.onInputDown.add(fbt4_onDown, this);



function fbt4_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbt4_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbt4_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"4";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"4";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"4";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}




if(this.booltexto_xmin===true){
  this.charantes_xmin[this.contarborrarchar_xmin]=this.valortexto_xmin;
   this.valortexto_xmin=this.charantes_xmin[this.contarborrarchar_xmin]+"4";


    this.mostrartexto(this.text_xmin,this.valortexto_xmin);
 

this.contarborrarchar_xmin=this.contarborrarchar_xmin+1;
}


if(this.booltexto_xmax===true){

  this.charantes_xmax[this.contarborrarchar_xmax]=this.valortexto_xmax;
   this.valortexto_xmax=this.charantes_xmax[this.contarborrarchar_xmax]+"4";


    this.mostrartexto(this.text_xmax,this.valortexto_xmax);
 

this.contarborrarchar_xmax=this.contarborrarchar_xmax+1;
}







}




// inica  boton 5



bt5 = game.add.sprite(vw/2, vh/2- vh/2, 'bt5');
bt5.scale.set(vw*0.0012);
bt5.inputEnabled = true;
bt5.input.useHandCursor = true;

bt5.events.onInputOver.add(fbt5_onOver, this);
bt5.events.onInputOut.add(fbt5_onOut, this);
bt5.events.onInputDown.add(fbt5_onDown, this);



function fbt5_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbt5_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbt5_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"5";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"5";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"5";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}




if(this.booltexto_xmin===true){
  this.charantes_xmin[this.contarborrarchar_xmin]=this.valortexto_xmin;
   this.valortexto_xmin=this.charantes_xmin[this.contarborrarchar_xmin]+"5";


    this.mostrartexto(this.text_xmin,this.valortexto_xmin);
 

this.contarborrarchar_xmin=this.contarborrarchar_xmin+1;
}


if(this.booltexto_xmax===true){

  this.charantes_xmax[this.contarborrarchar_xmax]=this.valortexto_xmax;
   this.valortexto_xmax=this.charantes_xmax[this.contarborrarchar_xmax]+"5";


    this.mostrartexto(this.text_xmax,this.valortexto_xmax);
 

this.contarborrarchar_xmax=this.contarborrarchar_xmax+1;
}







}



// inica  boton 6



bt6 = game.add.sprite(vw/2, vh/2- vh/2, 'bt6');
bt6.scale.set(vw*0.0012);
bt6.inputEnabled = true;
bt6.input.useHandCursor = true;

bt6.events.onInputOver.add(fbt6_onOver, this);
bt6.events.onInputOut.add(fbt6_onOut, this);
bt6.events.onInputDown.add(fbt6_onDown, this);



function fbt6_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbt6_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbt6_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"6";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"6";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"6";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}



if(this.booltexto_xmin===true){
  this.charantes_xmin[this.contarborrarchar_xmin]=this.valortexto_xmin;
   this.valortexto_xmin=this.charantes_xmin[this.contarborrarchar_xmin]+"6";


    this.mostrartexto(this.text_xmin,this.valortexto_xmin);
 

this.contarborrarchar_xmin=this.contarborrarchar_xmin+1;
}


if(this.booltexto_xmax===true){

  this.charantes_xmax[this.contarborrarchar_xmax]=this.valortexto_xmax;
   this.valortexto_xmax=this.charantes_xmax[this.contarborrarchar_xmax]+"6";


    this.mostrartexto(this.text_xmax,this.valortexto_xmax);
 

this.contarborrarchar_xmax=this.contarborrarchar_xmax+1;
}








}


// inica  boton 7



bt7 = game.add.sprite(vw/2, vh/2- vh/2, 'bt7');
bt7.scale.set(vw*0.0012);
bt7.inputEnabled = true;
bt7.input.useHandCursor = true;

bt7.events.onInputOver.add(fbt7_onOver, this);
bt7.events.onInputOut.add(fbt7_onOut, this);
bt7.events.onInputDown.add(fbt7_onDown, this);



function fbt7_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbt7_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbt7_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"7";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"7";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"7";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}



if(this.booltexto_xmin===true){
  this.charantes_xmin[this.contarborrarchar_xmin]=this.valortexto_xmin;
   this.valortexto_xmin=this.charantes_xmin[this.contarborrarchar_xmin]+"7";


    this.mostrartexto(this.text_xmin,this.valortexto_xmin);
 

this.contarborrarchar_xmin=this.contarborrarchar_xmin+1;
}


if(this.booltexto_xmax===true){

  this.charantes_xmax[this.contarborrarchar_xmax]=this.valortexto_xmax;
   this.valortexto_xmax=this.charantes_xmax[this.contarborrarchar_xmax]+"7";


    this.mostrartexto(this.text_xmax,this.valortexto_xmax);
 

this.contarborrarchar_xmax=this.contarborrarchar_xmax+1;
}








}






// inica  boton 8



bt8 = game.add.sprite(vw/2, vh/2- vh/2, 'bt8');
bt8.scale.set(vw*0.0012);
bt8.inputEnabled = true;
bt8.input.useHandCursor = true;

bt8.events.onInputOver.add(fbt8_onOver, this);
bt8.events.onInputOut.add(fbt8_onOut, this);
bt8.events.onInputDown.add(fbt8_onDown, this);



function fbt8_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbt8_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbt8_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"8";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"8";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"8";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}




if(this.booltexto_xmin===true){
  this.charantes_xmin[this.contarborrarchar_xmin]=this.valortexto_xmin;
   this.valortexto_xmin=this.charantes_xmin[this.contarborrarchar_xmin]+"8";


    this.mostrartexto(this.text_xmin,this.valortexto_xmin);
 

this.contarborrarchar_xmin=this.contarborrarchar_xmin+1;
}


if(this.booltexto_xmax===true){

  this.charantes_xmax[this.contarborrarchar_xmax]=this.valortexto_xmax;
   this.valortexto_xmax=this.charantes_xmax[this.contarborrarchar_xmax]+"8";


    this.mostrartexto(this.text_xmax,this.valortexto_xmax);
 

this.contarborrarchar_xmax=this.contarborrarchar_xmax+1;
}







}








// inica  boton 9



bt9 = game.add.sprite(vw/2, vh/2- vh/2, 'bt9');
bt9.scale.set(vw*0.0012);
bt9.inputEnabled = true;
bt9.input.useHandCursor = true;

bt9.events.onInputOver.add(fbt9_onOver, this);
bt9.events.onInputOut.add(fbt9_onOut, this);
bt9.events.onInputDown.add(fbt9_onDown, this);



function fbt9_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbt9_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbt9_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"9";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"9";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"9";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}



if(this.booltexto_xmin===true){
  this.charantes_xmin[this.contarborrarchar_xmin]=this.valortexto_xmin;
   this.valortexto_xmin=this.charantes_xmin[this.contarborrarchar_xmin]+"9";


    this.mostrartexto(this.text_xmin,this.valortexto_xmin);
 

this.contarborrarchar_xmin=this.contarborrarchar_xmin+1;
}


if(this.booltexto_xmax===true){

  this.charantes_xmax[this.contarborrarchar_xmax]=this.valortexto_xmax;
   this.valortexto_xmax=this.charantes_xmax[this.contarborrarchar_xmax]+"9";


    this.mostrartexto(this.text_xmax,this.valortexto_xmax);
 

this.contarborrarchar_xmax=this.contarborrarchar_xmax+1;
}








}





// inica  boton x



btx = game.add.sprite(vw/2, vh/2- vh/2, 'btx');
btx.scale.set(vw*0.0012);
btx.inputEnabled = true;
btx.input.useHandCursor = true;

btx.events.onInputOver.add(fbtx_onOver, this);
btx.events.onInputOut.add(fbtx_onOut, this);
btx.events.onInputDown.add(fbtx_onDown, this);



function fbtx_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtx_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtx_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"x";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"x";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"x";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}








}









// inica  boton multi



btmulti = game.add.sprite(vw/2, vh/2- vh/2, 'btmulti');
btmulti.scale.set(vw*0.0012);
btmulti.inputEnabled = true;
btmulti.input.useHandCursor = true;

btmulti.events.onInputOver.add(fbtmulti_onOver, this);
btmulti.events.onInputOut.add(fbtmulti_onOut, this);
btmulti.events.onInputDown.add(fbtmulti_onDown, this);



function fbtmulti_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtmulti_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtmulti_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"*";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"*";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"*";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}








}












// inica  boton div



btdiv = game.add.sprite(vw/2, vh/2- vh/2, 'btdiv');
btdiv.scale.set(vw*0.0012);
btdiv.inputEnabled = true;
btdiv.input.useHandCursor = true;

btdiv.events.onInputOver.add(fbtdiv_onOver, this);
btdiv.events.onInputOut.add(fbtdiv_onOut, this);
btdiv.events.onInputDown.add(fbtdiv_onDown, this);



function fbtdiv_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtdiv_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtdiv_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"/";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"/";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"/";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}








}





// inica  boton potencia



btpote = game.add.sprite(vw/2, vh/2- vh/2, 'btpote');
btpote.scale.set(vw*0.0012);
btpote.inputEnabled = true;
btpote.input.useHandCursor = true;

btpote.events.onInputOver.add(fbtpote_onOver, this);
btpote.events.onInputOut.add(fbtpote_onOut, this);
btpote.events.onInputDown.add(fbtpote_onDown, this);



function fbtpote_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtpote_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtpote_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"^";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"^";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"^";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}








}











// inica  boton paren (



btparenizq = game.add.sprite(vw/2, vh/2- vh/2, 'btparenizq');
btparenizq.scale.set(vw*0.0012);
btparenizq.inputEnabled = true;
btparenizq.input.useHandCursor = true;

btparenizq.events.onInputOver.add(fbtparenizq_onOver, this);
btparenizq.events.onInputOut.add(fbtparenizq_onOut, this);
btparenizq.events.onInputDown.add(fbtparenizq_onDown, this);



function fbtparenizq_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtparenizq_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtparenizq_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"(";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"(";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"(";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}








}














// inica  boton parent )



btparender = game.add.sprite(vw/2, vh/2- vh/2, 'btparender');
btparender.scale.set(vw*0.0012);
btparender.inputEnabled = true;
btparender.input.useHandCursor = true;

btparender.events.onInputOver.add(fbtparender_onOver, this);
btparender.events.onInputOut.add(fbtparender_onOut, this);
btparender.events.onInputDown.add(fbtparender_onDown, this);



function fbtparender_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtparender_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtparender_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+")";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+")";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+")";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}








}




// inica  boton ac



btac = game.add.sprite(vw/2, vh/2- vh/2, 'btac');
btac.scale.set(vw*0.0012);
btac.inputEnabled = true;
btac.input.useHandCursor = true;

btac.events.onInputOver.add(fbtac_onOver, this);
btac.events.onInputOut.add(fbtac_onOut, this);
btac.events.onInputDown.add(fbtac_onDown, this);



function fbtac_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtac_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtac_onDown(){







location.reload();

}









//  crea el boton de del


btdel = game.add.sprite(vw/2, vh/2- vh/2, 'btdel');
btdel.scale.set(vw*0.0012);
btdel.inputEnabled = true;
btdel.input.useHandCursor = true;


btdel.events.onInputOver.add(fbtdel_onOver, this);
btdel.events.onInputOut.add(fbtdel_onOut, this);
btdel.events.onInputDown.add(fbtdel_onDown, this);


function fbtdel_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtdel_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtdel_onDown(){


if(this.booltexto_f1===true){

if(this.valortexto_f1==='undefined'){
this.valortexto_f1="";
  
}

    if(this.contarborrarchar_f1<-0.1){
this.contarborrarchar_f1=0;
}
this.contarborrarchar_f1=this.contarborrarchar_f1-1;
  
    this.charantes_f1[this.contarborrarchar]=this.charantes_f1[this.contarborrarchar_f1];
  this.valortexto_f1 =this.charantes_f1[this.contarborrarchar_f1]

    




  this.mostrartexto(this.text_f1,this.valortexto_f1);
}


//  validacion  borrar  texto  f2

if(this.booltexto_f2===true){

if(this.valortexto_f2==='undefined'){
this.valortexto_f2="";
  
}

    if(this.contarborrarchar_f2<-0.1){
this.contarborrarchar_f2=0;
}
this.contarborrarchar_f2=this.contarborrarchar_f2-1;
  
    this.charantes_f2[this.contarborrarchar]=this.charantes_f2[this.contarborrarchar_f2];
  this.valortexto_f2 =this.charantes_f2[this.contarborrarchar_f2]

    




  this.mostrartexto(this.text_f2,this.valortexto_f2);
}



// validar  borra  text f3


if(this.booltexto_f3===true){

if(this.valortexto_f3==='undefined'){
this.valortexto_f3="";
  
}

    if(this.contarborrarchar_f3<-0.1){
this.contarborrarchar_f3=0;
}
this.contarborrarchar_f3=this.contarborrarchar_f3-1;
  
    this.charantes_f3[this.contarborrarchar]=this.charantes_f3[this.contarborrarchar_f3];
  this.valortexto_f3 =this.charantes_f3[this.contarborrarchar_f3]

    




  this.mostrartexto(this.text_f3,this.valortexto_f3);
}



if(this.booltexto_xmin===true){

if(this.valortexto_xmin==='undefined'){
this.valortexto_xmin="";
  
}

    if(this.contarborrarchar_xmin<-0.1){
this.contarborrarchar_xmin=0;
}
this.contarborrarchar_xmin=this.contarborrarchar_xmin-1;
  
    this.charantes_xmin[this.contarborrarchar]=this.charantes_xmin[this.contarborrarchar_xmin];
  this.valortexto_xmin =this.charantes_xmin[this.contarborrarchar_xmin]

    




  this.mostrartexto(this.text_xmin,this.valortexto_xmin);
}



if(this.booltexto_xmax===true){

if(this.valortexto_xmax==='undefined'){
this.valortexto_xmax="";
  
}

    if(this.contarborrarchar_xmax<-0.1){
this.contarborrarchar_xmax=0;
}
this.contarborrarchar_xmax=this.contarborrarchar_xmax-1;
  
    this.charantes_xmax[this.contarborrarchar]=this.charantes_xmax[this.contarborrarchar_xmax];
  this.valortexto_xmax =this.charantes_xmax[this.contarborrarchar_xmax]

    




  this.mostrartexto(this.text_xmax,this.valortexto_xmax);
}








}




















btgraf= game.add.sprite(vw/2, vh/2- vh/2, 'btgrafi');


   
   // btgraf.anchor.setTo(0.5, 0.5);

btgraf.animations.add('btgraf', [0, 1 ]);
  btgraf.animations.play('btgraf', 3, true);



btgraf.scale.set(2);

btgraf.inputEnabled = true;
btgraf.input.useHandCursor = true;


btgraf.events.onInputDown.add(act_btngraf, this);






btxmin = game.add.sprite(vw/2, vh/2- vh/2, 'btxmin');
btxmin.scale.set(vw*0.0012);
btxmin.inputEnabled = true;
btxmin.input.useHandCursor = true;


btxmin.events.onInputOver.add(fbxmin_onOver, this);
btxmin.events.onInputOut.add(fbxmin_onOut, this);
btxmin.events.onInputDown.add(fbxmin_onDown, this);
btxmin.visible=true;

function fbxmin_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbxmin_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbxmin_onDown(){

this.visiblebasico(true);
this.booltexto_f2=false;
this.booltexto_f3=false;
this.booltexto_f1=false;
this.booltexto_xmin=true;
this.booltexto_xmax=false;

this.booltexto_minmax=true;


if(this.booltexto_xmin===true){


 valorxmin=this.valortexto_xmin;

}














}





btxmax = game.add.sprite(vw/2, vh/2- vh/2, 'btxmax');
btxmax.scale.set(vw*0.0012);
btxmax.inputEnabled = true;
btxmax.input.useHandCursor = true;


btxmax.events.onInputOver.add(fbxmax_onOver, this);
btxmax.events.onInputOut.add(fbxmax_onOut, this);
btxmax.events.onInputDown.add(fbxmax_onDown, this);

btxmax.visible=true;
function fbxmax_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbxmax_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbxmax_onDown(){

this.visiblebasico(true);
this.booltexto_f2=false;
this.booltexto_f3=false;
this.booltexto_f1=false;
this.booltexto_xmin=false;
this.booltexto_xmax=true;
this.booltexto_minmax=true;

if(this.valortexto_xmax=='undefined'){
this.valortexto_xmax="";
  
}



if(this.booltexto_xmax===true){


valorxmax=this.valortexto_xmax;


}










}





btderi = game.add.sprite(vw/2, vh/2- vh/2, 'btderi');
btderi.scale.set(vw*0.0012);
btderi.inputEnabled = true;
btderi.input.useHandCursor = true;


btderi.events.onInputOver.add(fbtderi_onOver, this);
btderi.events.onInputOut.add(fbtderi_onOut, this);
btderi.events.onInputDown.add(fbtderi_onDown, this);

btderi.visible=true;
function fbtderi_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtderi_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtderi_onDown(){


window.location ="https://noenadies.github.io/mate/";





}












var contarbtxy=0;
btxy= game.add.sprite(vw/2, vh/2- vh/2, 'btxy');
btxy.inputEnabled = true;
btxy.input.useHandCursor = true;

btxy.events.onInputDown.add(nojoda, this);

function nojoda(){
  if(contarbtxy==1){this.booltexto_minmax=true;}
 if(contarbtxy==2){this.booltexto_minmax=false;}

 if(contarbtxy==2){contarbtxy=o;}

contarbtxy=contarbtxy+1;
}






// este  boton  cambia d e teclado  basico  a trigonometrico
//  en el  js  principal d e  phaser  
//  se  coloca  una funcion  uqe  llama   a  this.visiblebasico 
// lo que hac e e s ocultar unos  botones  para  que  salgan los senos cos tang ect

btflechad= game.add.sprite(vw/2, vh/2- vh/2, 'btflechad');
btflechad.inputEnabled = true;
btflechad.input.useHandCursor = true;

btflechad.events.onInputDown.add(btflechad_in, this);
//  
function btflechad_in(){
btflechai.visible=true;
btflechad.visible=false;
  btflechad_phaser(false);
}



btflechai= game.add.sprite(vw/2, vh/2- vh/2, 'btflechai');
btflechai.inputEnabled = true;
btflechai.input.useHandCursor = true;

btflechai.events.onInputDown.add(btflechai_in, this);
//
btflechai.visible=false;  
function btflechai_in(){
btflechai.visible=false;
btflechad.visible=true;
  btflechad_phaser(true);
}








// inica  boton sin



btsin = game.add.sprite(vw/2, vh/2- vh/2, 'btsin');
btsin.scale.set(vw*0.0012);
btsin.inputEnabled = true;
btsin.input.useHandCursor = true;

btsin.events.onInputOver.add(fbtsin_onOver, this);
btsin.events.onInputOut.add(fbtsin_onOut, this);
btsin.events.onInputDown.add(fbtsin_onDown, this);



function fbtsin_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtsin_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtsin_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"sin";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"sin";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"sin";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}






// inica  boton cos



btcos = game.add.sprite(vw/2, vh/2- vh/2, 'btcos');
btcos.scale.set(vw*0.0012);
btcos.inputEnabled = true;
btcos.input.useHandCursor = true;

btcos.events.onInputOver.add(fbtcos_onOver, this);
btcos.events.onInputOut.add(fbtcos_onOut, this);
btcos.events.onInputDown.add(fbtcos_onDown, this);



function fbtcos_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtcos_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtcos_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"cos";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"cos";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"cos";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}







// inica  boton tan



bttan = game.add.sprite(vw/2, vh/2- vh/2, 'bttan');
bttan.scale.set(vw*0.0012);
bttan.inputEnabled = true;
bttan.input.useHandCursor = true;

bttan.events.onInputOver.add(fbttan_onOver, this);
bttan.events.onInputOut.add(fbttan_onOut, this);
bttan.events.onInputDown.add(fbttan_onDown, this);



function fbttan_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbttan_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbttan_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"tan";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"tan";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"tan";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}








// inica  boton cot



btcot = game.add.sprite(vw/2, vh/2- vh/2, 'btcot');
btcot.scale.set(vw*0.0012);
btcot.inputEnabled = true;
btcot.input.useHandCursor = true;

btcot.events.onInputOver.add(fbtcot_onOver, this);
btcot.events.onInputOut.add(fbtcot_onOut, this);
btcot.events.onInputDown.add(fbtcot_onDown, this);



function fbtcot_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtcot_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtcot_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"cot";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"cot";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"cot";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}














// inica  boton sec



btsec = game.add.sprite(vw/2, vh/2- vh/2, 'btsec');
btsec.scale.set(vw*0.0012);
btsec.inputEnabled = true;
btsec.input.useHandCursor = true;

btsec.events.onInputOver.add(fbtsec_onOver, this);
btsec.events.onInputOut.add(fbtsec_onOut, this);
btsec.events.onInputDown.add(fbtsec_onDown, this);



function fbtsec_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtsec_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtsec_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"sec";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"sec";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"sec";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}















// inica  boton csc



btcsc = game.add.sprite(vw/2, vh/2- vh/2, 'btcsc');
btcsc.scale.set(vw*0.0012);
btcsc.inputEnabled = true;
btcsc.input.useHandCursor = true;

btcsc.events.onInputOver.add(fbtcsc_onOver, this);
btcsc.events.onInputOut.add(fbtcsc_onOut, this);
btcsc.events.onInputDown.add(fbtcsc_onDown, this);



function fbtcsc_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtcsc_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtcsc_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"csc";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"csc";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"csc";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}



// inica  boton sinh



btsinh = game.add.sprite(vw/2, vh/2- vh/2, 'btsinh');
btsinh.scale.set(vw*0.0012);
btsinh.inputEnabled = true;
btsinh.input.useHandCursor = true;

btsinh.events.onInputOver.add(fbtsinh_onOver, this);
btsinh.events.onInputOut.add(fbtsinh_onOut, this);
btsinh.events.onInputDown.add(fbtsinh_onDown, this);



function fbtsinh_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtsinh_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtsinh_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"sinh";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"sinh";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"sinh";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}




// inica  boton cosh



btcosh = game.add.sprite(vw/2, vh/2- vh/2, 'btcosh');
btcosh.scale.set(vw*0.0012);
btcosh.inputEnabled = true;
btcosh.input.useHandCursor = true;

btcosh.events.onInputOver.add(fbtcosh_onOver, this);
btcosh.events.onInputOut.add(fbtcosh_onOut, this);
btcosh.events.onInputDown.add(fbtcosh_onDown, this);



function fbtcosh_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtcosh_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtcosh_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"cosh";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"cosh";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"cosh";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}






// inica  boton tanh



bttanh = game.add.sprite(vw/2, vh/2- vh/2, 'bttanh');
bttanh.scale.set(vw*0.0012);
bttanh.inputEnabled = true;
bttanh.input.useHandCursor = true;

bttanh.events.onInputOver.add(fbttanh_onOver, this);
bttanh.events.onInputOut.add(fbttanh_onOut, this);
bttanh.events.onInputDown.add(fbttanh_onDown, this);



function fbttanh_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbttanh_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbttanh_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"tanh";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"tanh";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"tanh";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}






// inica  boton coth



btcoth = game.add.sprite(vw/2, vh/2- vh/2, 'btcoth');
btcoth.scale.set(vw*0.0012);
btcoth.inputEnabled = true;
btcoth.input.useHandCursor = true;

btcoth.events.onInputOver.add(fbtcoth_onOver, this);
btcoth.events.onInputOut.add(fbtcoth_onOut, this);
btcoth.events.onInputDown.add(fbtcoth_onDown, this);



function fbtcoth_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtcoth_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtcoth_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"coth";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"coth";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"coth";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}







// inica  boton sech



btsech = game.add.sprite(vw/2, vh/2- vh/2, 'btsech');
btsech.scale.set(vw*0.0012);
btsech.inputEnabled = true;
btsech.input.useHandCursor = true;

btsech.events.onInputOver.add(fbtsech_onOver, this);
btsech.events.onInputOut.add(fbtsech_onOut, this);
btsech.events.onInputDown.add(fbtsech_onDown, this);



function fbtsech_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtsech_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtsech_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"sech";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"sech";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"sech";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}







// inica  boton csch



btcsch = game.add.sprite(vw/2, vh/2- vh/2, 'btcsch');
btcsch.scale.set(vw*0.0012);
btcsch.inputEnabled = true;
btcsch.input.useHandCursor = true;

btcsch.events.onInputOver.add(fbtcsch_onOver, this);
btcsch.events.onInputOut.add(fbtcsch_onOut, this);
btcsch.events.onInputDown.add(fbtcsch_onDown, this);



function fbtcsch_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtcsch_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtcsch_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"csch";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"csch";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"csch";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}








// inica  boton asin



btasin = game.add.sprite(vw/2, vh/2- vh/2, 'btasin');
btasin.scale.set(vw*0.0012);
btasin.inputEnabled = true;
btasin.input.useHandCursor = true;

btasin.events.onInputOver.add(fbtasin_onOver, this);
btasin.events.onInputOut.add(fbtasin_onOut, this);
btasin.events.onInputDown.add(fbtasin_onDown, this);



function fbtasin_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtasin_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtasin_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"asin";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"asin";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"asin";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}











// inica  boton acos



btacos = game.add.sprite(vw/2, vh/2- vh/2, 'btacos');
btacos.scale.set(vw*0.0012);
btacos.inputEnabled = true;
btacos.input.useHandCursor = true;

btacos.events.onInputOver.add(fbtacos_onOver, this);
btacos.events.onInputOut.add(fbtacos_onOut, this);
btacos.events.onInputDown.add(fbtacos_onDown, this);



function fbtacos_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtacos_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtacos_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"acos";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"acos";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"acos";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}














// inica  boton atan



btatan = game.add.sprite(vw/2, vh/2- vh/2, 'btatan');
btatan.scale.set(vw*0.0012);
btatan.inputEnabled = true;
btatan.input.useHandCursor = true;

btatan.events.onInputOver.add(fbtatan_onOver, this);
btatan.events.onInputOut.add(fbtatan_onOut, this);
btatan.events.onInputDown.add(fbtatan_onDown, this);



function fbtatan_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtatan_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtatan_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"atan";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"atan";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"atan";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}





// inica  boton acot



btacot = game.add.sprite(vw/2, vh/2- vh/2, 'btacot');
btacot.scale.set(vw*0.0012);
btacot.inputEnabled = true;
btacot.input.useHandCursor = true;

btacot.events.onInputOver.add(fbtacot_onOver, this);
btacot.events.onInputOut.add(fbtacot_onOut, this);
btacot.events.onInputDown.add(fbtacot_onDown, this);



function fbtacot_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtacot_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtacot_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"acot";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"acot";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"acot";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}








// inica  boton asec



btasec = game.add.sprite(vw/2, vh/2- vh/2, 'btasec');
btasec.scale.set(vw*0.0012);
btasec.inputEnabled = true;
btasec.input.useHandCursor = true;

btasec.events.onInputOver.add(fbtasec_onOver, this);
btasec.events.onInputOut.add(fbtasec_onOut, this);
btasec.events.onInputDown.add(fbtasec_onDown, this);



function fbtasec_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtasec_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtasec_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"asec";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"asec";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"asec";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}











// inica  boton acsc



btacsc = game.add.sprite(vw/2, vh/2- vh/2, 'btacsc');
btacsc.scale.set(vw*0.0012);
btacsc.inputEnabled = true;
btacsc.input.useHandCursor = true;

btacsc.events.onInputOver.add(fbtacsc_onOver, this);
btacsc.events.onInputOut.add(fbtacsc_onOut, this);
btacsc.events.onInputDown.add(fbtacsc_onDown, this);



function fbtacsc_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtacsc_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtacsc_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"acsc";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"acsc";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"acsc";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}

























// inica  boton asinh



btasinh = game.add.sprite(vw/2, vh/2- vh/2, 'btasinh');
btasinh.scale.set(vw*0.0012);
btasinh.inputEnabled = true;
btasinh.input.useHandCursor = true;

btasinh.events.onInputOver.add(fbtasinh_onOver, this);
btasinh.events.onInputOut.add(fbtasinh_onOut, this);
btasinh.events.onInputDown.add(fbtasinh_onDown, this);



function fbtasinh_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtasinh_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtasinh_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"asinh";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"asinh";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"asinh";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}











// inica  boton acosh



btacosh = game.add.sprite(vw/2, vh/2- vh/2, 'btacosh');
btacosh.scale.set(vw*0.0012);
btacosh.inputEnabled = true;
btacosh.input.useHandCursor = true;

btacosh.events.onInputOver.add(fbtacosh_onOver, this);
btacosh.events.onInputOut.add(fbtacosh_onOut, this);
btacosh.events.onInputDown.add(fbtacosh_onDown, this);



function fbtacosh_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtacosh_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtacosh_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"acosh";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"acosh";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"acosh";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}














// inica  boton atanh



btatanh = game.add.sprite(vw/2, vh/2- vh/2, 'btatanh');
btatanh.scale.set(vw*0.0012);
btatanh.inputEnabled = true;
btatanh.input.useHandCursor = true;

btatanh.events.onInputOver.add(fbtatanh_onOver, this);
btatanh.events.onInputOut.add(fbtatanh_onOut, this);
btatanh.events.onInputDown.add(fbtatanh_onDown, this);



function fbtatanh_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtatanh_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtatanh_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"atanh";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"atanh";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"atanh";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}





// inica  boton acoth



btacoth = game.add.sprite(vw/2, vh/2- vh/2, 'btacoth');
btacoth.scale.set(vw*0.0012);
btacoth.inputEnabled = true;
btacoth.input.useHandCursor = true;

btacoth.events.onInputOver.add(fbtacoth_onOver, this);
btacoth.events.onInputOut.add(fbtacoth_onOut, this);
btacoth.events.onInputDown.add(fbtacoth_onDown, this);



function fbtacoth_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtacoth_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtacoth_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"acoth";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"acoth";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"acoth";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}








// inica  boton asech



btasech = game.add.sprite(vw/2, vh/2- vh/2, 'btasech');
btasech.scale.set(vw*0.0012);
btasech.inputEnabled = true;
btasech.input.useHandCursor = true;

btasech.events.onInputOver.add(fbtasech_onOver, this);
btasech.events.onInputOut.add(fbtasech_onOut, this);
btasech.events.onInputDown.add(fbtasech_onDown, this);



function fbtasech_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtasech_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtasech_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"asech";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"asech";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"asech";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}











// inica  boton acsch



btacsch = game.add.sprite(vw/2, vh/2- vh/2, 'btacsch');
btacsch.scale.set(vw*0.0012);
btacsch.inputEnabled = true;
btacsch.input.useHandCursor = true;

btacsch.events.onInputOver.add(fbtacsch_onOver, this);
btacsch.events.onInputOut.add(fbtacsch_onOut, this);
btacsch.events.onInputDown.add(fbtacsch_onDown, this);



function fbtacsch_onOver(bt){

this.sprite.scale.set(vw*0.0012);
this.sprite.x=bt.x+bt.width*0.01/2;
this.sprite.y=bt.y;
this.sprite.visible =true;
this.sprite.animations.play('bt', 20, true);
}
function fbtacsch_onOut(){
this.sprite.animations.stop('bt',true);
this.sprite.visible =false;

  
}
function fbtacsch_onDown(){



if(this.valortexto_f1=='undefined'){
this.valortexto_f1="";
  
}
if(this.booltexto_f1===true){
  this.charantes_f1[this.contarborrarchar_f1]=this.valortexto_f1;
   this.valortexto_f1=this.charantes_f1[this.contarborrarchar_f1]+"acsch";


    this.mostrartexto(this.text_f1,this.valortexto_f1);
 

this.contarborrarchar_f1=this.contarborrarchar_f1+1;
}




if(this.booltexto_f2===true){
  this.charantes_f2[this.contarborrarchar_f2]=this.valortexto_f2;
   this.valortexto_f2=this.charantes_f2[this.contarborrarchar_f2]+"acsch";


    this.mostrartexto(this.text_f2,this.valortexto_f2);
 

this.contarborrarchar_f2=this.contarborrarchar_f2+1;
}
if(this.booltexto_f3===true){
  this.charantes_f3[this.contarborrarchar_f3]=this.valortexto_f3;
   this.valortexto_f3=this.charantes_f3[this.contarborrarchar_f3]+"acsch";


    this.mostrartexto(this.text_f3,this.valortexto_f3);
 

this.contarborrarchar_f3=this.contarborrarchar_f3+1;
}









}








var pantallavalor=0;


this.update=function(){


   btcero.position.x=game.camera.x;
   btcero.position.y=vh*0.70;


      btf1.position.x= btcero.position.x+vw*0;
   btf1.position.y=btcero.position.y-vh*0.86-5;
    btf2.position.x= btcero.position.x+vw*0;
   btf2.position.y=btcero.position.y-vh*0.76-6;






 btderi.position.x= btf2.position.x+vw*0.80;
   btderi.position.y=btf2.position.y;




    btf3.position.x= btcero.position.x+vw*0;
   btf3.position.y=btcero.position.y-vh*0.66-20;
btpunto.position.x= btcero.position.x+vw*0.17;
   btpunto.position.y=btcero.position.y;


      bte.position.x= btpunto.position.x+vw*0.17;
   bte.position.y=btcero.position.y;

         btmenos.position.x= bte.position.x+vw*0.17;
   btmenos.position.y=btcero.position.y;

            btmas.position.x= btmenos.position.x+vw*0.17;
   btmas.position.y=btcero.position.y;

     


     btmas.position.x= btmenos.position.x+vw*0.17;
   btmas.position.y=btcero.position.y;

   

  

   btuno.position.x= btcero.position.x+vw*0;
   btuno.position.y=btcero.position.y-vh*0.13;
   bt2.position.x= btuno.position.x+vw*0.17;
   bt2.position.y=btuno.position.y;

   bt3.position.x= bt2.position.x+vw*0.17;
   bt3.position.y=bt2.position.y;
   bt4.position.x= bt3.position.x+vw*0.17;
   bt4.position.y=bt3.position.y;

   bt5.position.x= bt4.position.x+vw*0.17;
   bt5.position.y=bt4.position.y;

   bt6.position.x= btuno.position.x;
   bt6.position.y=btuno.position.y -vh*0.13;

   bt7.position.x= bt6.position.x+vw*0.17;
   bt7.position.y=bt6.position.y ;

   bt8.position.x= bt7.position.x+vw*0.17;
   bt8.position.y=bt7.position.y ;

    bt9.position.x= bt8.position.x+vw*0.17;
   bt9.position.y=bt8.position.y ;
    btx.position.x= bt9.position.x+vw*0.17;
   btx.position.y=bt9.position.y ;

      btmulti.position.x= btmas.position.x+vw*0.17;
   btmulti.position.y=btmas.position.y;


      btdiv.position.x= bt5.position.x+vw*0.17;
   btdiv.position.y=bt5.position.y;

    btpote.position.x= btx.position.x+vw*0.17;
   btpote.position.y=btx.position.y;

    btparenizq.position.x=bt8.position.x;
   btparenizq.position.y=bt8.position.y-vh*0.13;

    btparender.position.x=btparenizq.position.x+vw*0.17;
   btparender.position.y=btparenizq.position.y;


    btdel.position.x=  btparender.position.x+vw*0.17;
   btdel.position.y=btparender.position.y;
 btac.position.x=  btdel.position.x+vw*0.17;
   btac.position.y=btdel.position.y;

btgraf.position.x=  btcero.position.x;
   btgraf.position.y=btparenizq.position.y -vw*0.2;

   btxmin.position.x=btgraf.position.x+60;
   btxmin.position.y=btgraf.position.y -vw*0.2;

    btxmax.position.x=btxmin.position.x;
   btxmax.position.y=btxmin.position.y +vw*0.14;


 btxy.position.x=btgraf.position.x;
   btxy.position.y=btgraf.position.y +vw*0.24;


 btflechad.position.x=btdel.position.x;
   btflechad.position.y=btxy.position.y;


 btflechai.position.x=btflechad.x;
   btflechai.position.y=btflechad.y;

     btsin.position.x=game.camera.x;
   btsin.position.y=vh*0.70;

    btcos.position.x=btsin.position.x+vw*0.17;
   btcos.position.y=btsin.position.y;

      bttan.position.x=btcos.position.x+vw*0.17;
   bttan.position.y=btcos.position.y;

      btcot.position.x=bttan.position.x+vw*0.17;
   btcot.position.y=bttan.position.y;


 btsec.position.x=btcot.position.x+vw*0.17;
   btsec.position.y=btcot.position.y;

    btcsc.position.x=btsec.position.x+vw*0.17;
   btcsc.position.y=btsec.position.y;

   btsinh.position.x=btsin.position.x;
   btsinh.position.y=btsin.position.y-vh*0.08;

    btcosh.position.x=btsinh.position.x+vw*0.17;
   btcosh.position.y=btsinh.position.y;

      bttanh.position.x=btcosh.position.x+vw*0.17;
   bttanh.position.y=btcosh.position.y;

   btcoth.position.x=bttanh.position.x+vw*0.17;
   btcoth.position.y=bttanh.position.y;

   btsech.position.x=btcoth.position.x+vw*0.17;
   btsech.position.y=btcoth.position.y;

   btcsch.position.x=btsech.position.x+vw*0.17;
   btcsch.position.y=btsech.position.y;

btasin.position.x=btsinh.position.x;
   btasin.position.y=btsinh.position.y-vh*0.08;

   btacos.position.x=btasin.position.x+vw*0.17;
   btacos.position.y=btasin.position.y;


    btatan.position.x=btacos.position.x+vw*0.17;
   btatan.position.y=btacos.position.y;

      btacot.position.x=btatan.position.x+vw*0.17;
   btacot.position.y=btatan.position.y;

   btasec.position.x=btacot.position.x+vw*0.17;
   btasec.position.y=btacot.position.y;

   btacsc.position.x=btasec.position.x+vw*0.17;
   btacsc.position.y=btasec.position.y;








btasinh.position.x=btasin.position.x;
   btasinh.position.y=btasin.position.y-vh*0.08;

   btacosh.position.x=btasinh.position.x+vw*0.17;
   btacosh.position.y=btasinh.position.y;


    btatanh.position.x=btacosh.position.x+vw*0.17;
   btatanh.position.y=btacosh.position.y;

      btacoth.position.x=btatanh.position.x+vw*0.17;
   btacoth.position.y=btatanh.position.y;

   btasech.position.x=btacoth.position.x+vw*0.17;
   btasech.position.y=btacoth.position.y;

   btacsch.position.x=btasech.position.x+vw*0.17;
   btacsch.position.y=btasech.position.y;





 }





















var game=game;

this.visiblebasico  = function (visibl){

   
   btcero.visible=visibl;
  // btf1.visible=visibl;

  
  // btf2.visible=visibl;

   //btf3.visible=visibl;

btpunto.visible=visibl;
   


      bte.visible=visibl;


         btmenos.visible=visibl;


            btmas.visible=visibl;
  

     

   

  

   btuno.visible=visibl;
   
   bt2.visible=visibl;
  

   bt3.visible=visibl;
  
   bt4.visible=visibl;
  

   bt5.visible=visibl;
  

   
   bt6.visible=visibl;

   bt7.visible=visibl;


   bt8.visible=visibl;
 

    bt9.visible=visibl;
 
    btx.visible=visibl;
  

      btmulti.visible=visibl;
  


      btdiv.visible=visibl;


    btpote.visible=visibl;


    btparenizq.visible=visibl;
   

    btparender.visible=visibl;



    btdel.visible=visibl;
 
 btac.visible=visibl;


btxy.visible=visibl;



}




this.visibletrigono  = function (visibl){
btsin.visible=visibl;
btcos.visible=visibl;
bttan.visible=visibl;

btcot.visible=visibl;

btsec.visible=visibl;

btcsc.visible=visibl;

btsinh.visible=visibl;
btcosh.visible=visibl;
bttanh.visible=visibl;
btcoth.visible=visibl;
btsech.visible=visibl;
btcsch.visible=visibl;

btasin.visible=visibl;
btacos.visible=visibl;
btatan.visible=visibl;
btacot.visible=visibl;
btasec.visible=visibl;
btacsc.visible=visibl;

btasinh.visible=visibl;
btacosh.visible=visibl;
btatanh.visible=visibl;
btacoth.visible=visibl;
btasech.visible=visibl;
btacsch.visible=visibl;


}











this.fijaracambasico =function(fijar){

   
   btcero.fixedToCamera=fijar;
   btf1.fixedToCamera=fijar;

  
   btf2.fixedToCamera=fijar;

    btf3.fixedToCamera=fijar;

btpunto.fixedToCamera=fijar;
   


      bte.fixedToCamera=fijar;


         btmenos.fixedToCamera=fijar;


            btmas.fixedToCamera=fijar;
  

     

   

  

   btuno.fixedToCamera=fijar;
   
   bt2.fixedToCamera=fijar;
  

   bt3.fixedToCamera=fijar;
  
   bt4.fixedToCamera=fijar;
  

   bt5.fixedToCamera=fijar;
  

   
   bt6.fixedToCamera=fijar;

   bt7.fixedToCamera=fijar;


   bt8.fixedToCamera=fijar;
 

    bt9.fixedToCamera=fijar;
 
    btx.fixedToCamera=fijar;
  

      btmulti.fixedToCamera=fijar;
  


      btdiv.fixedToCamera=fijar;


    btpote.fixedToCamera=fijar;


    btparenizq.fixedToCamera=fijar;
   

    btparender.fixedToCamera=fijar;



    btdel.fixedToCamera=fijar;
 
 btac.fixedToCamera=fijar;
 btgraf.fixedToCamera=fijar;

 btxmax.fixedToCamera=fijar;
btxmin.fixedToCamera=fijar;
btxy.fixedToCamera=fijar;






 this.text_f1.fixedToCamera=fijar;
 this.text_f2.fixedToCamera=fijar;
 this.text_f3.fixedToCamera=fijar;
 this.text_xmin.fixedToCamera=fijar;
 this.text_xmax.fixedToCamera=fijar;

btflechad.fixedToCamera=fijar;
btflechai.fixedToCamera=fijar;

btsin.fixedToCamera=fijar;
btcos.fixedToCamera=fijar;


bttan.fixedToCamera=fijar;


btcot.fixedToCamera=fijar;

btsec.fixedToCamera=fijar;

btcsc.fixedToCamera=fijar;


btsinh.fixedToCamera=fijar;
btcosh.fixedToCamera=fijar;
bttanh.fixedToCamera=fijar;
btcoth.fixedToCamera=fijar;
btsech.fixedToCamera=fijar;
btcsch.fixedToCamera=fijar;

btasin.fixedToCamera=fijar;
btacos.fixedToCamera=fijar;
btatan.fixedToCamera=fijar;
btacot.fixedToCamera=fijar;
btasec.fixedToCamera=fijar;
btacsc.fixedToCamera=fijar;


btasinh.fixedToCamera=fijar;
btacosh.fixedToCamera=fijar;
btatanh.fixedToCamera=fijar;
btacoth.fixedToCamera=fijar;
btasech.fixedToCamera=fijar;
btacsch.fixedToCamera=fijar;
btderi.fixedToCamera=fijar;
this.Textsaly.fixedToCamera=fijar;
this.Textsalx.fixedToCamera=fijar;

}




        this.tamanotexto=vw*0.01;
   
        this.style = styletext;
  
     

       this.text1= game.add.text(vw/2- vw/2*0.5, vh/2-vh/2*0.5, "", this.style);
   
    
       this.text1.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

   
      // this.text1.setTextBounds(0, 100, 800, 100);






//text1



this.mostrartexto =function (objtext,texto){
  

objtext.setText (texto);
objtext.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    //  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
//this.text1.setTextBounds(0, 100, 800, 100);
}















}

//this.update();
//this.fijaracambasico(true);











