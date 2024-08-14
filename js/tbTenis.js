const borneVue=6;//amplitude de deplacement de la camera

 
function init(){
 var stats = initStats();
    // creation de rendu et de la taille
 let rendu = new THREE.WebGLRenderer({ antialias: true });
 rendu.shadowMap.enabled = true;
 let scene = new THREE.Scene();   

// Enable shadows in the renderer
rendu.shadowMap.type = THREE.PCFSoftShadowMap;


 let camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
 rendu.shadowMap.enabled = true;
 rendu.setClearColor(new THREE.Color(0xFFFFFF));
 rendu.setSize(window.innerWidth*.9, window.innerHeight*.9);
 cameraLumiere(scene,camera);
 lumiere(scene);
 repere(scene);
 menugui(camera,scene);

  //*********************************************
  //     DEBUT  PARTIE GEOMETRIE
  //*********************************************
    // position initiale des raquettes
    var pos=new THREE.Vector3(-5,5,8)
    var pos2=new THREE.Vector3(5,-5,8)

    // construit les raquettes et renvoie la liste des objet pour modifier sa position dans l'animation 
    let RqtJ=raquette(scene,0xffff00,pos,1)
    let RqtR=raquette(scene,0xff0000,pos2,2)

   // construction du sol 
    sol(scene);
   // construction pied de table  la partie cylindrique 
    pied(scene,1.2,-5.2,1.8,0x333533);
    pied(scene,5.2,-1.2,1.8,0x333533);
    pied(scene,2,2,1.8,0x333533);
    pied(scene,-1.2,5.2,1.8,0x333533);
    pied(scene,-5.2,1.2,1.8,0x333533);
    pied(scene,-2,-2,1.8,0x333533);
    
  
  // points de control  lathe  pour l'initialisation  le reste se fait avec le GUI 
   // quatres points pour la bez3
  let tabP=[[0.1,-0.6,0],
    [0.3,-0.3,0],
    [0.3,0.3,0],
    [0.3,0.5,0]
    ]
    // trois our la bez 2
    let tabQ=[[0.3,0.6,0],
    [0.2,0.7,0],
    [0.6,0.9,0]
    ]
     // lathes du pied 
    piedTable(scene,1.2, tabP, tabQ);

    // borduers de la table 

    // table
    var tableMaterialt = new THREE.MeshPhongMaterial({ color: 0x0077b6 }); // Brun
    var tabletopGeometryt = new THREE.BoxGeometry(7, 12, 0.3);
    var tabletop = new THREE.Mesh(tabletopGeometryt, tableMaterialt);
    tabletop.rotateZ(Math.PI/4)
    tabletop.position.set(0, 0, 5);
    scene.add(tabletop)

    // centre
    var tableMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff }); // Brun
    var tabletopGeometry = new THREE.BoxGeometry(0.08, 12, 0.31);
    var tablec = new THREE.Mesh(tabletopGeometry, tableMaterial);
    tablec.rotateZ(Math.PI/4)
    tablec.position.set(0, 0, 5);
    scene.add(tablec)

    // gauche
    var tableMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff }); // Brun
    var tabletopGeometry = new THREE.BoxGeometry(0.1, 12, 0.32);
    var tableG = new THREE.Mesh(tabletopGeometry, tableMaterial);
    tableG.rotateZ(Math.PI/4)
    tableG.position.set(2.44, 2.44, 5);
    scene.add(tableG)

    // droite
    var tableMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff }); // Brun
    var tabletopGeometry = new THREE.BoxGeometry(0.1, 12, 0.32);
    var tableD = new THREE.Mesh(tabletopGeometry, tableMaterial);
    tableD.rotateZ(Math.PI/4)
    tableD.position.set(-2.44, -2.44, 5);
    scene.add(tableD)

    // Haute
    var tableMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff }); // Brun
    var tabletopGeometry = new THREE.BoxGeometry(0.1, 7, 0.32);
    var tableH = new THREE.Mesh(tabletopGeometry, tableMaterial);
    tableH.rotateZ(-Math.PI/4)
    tableH.position.set(4.27, -4.27, 5);
    scene.add(tableH)


    // base
    var tableMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff }); // Brun
    var tabletopGeometry = new THREE.BoxGeometry(0.1, 7, 0.32);
    var tableB = new THREE.Mesh(tabletopGeometry, tableMaterial);
    tableB.rotateZ(-Math.PI/4)
    tableB.position.set(-4.27, 4.27, 5);
    scene.add(tableB)

    // bords de la grille support de la grille (cylindre )
    bord(scene,2.45, 2.45, 5.4);
    bord(scene,-2.45, -2.45, 5.4);

    //  construction de la grillel 
   // Dimensions de la grille
   const material = new THREE.LineBasicMaterial({
    color: 0x9ef01a
  });
  // construction des lignes horizontaux 
for(let i=6; i>5.5; i=i-0.05){
  const points = [];
  points.push( new THREE.Vector3( 2.3, 2.3, i ) );
  points.push( new THREE.Vector3( -2.3,-2.3, i) );
  const geometry = new THREE.BufferGeometry().setFromPoints( points );
  const line = new THREE.Line( geometry, material );
  scene.add( line );
}
//lignes verticaux 
for(let i=2.3; i>-2.35; i=i-0.05){
  const points = [];
  points.push( new THREE.Vector3( i, i, 5.5 ) );
  points.push( new THREE.Vector3( i, i,6) );
  const geometry = new THREE.BufferGeometry().setFromPoints( points );
  const line = new THREE.Line( geometry, material );
  scene.add( line );
}

    // construction des support horitaux les deux ligne en haut et bas du fillet 

    const material1 = new THREE.LineBasicMaterial({
      color: 0xff0000,
      linewidth: 2
    });
    const points1 = [];
    points1.push( new THREE.Vector3( 2.44, 2.44, 5.5 ) );
    points1.push( new THREE.Vector3( -2.44,-2.44, 5.5) );
    const geometry1 = new THREE.BufferGeometry().setFromPoints( points1 );
    const line1 = new THREE.Line( geometry1, material1 );
    scene.add( line1 );

    const points2 = [];
    points2.push( new THREE.Vector3( 2.44, 2.44, 6 ) );
    points2.push( new THREE.Vector3( -2.44,-2.44, 6) );
    const geometry2 = new THREE.BufferGeometry().setFromPoints( points2 );
    const line2 = new THREE.Line( geometry2, material1 );
    scene.add( line2 );


    // // points engagement
    var p1=new THREE.Vector3(-2.81,4.84,8)
    var p2=new THREE.Vector3(-1.87,3.9,8.5)

    var p3=new THREE.Vector3(-1.32,3.35,5.2)

    var p5=new THREE.Vector3(-0.63,2.66,7)
    var p6=new THREE.Vector3(-0.01,2.01,7)

    var p7=new THREE.Vector3(1.01,1.01,7.2)

    var p9=new THREE.Vector3(1.73,0.3,7)
    var p10=new THREE.Vector3(2.19,-0.16,7)

    var p11=new THREE.Vector3(2.69,-0.66,5.2)

    var p13=new THREE.Vector3(3.31,-1.29,8.5)
    var p14=new THREE.Vector3(4.98,-2.96,8)
   
    let tabC1=[p1,p2,p3]
    let tabC2=[p3,p5,p6,p7]
    let tabC3=[p7,p9,p10,p11]
    let tabC4=[p11,p13,p14]
    // // points echange 1
    
    var e11=new THREE.Vector3(4.98,-2.96,8)
    var e12=new THREE.Vector3(2.79,-1.66,10)

    var e13=new THREE.Vector3(0,0,8)
    var e14=new THREE.Vector3(-0.62,0.37,7)

    var e15=new THREE.Vector3(-1.12,0.66,7)
    var e16=new THREE.Vector3(-1.69,1,5.2)

    var e17=new THREE.Vector3(-2.88,1.71,9)
    var e18=new THREE.Vector3(-4.74,2.81,8)


     let tabe11=[e11,e12,e13]
     let tabe12=[e13,e14,e15,e16]
     let tabe13=[e16,e17,e18]

    // points echange 2
    var e21=new THREE.Vector3(-4.74,2.81,8)
    var e22=new THREE.Vector3(-3.45,1.52,10)

    var e23=new THREE.Vector3(-0.96,-0.96,8)
    var e24=new THREE.Vector3(-0.53,-1.4,7)

    var e25=new THREE.Vector3(0.03,-1.97,7)
    var e26=new THREE.Vector3(0.39,-2.32,5.2)

    var e27=new THREE.Vector3(1.39,-3.32,9)
    var e28=new THREE.Vector3(3.05,-4.98,8)


    let tabe21=[e21,e22,e23]
    let tabe22=[e23,e24,e25,e26]
    let tabe23=[e26,e27,e28]


        // points echange 3
    var e31=new THREE.Vector3(3.05,-4.98,8)
    var e32=new THREE.Vector3(1.64,-2.62,10)

    var e33=new THREE.Vector3(0,0,8)
    var e34=new THREE.Vector3(-0.33,0.68,7)

    var e35=new THREE.Vector3(-0.63,1.19,7)
    var e36=new THREE.Vector3(-0.96,1.74,5.2)

    var e37=new THREE.Vector3(-1.65,2.9,9)
    var e38=new THREE.Vector3(-2.81,4.84,8)


    let tabe31=[e31,e32,e33]
    let tabe32=[e33,e34,e35,e36]
    let tabe33=[e36,e37,e38]

          // points echange 4
    var e41=new THREE.Vector3(-2.81,4.84,8)
    var e42=new THREE.Vector3(-1.32,3.35,10)

    var e43=new THREE.Vector3(1.01,1.01,8)
    var e44=new THREE.Vector3(1.73,0.3,7)

    var e45=new THREE.Vector3(2.19,-0.16,7)
    var e46=new THREE.Vector3(2.69,-0.66,5.2)

    var e47=new THREE.Vector3(3.31,-1.29,9)
    var e48=new THREE.Vector3(4.98,-2.96,8)


    let tabe41=[e41,e42,e43]
    let tabe42=[e43,e44,e45,e46]
    let tabe43=[e46,e47,e48]
  //
  //tabC1,tabC2,tabC3,tabC4,
let listTabPoints=[
  tabe11,tabe12,tabe13,
  tabe21,tabe22,tabe23,
  tabe31,tabe32,tabe33,
  tabe41,tabe42,tabe43
]

// construiction de la balle 
  let r=0.2
  var sphereGeometry= new THREE.SphereGeometry(r,100,80)// respectivement dimension du point, meridien ,parallele
  // set properties 
  var sphereMaterial = new THREE.MeshPhongMaterial({color:0x9acd32,opacity:0.5});
  // built the real circle from objet and its properties
  let sphere= new THREE.Mesh(sphereGeometry,sphereMaterial)
  sphere.position.set(0,0,7)
  scene.add(sphere)

  let pt3 = new Array(300+1);
  let a = 3/4*r;
  let b= r-a;
  //marquage blanc sur la balle de tennis
for (let k = 0; k<=300; k++) {
let t = (k / 300) * Math.PI * 2;
 const x0 = a*Math.cos(t) + b*Math.cos(3*t);
 const y0 = a*Math.sin(t) - b*Math.sin(3*t);
 const z0 = 2*Math.sqrt(a*b)*Math.sin(2*t);
 pt3[k] = new THREE.Vector3(x0,y0,z0);
}
  // Creation des points pour la courbe parametree
  let PtsTab = new THREE.BufferGeometry().setFromPoints(pt3);
  // Proprietes de la courbe
  let ProprieteCbe = new THREE.LineBasicMaterial( {color:0xffffff, linewidth: 1 } );
    //creation de la courbe parametree avec ses proprietes
    let courbePara = new THREE.Line( PtsTab, ProprieteCbe );
  //ajout de la courbe dans la scene
  scene.add(courbePara);

  

  // initialisation des constantes 
  var n=12  // 12 tableaux
  var d=n   // compteur pour les 12 tableau ( se decremente )
  let Eng=4 // 4 courbes pour l'engagement 
  let e=Eng  // compteur pour l'engagement ( se decrement )
  var t = 0;  // Paramètre de la courbe (varie de 0 à 1)
  var deltaT = 0.032;  // Ajustez la vitesse d'animation en fonction de vos besoins
  let cpt =1  // compteur pour lle nombre total d'engagement

   // choix arbitraire du nombre d'echange entre 5 et 10 inclus 
 let nbEchg=Math.floor(Math.random()*6)+5
 nbEchg= nbEchg+2 // +2 soit 1 pour l'engagement + 1 pour la comparaison sachant que le compteur comence à 1 
 // fin initialisation constantes 
  function echange(t,lstTab){
    // tableau des  points de controles  des 12 courbes  de bezier (echange minimal )
    let tab1=lstTab[0]
    let tab2=lstTab[1]
    let tab3=lstTab[2]
    let tab4=lstTab[3]
    let tab5=lstTab[4]
    let tab6=lstTab[5]
    let tab7=lstTab[6]
    let tab8=lstTab[7]
    let tab9=lstTab[8]
    let tab10=lstTab[9]
    let tab11=lstTab[10]
    let tab12=lstTab[11]
        
    if(d==n){
      var positionOnCurve = calculateBezierPoin12(t,tab1);// calcule la position à t à partire du polynome des bernstein et retourn un point avec ces coordonnées 
      sphere.position.copy(positionOnCurve);  // repositionne la sphère avec la nouvelle coordonnées 
      courbePara.position.copy(positionOnCurve); // idem pour le marquage 
     // pour inime la balle RqtR contient les elements constitutif de la raquette rouge
      if(t==0){
        for(let i=0; i<3; i++){
          // des ajustement sont fait 
          
           RqtR[i].position.copy(positionOnCurve);
           // on avance ou recule selon si raqR ou raqJ
           RqtR[i].position.y-=0.17
           RqtR[i].position.x+=0.17
           if(i==2){
            RqtR[i].position.z-=0.9 // on descend le manche 
             }
             // reajustement de la face noire de la raquette 
             if(RqtR[3]==1){
              RqtR[1].position.x-=0.02 
              RqtR[1].position.y+=0.02
              }else
              {
                RqtR[1].position.x+=0.02 
                RqtR[1].position.y-=0.02        
                 }
      }
    }
      if(t>=1){ // si la balle est en fait de coube( t de 0 à 1.poussière )
        d-=1
        t=0  // reinitialisation pour la courbe suivante 
        deltaT = 0.058; //idem sachant que les courbes l'ont pas les mêmes longueur donc ajustement de la vittesse selon si bez2 out bez3 
      }
     }
  
     if(d==11){
      
      var positionOnCurve = calculateBezierPoin13(t,tab2);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t>=1){
        d-=1
        t=0
        deltaT = 0.032;
      }
      
    }
    if(d==10){
      
      var positionOnCurve = calculateBezierPoin12(t,tab3);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t>=1){
        d-=1
        t=0
        deltaT = 0.032;
        cpt+=1 // incremente à la fin d'un echange
        for(let i=0; i<3; i++){
              
          RqtJ[i].position.copy(positionOnCurve);
          RqtJ[i].position.y+=0.17
          RqtJ[i].position.x-=0.17
          if(i==2){
           RqtJ[i].position.z-=0.9
       }
       if(RqtJ[3]==1){
        RqtJ[1].position.x-=0.02 
        RqtJ[1].position.y+=0.02
        }else
        {
          RqtJ[1].position.x+=0.02 
          RqtJ[1].position.y-=0.02        
           }
       
     
   }
      }
   //   
    }
    if(d==9){
      var positionOnCurve = calculateBezierPoin12(t,tab4);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t==0){
        for(let i=0; i<3; i++){
          
           RqtJ[i].position.copy(positionOnCurve);
           RqtJ[i].position.y+=0.17
           RqtJ[i].position.x-=0.17
           if(i==2){
            RqtJ[i].position.z-=0.9
        }
        if(RqtJ[3]==1){
          RqtJ[1].position.x-=0.02 
          RqtJ[1].position.y+=0.02
          }else
          {
            RqtJ[1].position.x+=0.02 
            RqtJ[1].position.y-=0.02        
             }
      }
    }
      if(t>=1){
        d-=1
        t=0
        deltaT = 0.058;
      }
     }
      
     if(d==8){
      
      var positionOnCurve = calculateBezierPoin13(t,tab5);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t>=1){
        d-=1
        t=0
        deltaT = 0.032;
      }
      
    }
    if(d==7){
      
      var positionOnCurve = calculateBezierPoin12(t,tab6);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t>=1){
        d-=1
        t=0
        deltaT = 0.032;
        cpt+=1
        for(let i=0; i<3; i++){
              
          RqtR[i].position.copy(positionOnCurve);
          RqtR[i].position.y-=0.17
          RqtR[i].position.x+=0.17
          if(i==2){
           RqtR[i].position.z-=0.9
       }
       if(RqtR[3]==1){
        RqtR[1].position.x-=0.02 
        RqtR[1].position.y+=0.02
        }else
        {
          RqtR[1].position.x+=0.02 
          RqtR[1].position.y-=0.02        
           }
   }
      }
  // 
    }
    if(d==6){
      var positionOnCurve = calculateBezierPoin12(t,tab7);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t==0){
        for(let i=0; i<3; i++){
          
           RqtR[i].position.copy(positionOnCurve);
           RqtR[i].position.y-=0.17
           RqtR[i].position.x+=0.17
           if(i==2){
            RqtR[i].position.z-=0.9
        }
        if(RqtR[3]==1){
          RqtR[1].position.x-=0.02 
          RqtR[1].position.y+=0.02
          }else
          {
            RqtR[1].position.x+=0.02 
            RqtR[1].position.y-=0.02        
             }
      }
    }
      if(t>=1){
        d-=1
        t=0
        deltaT = 0.058;
      }
     }
    //  
     if(d==5){
      
      var positionOnCurve = calculateBezierPoin13(t,tab8);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t>=1){
        d-=1
        t=0
        deltaT = 0.032;
      }
      
    }
    if(d==4){
      
      var positionOnCurve = calculateBezierPoin12(t,tab9);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t>=1){
        d-=1
        t=0
        deltaT = 0.032;
        cpt+=1
        for(let i=0; i<3; i++){
              
          RqtJ[i].position.copy(positionOnCurve);
          RqtJ[i].position.y+=0.17
          RqtJ[i].position.x-=0.17
          if(i==2){
           RqtJ[i].position.z-=0.9
       }
       if(RqtJ[3]==1){
        RqtJ[1].position.x-=0.02 
        RqtJ[1].position.y+=0.02
        }else
        {
          RqtJ[1].position.x+=0.02 
          RqtJ[1].position.y-=0.02        
           }
     
   }

      }
  //    
    }
    if(d==3){
      var positionOnCurve = calculateBezierPoin12(t,tab10);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t==0){
        for(let i=0; i<3; i++){
          
           RqtJ[i].position.copy(positionOnCurve);
           RqtJ[i].position.y+=0.17
           RqtJ[i].position.x-=0.17
           if(i==2){
            RqtJ[i].position.z-=0.9
        }
        if(RqtJ[3]==1){
          RqtJ[1].position.x-=0.02 
          RqtJ[1].position.y+=0.02
          }else
          {
            RqtJ[1].position.x+=0.02 
            RqtJ[1].position.y-=0.02        
             }
      }
    }
      if(t>=1){
        d-=1
        t=0
        deltaT = 0.058;
      }
     }
    //  
     if(d==2){
      
      var positionOnCurve = calculateBezierPoin13(t,tab11);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t>=1){
        d-=1
        t=0
        deltaT = 0.032;
      }
      
    }
    if(d==1){
      
      var positionOnCurve = calculateBezierPoin12(t,tab12);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t>=1){
        d=n
        t=0
        deltaT = 0.032;
        cpt+=1
        for(let i=0; i<3; i++){
              
          RqtR[i].position.copy(positionOnCurve);
          RqtR[i].position.y-=0.17
          RqtR[i].position.x+=0.17
          if(i==2){
           RqtR[i].position.z-=0.9
        }
        if(RqtR[3]==1){
          RqtR[1].position.x-=0.02 
          RqtR[1].position.y+=0.02
          }else
          {
            RqtR[1].position.x+=0.02 
            RqtR[1].position.y-=0.02        
             }
       }
      }   
    }
  }

  function engagement(t,tab1,tab2,tab3,tab4){
          
    if(e==Eng){
      var positionOnCurve = calculateBezierPoin12(t,tab1);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t==0){
      for(let i=0; i<3; i++){
        
         RqtJ[i].position.copy(positionOnCurve);
         RqtJ[i].position.y+=0.17
         RqtJ[i].position.x-=0.17
         if(i==2){
          RqtJ[i].position.z-=0.9  
      }
      // reajustement de la face noire de la raquette 
      if(RqtJ[3]==1){
        RqtJ[1].position.x-=0.02 
        RqtJ[1].position.y+=0.02
        }else
        {
          RqtJ[1].position.x+=0.02 
          RqtJ[1].position.y-=0.02        
           }
    }
  }
      if(t>=1){
        cpt=1
        e-=1
        t=0
        deltaT = 0.058;
        
      }
     }

    //  
     if(e==3){
      
      var positionOnCurve = calculateBezierPoin13(t,tab2);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t>=1){
        e-=1
        t=0
        deltaT = 0.058;
       
      }
      
    }
    if(e==2){
      
      var positionOnCurve = calculateBezierPoin13(t,tab3);
      sphere.position.copy(positionOnCurve);
      courbePara.position.copy(positionOnCurve);
      if(t>=1){
        e-=1
        t=0
        deltaT = 0.032;
        
      }
    }
      if(e==1){
      
        var positionOnCurve = calculateBezierPoin12(t,tab4);
        sphere.position.copy(positionOnCurve);
        courbePara.position.copy(positionOnCurve);
      
        if(t>=1){
          e=Eng
          t=0
          deltaT = 0.032
          cpt+=1  
          
            for(let i=0; i<3; i++){
              
               RqtR[i].position.copy(positionOnCurve);
               RqtR[i].position.y-=0.17
               RqtR[i].position.x+=0.17
               if(i==2){
                RqtR[i].position.z-=0.9
            }
            if(RqtR[3]==1){
              RqtR[1].position.x-=0.02 
              RqtR[1].position.y+=0.02
              }else
              {
                RqtR[1].position.x+=0.02 
                RqtR[1].position.y-=0.02        
                 }
        }
        }
    }
  
  }
  //*********************************************
  //     FIN  PARTIE GEOMETRIE
  //*********************************************

 renduAnim();
 
  // definition des fonctions idoines
 function posCamera(){
  camera.position.set(menuGUI.cameraxPos*testZero(menuGUI.cameraZoom),menuGUI.camerayPos*testZero(menuGUI.cameraZoom),menuGUI.camerazPos*testZero(menuGUI.cameraZoom));
  camera.lookAt(menuGUI.cameraxDir,menuGUI.camerayDir,menuGUI.camerazDir);
  // actuaPosCameraHTML();
 }
  // ajoute le rendu dans l'element HTML
 document.getElementById("webgl").appendChild(rendu.domElement);
   
  // affichage de la scene
 rendu.render(scene, camera);
  
 
 function reAffichage() {
  setTimeout(function () {
   posCamera();
  }, 200);// fin setTimeout(function ()
    // rendu avec requestAnimationFrame
  rendu.render(scene, camera);
 }// fin fonction reAffichage()
 


function renduAnim() {
    stats.update();
          if(cpt<nbEchg){
          if(cpt<2){
            engagement(t,tabC1,tabC2,tabC3,tabC4)
          }else{
              echange(t,listTabPoints)
           } 
          }
           t = (t + deltaT) % (1+deltaT);
           console.log(t)
           
    // rendu avec requestAnimationFrame
    requestAnimationFrame(renduAnim);
// ajoute le rendu dans l'element HTML
    rendu.render(scene, camera);
  }
 
} // fin fonction init()
