
//https://www.youtube.com/watch?v=WIizj4rAFZY

var graphics ;
var vw = window.innerWidth;
var vh = window.innerHeight;
var mundox;
var mundoy;
var theplot=[];
var  editex;
var ox=0;
var oy=0;
var indice=0;
var text_nux=[];
var text_nuxn=[];
var text_nuy=[];
var text_nuyn=[];


 var unidadmedida=60;
 var cuantaslineas=20;

        var IDE_HOOK = false;
        var VERSION = '2.6.2';

        
var game = new Phaser.Game(vw,vh, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
 game.load.image('mirtensparente', 'assets/sprites/mirtensparente.png');
    game.load.image('mirtensparentedos', 'assets/sprites/mirtensparentedos.png');

     game.load.spritesheet('mir', 'assets/sprites/mir.png',60, 60, 3);
 
  game.load.image('fon', 'assets/sprites/fon.png');
    game.load.image('background','assets/tests/debug-grid-1920x1920.png');
    game.load.image('player','assets/sprites/phaser-dude.png');
    cargaimaeditext();
}

var player;
var pstatico;
var cursors;

function create() {

   //game.add.tileSprite(0, 0, 1920, 1920, 'background');

    game.world.setBounds(0, 0, 5000, 5000);
    mundox=game.world.centerX*2;
    mundoy=game.world.centerY*2;


    game.physics.startSystem(Phaser.Physics.ARCADE);




  fon=game.add.sprite(0,0, 'fon');
  fon.anchor.setTo(0.5, 0.5);
 // if(vw<670){ fon.scale.set(0.0022580645*vw+0.5612903226)}
  fon.scale.set(0.004*vw);
  fon.width;
  fon.x=mundox/2;
   fon.y=mundoy/2;
game.physics.enable(fon, Phaser.Physics.ARCADE);

    game.physics.arcade.gravity.y = 0;
//fon.body.collideWorldBounds = true;

//game.physics.arcade.enable([sprite, sprite2]);

   cruz=game.add.sprite(mundox/2,mundoy/2, 'cruz');
  cruz.anchor.setTo(0.5, 0.5);
  cruz.scale.set(0.0022580645*mundox+0.5612903226);
  cruz.width;
  cruz.x=mundox/2;
   cruz.y=mundoy/2;
   cruz.fixedToCamera=true;





mirtensparente= game.add.sprite(vw/2, vh/2, 'mirtensparente');
mirtensparentedos= game.add.sprite(vw/2, vh/2, 'mirtensparentedos');

  mir = game.add.sprite(0, 0, 'mir');
   
    mir.anchor.setTo(0.5, 0.5);
 game.physics.enable(mir, Phaser.Physics.ARCADE);
mir.body.allowRotation = false;


mir.animations.add('miraniid', [0, 1, 2 ]);
   mir.animations.play('miraniid', 20, true);



   //game.stage.backgroundColor = '#0072bc';

   
    //  Enable Arcade Physics for the sprite
   // game.physics.enable(sprite, Phaser.Physics.ARCADE);

    //  Tell it we don't want physics to manage the rotation
    //sprite.body.allowRotation = false;

  //  game.physics.startSystem(Phaser.Physics.P2JS);
 pstatico = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
pstatico.anchor.setTo(0.5, 0.5);
    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
  player.anchor.setTo(0.5, 0.5);
  //  game.physics.p2.enable(player);
 game.physics.enable(player, Phaser.Physics.ARCADE);
    ///player.body.fixedRotation = true;
    player.body.allowRotation = false;
    //cursors = game.input.keyboard.createCursorKeys();

    //  Notice that the sprite doesn't have any momentum at all,
    //  it's all just set by the camera follow type.
    //  0.1 is the amount of linear interpolation to use.
    //  The smaller the value, the smooth the camera (and the longer it takes to catch up)
    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

graphics =game.add.graphics(0, 0);

    graphics.beginFill(0x027a71);
    graphics.lineStyle(4, 0x02fdeb, 0.6);
    
    graphics.moveTo(mundox/2, 0);
    graphics.lineTo(mundox/2,mundoy);
    graphics.moveTo(0,mundoy/2);
    graphics.lineTo(mundox,mundoy/2);
    
   
 
var bmd = game.make.bitmapData(mundox,mundoy);
var p1x=mundox/2;
var p1y=0;
var p2x=mundox/2;
var p2y=mundoy/2;
bmd.line(p1x, p1y, p2x,p2y, '#ef3a16', 0.2);

bmd.addToWorld(); 


crearejes(ox,oy);


var  style={ font: "bold "+String(vw*0.04)+"px Arial", fill: "#B21437", boundsAlignH: "center", boundsAlignV: "middle" };
   editex= new  Editext(game,vw,vh,style,function (){});


 game.camera.follow(fon, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);


editex.update();

editex.fijaracambasico(true);
editex.visibletrigono(false); 


  bmd = game.make.bitmapData(mundox, mundoy);
    bmd.addToWorld();
      bmdf1 = game.make.bitmapData(mundox, mundoy);
    bmdf1.addToWorld();

      bmdf2 = game.make.bitmapData(mundox, mundoy);
    bmdf2.addToWorld();
      bmdf3 = game.make.bitmapData(mundox, mundoy);
    bmdf3.addToWorld();















}

function update() {

//line.fromSprite(handle1, handle2, false);
    fon.rotation += 0.005;

mirtensparente.x=((mir.x+ox*unidadmedida)-mundox/2)/unidadmedida;
mirtensparente.y=-((mir.y-(oy)*unidadmedida)-mundoy/2)/unidadmedida;
 

mir.rotation = game.physics.arcade.moveToPointer(mir, 60, game.input.activePointer, 500);

}

function render() {
     game.debug.spriteInfo(mirtensparente, 32, 32);

    game.debug.text("ESOTAM", 32, 32);

}
     























function crearejes(ix,iy){
   contx=ix;
contxn=ix;
conty=iy;
contyn=iy;
 for(var i=0 ;i<(cuantaslineas*unidadmedida);i=i+unidadmedida){


      

       tamanotexto_nu=15;
   
        var style_nu = { font: "bold "+tamanotexto_nu+"px Arial", fill: "#0dffbd", boundsAlignH: "center", boundsAlignV: "middle" };
 
  
     

        text_nux[indice]= game.add.text(mundox/2+(i+(unidadmedida*0.01)), mundoy/2, "",style_nu);
        text_nux[indice].setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text_nux[indice].setText (contx);

        text_nuxn[indice]= game.add.text(mundox/2+(-i-(unidadmedida*0.01)), mundoy/2, "",style_nu);
        text_nuxn[indice].setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text_nuxn[indice].setText (contxn);


        text_nuy[indice]= game.add.text(mundox/2, mundoy/2+(-i-(unidadmedida*0.01)), "",style_nu);
        text_nuy[indice].setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text_nuy[indice].setText (conty);


        text_nuyn[indice]= game.add.text(mundox/2, mundoy/2+(i-(unidadmedida*0.01)), "",style_nu);
        text_nuyn[indice].setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text_nuyn[indice].setText (contyn);





 contx=contx+1;
       contxn=contxn-1;
       conty=conty+1;
          contyn=contyn-1;
       indice=indice+1;

    }


}



      function texnumer(px,py,texnu){


       tamanotexto_nu=15;
   
        var style_nu = { font: "bold "+tamanotexto_nu+"px Arial", fill: "#0dffbd", boundsAlignH: "center", boundsAlignV: "middle" };
 
  
     

       var text_nu= game.add.text(px,py, "",style_nu);
   
    
      text_nu.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

       text_nu.setText (texnu);

      }


function cambiartextx(){

contx=ox;
contxn=ox;
conty=oy;
contyn=oy;

for (var i = 0; i <text_nux.length; i=i+1) {




   text_nux[i].setText (contx);
   text_nuxn[i].setText (contxn);
   text_nuy[i].setText (conty);
   text_nuyn[i].setText (contyn);

    contx=contx+1;
       contxn=contxn-1;
       conty=conty+1;
          contyn=contyn-1;
     //  indice=indice+1;
}
  


}






function act_btngraf(){var textoecua0="";
 // crearejes();
//ejedibujar();

  editex.visiblebasico(false);
if(editex.booltexto_f3){

 
textoecua=editex.valortexto_f3;

bmdf3.clear();
// crearejes();



theplot=[];
theplot.push(new Fooplot(document.getElementById('theplot')));



//theplot.addPlot(String(textoecua),FOOPLOT_TYPE_FUNCTION,{'color':$(this).find('.data-color').val()});


theplot[0].addPlot(String(textoecua),FOOPLOT_TYPE_FUNCTION,{'color':$(this).find('.data-color').val()});
  // theplot.drawFunction(theplot.plots[i].jeq);
// bmd.ctx.fillStyle = '#F20C4F';
  
   theplot[0].reDraw();
  colorf3='#F32D09';
    ecuacion(bmdf3,colorf3);


}
if(editex.booltexto_f2){
textoecua=editex.valortexto_f2;


bmdf2.clear();
 //crearejes();



theplot=[];
theplot.push(new Fooplot(document.getElementById('theplot')));



//theplot.addPlot(String(textoecua),FOOPLOT_TYPE_FUNCTION,{'color':$(this).find('.data-color').val()});


theplot[0].addPlot(String(textoecua),FOOPLOT_TYPE_FUNCTION,{'color':$(this).find('.data-color').val()});
  // theplot.drawFunction(theplot.plots[i].jeq);
// bmd.ctx.fillStyle = '#F20C4F';
   theplot[0].xmin=-10;

   theplot[0].xmax=10;
   theplot[0].reDraw();
  colorf2='#E9FA05';
    ecuacion(bmdf2,colorf2);
}
if(editex.booltexto_f1){
textoecua=editex.valortexto_f1;



bmdf1.clear();
 //crearejes();



theplot=[];
theplot.push(new Fooplot(document.getElementById('theplot')));



//theplot.addPlot(String(textoecua),FOOPLOT_TYPE_FUNCTION,{'color':$(this).find('.data-color').val()});


theplot[0].addPlot(String(textoecua),FOOPLOT_TYPE_FUNCTION,{'color':$(this).find('.data-color').val()});
  // theplot.drawFunction(theplot.plots[i].jeq);
// bmd.ctx.fillStyle = '#F20C4F';
   theplot[0].xmin=-20;

   theplot[0].xmax=-10;
   theplot[0].reDraw();
  colorf1='#FA05AE';
    ecuacion(bmdf1,colorf1);




}

 

}

















function  definirxmin(min){
return min;

}

function  definirxmax(max){
return max;

}

function limpiarxy(){


//bmd.clear();
}


function ecuacion (bmdobj,colr){
var cc=0;

var  arrayl=[]; 

arrayl=[];
//arrayl.pop();



for(var i=1; i<fy1.length;i=i+1){
  //console.log(arrayl);
 arrayl.push(new Phaser.Point(fx1[i],fy1[i]));
}


if(editex.booltexto_minmax){
var indicefy1=0;
indicefy1=fy1.length/2;
ox=Math.round(fx1[indicefy1]);//(valorxmin+valorxmax)/2;
 oy=Math.round(fy1[indicefy1]);
 console.log(ox+"  "+oy);
cambiartextx();
}



var  n1=0;
var n2=0;
var f=unidadmedida;
var ct=0;
for(var i=1; i<arrayl.length;i=i+1){
  ct=ct;
  n1=ct;
  n2=ct+1;
 

 //i==arrayl.length-1  es  para  cuadno llegue al  fial d elos puntos d el  array  y  se  puedee  crear  el 
 // ultimo punto  si no lo  colocamos da  error  en  el array  para  cuando llame  a  un indice  que ni 

//EXISTE 
/*
 if(i==arrayl.length-1){bmd.line(vw/2+arrayl[n1].x*f,vh/2-arrayl[n1].y*f,vw/2+arrayl[n1].x*f,vh/2 -arrayl[n1].y*f,'#8D1F1F', 7);}
else {bmd.line(vw/2+arrayl[n1].x*f,vh/2-arrayl[n1].y*f,vw/2+arrayl[n2].x*f,vh/2 -arrayl[n2].y*f,'#8D1F1F', 7);
ct=ct+1;}

}*/
/*
 if(i==arrayl.length-1){bmdobj.line(vw/2+arrayl[n1].x*f,vh/2-arrayl[n1].y*f,vw/2+arrayl[n1].x*f,vh/2 -arrayl[n1].y*f,colr, 7);}
else {bmdobj.line(vw/2+arrayl[n1].x*f,vh/2-arrayl[n1].y*f,vw/2+arrayl[n2].x*f,vh/2 -arrayl[n2].y*f,colr, 7);
ct=ct+1;}*/

bmdobj.line(mundox/2+(arrayl[n1].x-ox)*f,mundoy/2-(arrayl[n1].y-oy)*f,
  mundox/2+(arrayl[n2].x-ox)*f,mundoy/2 -(arrayl[n2].y-oy)*f,colr, 7);
ct=ct+1;

}

//fon.x=arrayl[9].x;
//fon.y=arrayl[9].y;

//fon.x=game.world.centerX;
//fon.y=vh/2+arrayl[9].y;


fy1=[];
fx1=[];


}




      console.log("touchscreen is", VirtualJoystick.touchScreenAvailable() ? "available" : "not available");
  
      var joystick  = new VirtualJoystick({
        container : document.getElementById('phaser-example'),
        mouseSupport  : true,
      });
      joystick.addEventListener('touchStart', function(){
        console.log('down')
      })
      joystick.addEventListener('touchEnd', function(){
        console.log('up')
      })

      setInterval(function(){


        var outputEl  = document.getElementById('result');
       
          fon.x=fon.x+Math.sin(Math.PI* joystick.deltaX()/180)*10;
         // miyc=Math.pow(Math.pow(joystick.deltaY(),2),1/2)
       // midy=joystick.deltaY()/(Math.pow(Math.pow(joystick.deltaY(),2),1/2)+0.00001);
       //fon.x=fon.x+joystick.deltaX();
       fon.y=fon.y+joystick.deltaY()/(Math.pow(Math.pow(joystick.deltaY(),2),1/2)+0.00001)*10;
        fon.x=fon.x+joystick.deltaX()/(Math.pow(Math.pow(joystick.deltaX(),2),1/2)+0.00001)*10;
      //nuevosnumeros();
/*   nuevosnumeros()

        outputEl.innerHTML  = '<b>Result:</b> '
          + ' dx:'+joystick.deltaX()
          + ' dy:'+joystick.deltaY()
          + (joystick.right() ? ' right'  : '')
          + (joystick.up()  ? ' up'   : '')
          + (joystick.left()  ? ' left' : '')
          + (joystick.down()  ? ' down'   : '') */
      }, 1/30 * 1000);


      function btflechad_phaser(visi){
editex.visiblebasico(visi);
editex.visibletrigono(!visi);
//editex.visiblebasico(false);
      }


