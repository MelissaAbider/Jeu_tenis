//  fonctions in this file are not necessary called to be used just to train my self en for revise 
  // points engagement
  var p1=new THREE.Vector3(-2.81,4.84,8)
  var p2=new THREE.Vector3(-1.87,3.9,8.5)

  var p3=new THREE.Vector3(-1.32,3.35,5.2)
  var p4=new THREE.Vector3(-1.32,3.35,5.2)

  var p5=new THREE.Vector3(-0.63,2.66,7)
  var p6=new THREE.Vector3(-0.01,2.01,7)

  var p7=new THREE.Vector3(1.01,1.01,7.2)
  var p8=new THREE.Vector3(1.01,1.01,7.2)

  var p9=new THREE.Vector3(1.73,0.3,7)
  var p10=new THREE.Vector3(2.19,-0.16,7)

  var p11=new THREE.Vector3(2.69,-0.66,5.2)
  var p12=new THREE.Vector3(2.69,-0.66,5.2)

  var p13=new THREE.Vector3(3.31,-1.29,8.5)
  var p14=new THREE.Vector3(4.98,-2.96,8)
 
  let tabC1=[p1,p2,p3]
  let tabC2=[p4,p5,p6,p7]
  let tabC3=[p8,p9,p10,p11]
  let tabC4=[p12,p13,p14]
  // points echange 1
  
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


  // let tabe21=[e21,e22,e23]
  // let tabe22=[e23,e24,e25,e26]
  // let tabe23=[e26,e27,e28]

  //     // points echange 3
  // var e31=new THREE.Vector3(3.05,-4.98,8)
  // var e32=new THREE.Vector3(1.64,-2.62,10)

  // var e33=new THREE.Vector3(0,0,8)
  // var e34=new THREE.Vector3(-0.33,0.68,7)

  // var e35=new THREE.Vector3(-0.63,1.19,7)
  // var e36=new THREE.Vector3(-0.96,1.74,5.2)

  // var e37=new THREE.Vector3(-1.65,2.9,9)
  // var e38=new THREE.Vector3(-2.81,4.84,8)


  // let tabe31=[e31,e32,e33]
  // let tabe32=[e33,e34,e35,e36]
  // let tabe33=[e36,e37,e38]

  //       // points echange 4
  // var e41=new THREE.Vector3(-2.81,4.84,8)
  // var e42=new THREE.Vector3(-1.32,3.35,10)

  // var e43=new THREE.Vector3(1.01,1.01,8)
  // var e44=new THREE.Vector3(1.73,0.3,7)

  // var e45=new THREE.Vector3(2.19,-0.16,7)
  // var e46=new THREE.Vector3(2.69,-0.66,5.2)

  // var e47=new THREE.Vector3(3.31,-1.29,9)
  // var e48=new THREE.Vector3(4.98,-2.96,8)


  // let tabe41=[e41,e42,e43]
  // let tabe42=[e43,e44,e45,e46]
  // let tabe43=[e46,e47,e48]

// return a vector with same direction and sens but norm equal to 1
function normaliser(obj){
  return obj.normalize();
}
function traceVecteurUnitaire(MaScene ,A,B,CoulHexa,longCone,RayonCone){
  var vecAB = new THREE.Vector3(B.x-A.x, B.y-A.y, B.z-A.z);
  vecAB.normalize();// vecteur unitaire 
  MaScene.add( new THREE.ArrowHelper( vecAB, A, B.distanceTo(A),
CoulHexa,longCone,RayonCone ));

}
function traceVecteur(MaScene ,A,B,CoulHexa,longCone,RayonCone){
  var vecAB = new THREE.Vector3(B.x-A.x, B.y-A.y, B.z-A.z);
  vecAB.normalize();// vecteur unitaire 

  MaScene.add( new THREE.ArrowHelper( vecAB, A, B.distanceTo(A),
  CoulHexa,longCone,RayonCone ));

}

function prodScal(vectU,vectV){
  return vectU.dot(vectV);// produit scalaire 
}
function det(vectU,vectV){
 return vectU.cross(vectV);    // produit vectoriel le vecteur de gauche est perdu 
//  vectW.crossVectors(vectU,vectV) // sans ecrasement du premier vecteur 
// return vectW
}
function angles(vect){
  return vect.angle();
}
//vecteur AB qui est une fleche
function vecteur(MaScene,A,B,CoulHexa,longCone,RayonCone){
 var vecAB = new THREE.Vector3( B.x-A.x, B.y-A.y, B.z-A.z );
 vecAB.normalize();
 MaScene.add( new THREE.ArrowHelper( vecAB, A, B.distanceTo(A), CoulHexa, longCone, RayonCone ));
}
//affichage du repere dans la scene
function repere(MaScene){ 
    var PointO3 = new THREE.Vector3( 0,0,0 );
    var vecI = new THREE.Vector3( 1, 0, 0 );
    var vecJ = new THREE.Vector3( 0, 1, 0 );
    var vecK = new THREE.Vector3( 0, 0, 1 );
    vecteur(MaScene,PointO3,vecI, 0xFF0000, 0.25, 0.125 );
    vecteur(MaScene,PointO3,vecJ, 0x00FF00, 0.25, 0.125 );
    vecteur(MaScene,PointO3,vecK, 0x0000FF, 0.25, 0.125 );
}

const PrecisionArrondi=50;
// test si un nombre est nul
const epsilon = 0.00000001;
function testZero(x){
  var val=parseFloat(Number(x).toPrecision(PrecisionArrondi));
  if (parseFloat(Math.abs(x).toPrecision(PrecisionArrondi))<epsilon) val=0;
  return val;
}



// function traceBezierTab (scene,tabPt,nb,CoulHexa,epai){
// let cbeBez = new THREE.CubicBezierCurve3(tabPt);
// let cbeGeometry = new THREE.Geometry();
// cbeGeometry.vertices = cbeBez.getPoints(nb);
// let material = new THREE.LineBasicMaterial(
// { color : CoulHexa ,
// linewidth: epai
// } );
// // courbe de Bezier avec les proprietes geometriques et l’aspect
// let BezierCubique = new THREE.Line( cbeGeometry, material );
// scene.add(BezierCubique);
// }
// construit les lathes du pied avec l coub
function latheBezTab ( nbePtCbe, nbePtRot, tabP, coul, opacite, bolTranspa){

let cbeBez = new THREE.CubicBezierCurve3(tabP);
var tabPoints = cbeBez.getPoints(nbePtCbe); // la courbe est divisée en 10 segement equidistant
var theta0 = 0;     // Angle de début (en radians)
var thetaLg = Math.PI * 2; // Angle d'étendue (360 degrés en radians)
var latheGeometry = new THREE.LatheGeometry(tabPoints, nbePtRot, theta0, thetaLg);
var latheMaterial = new THREE.MeshPhongMaterial({
  color: coul, // Couleur du lathe (vert dans cet exemple)
  shininess: 50, // Brillance du lathe (valeur entre 0 et 100)
  side: THREE.DoubleSide, // Rend les deux côtés du matériau visibles (intérieur et extérieur)
  transparent: bolTranspa, // Rend le lathe non transparent
  opacity: opacite// Niveau de transparence du prisme (0 = complètement transparent, 1 = complètement opaque)
 }); // Choisissez un matériau approprié
var latheMesh = new THREE.Mesh(latheGeometry, latheMaterial);
return latheMesh;
}
// construit la sol à partir de deux faces triangulaire 
function  sol(scene){
  
  // declaration des points A B C D pour construire le sol 
  let PtA = new THREE.Vector3 (25,0,0 );
  let PtB = new THREE.Vector3 (0,25,0 );
  let PtC = new THREE.Vector3 (-25,0,0 );
  let PtD = new THREE.Vector3 (0,-25,0 );

  // déclaration de deux geometrie( deux triangle qui forment la sol)
  let faceACB = new THREE.Geometry();
  let faceADC = new THREE.Geometry();

  // affectation des sommets 
  faceACB.vertices = [PtA, PtC, PtB ];
  faceADC.vertices = [PtA, PtD, PtC ];
  
  faceACB.faces = [new THREE.Face3 ( 0, 1, 2 ) ];
  faceADC.faces = [new THREE.Face3 ( 0, 1, 2 ) ];
  let coul=0x007f5f

  faceTriangulaire(scene,PtA,PtB,PtC,coul)
   faceTriangulaire(scene,PtA,PtD,PtC,coul)
   

}
// construis une surface triangulaire de sommet PtA, PtB, PtC
function faceTriangulaire(MaScene,PtA,PtB,PtC,CoulFace){
  var faceT = new THREE.Geometry();
     faceT.vertices = [PtA, PtB, PtC];
     faceT.faces = [
         new THREE.Face3( 0, 2, 1 )
     ];
     var faceTM = surfPhong(faceT,CoulFace,0.75,false,"#636e72");
     MaScene.add(faceTM);
     return faceT;
 }
 // construit les cylindre du pied 
function pied(scene,X,Y,Z,coul){
const geometry = new THREE.CylinderGeometry( 0.15, 0.15, 3.6, 100,1, false); 
geometry.rotateX(Math.PI / 2);
const material = new THREE.MeshPhongMaterial( {color: coul} ); 
const cylinder = new THREE.Mesh( geometry, material );
cylinder.castShadow = true; // Enable shadow casting
geometry.vertices.forEach(function(sommet) {
    sommet.x += X;
    sommet.y += Y;
    sommet.z += Z;
});
geometry.verticesNeedUpdate = true; // Indique à Three.js de mettre à jour les positions des sommets
scene.add( cylinder );  

}
// construit les bordures de la table 
function bord(scene,X,Y,Z){
  const geometry = new THREE.CylinderGeometry( 0.08, 0.08, 1.5, 100,1, false); 
  geometry.rotateX(Math.PI / 2);
  const material = new THREE.MeshPhongMaterial( {color: 0xd7263d} ); 
  const cylinder = new THREE.Mesh( geometry, material );
  cylinder.castShadow = true; // autorise l'affichage d'ombre 
  geometry.vertices.forEach(function(sommet) {
      sommet.x += X;
      sommet.y += Y;
      sommet.z += Z;
  });
  geometry.verticesNeedUpdate = true; // Indique à Three.js de mettre à jour les positions des sommets
  scene.add( cylinder );  
  
  }
  

  // construit le lathe avec la courbe de bezier degree 3 
function latheBezTab3 ( nbePtCbe, nbePtRot, tabP, coul, opacite, bolTranspa){

  let cbeBez = new THREE.CubicBezierCurve3(tabP[0],tabP[1],tabP[2],tabP[3]);
  var tabPoints = cbeBez.getPoints(nbePtCbe); // la courbe est divisée en 10 segement equidistant
  var theta0 = 0;     // Angle de début (en radians)
  var thetaLg = Math.PI * 2; // Angle d'étendue (360 degrés en radians)
  var latheGeometry = new THREE.LatheGeometry(tabPoints, nbePtRot, theta0, thetaLg);
  latheGeometry.rotateX(Math.PI / 2);

  var latheMaterial = new THREE.MeshPhongMaterial({
    color: coul, // Couleur du lathe (vert dans cet exemple)
    shininess: 50, // Brillance du lathe (valeur entre 0 et 100)
    side: THREE.DoubleSide, // Rend les deux côtés du matériau visibles (intérieur et extérieur)
    transparent: bolTranspa, // Rend le lathe non transparent
    opacity: opacite// Niveau de transparence du prisme (0 = complètement transparent, 1 = complètement opaque)
   }); // Choisissez un matériau approprié
   let listLathes=[];
   for(let i=0 ;i<6;i++){
  listLathes.push( new THREE.Mesh(latheGeometry, latheMaterial));// cree une liste de 6 lathe qu'on peut repartir dans le plan
   }
  return listLathes;
  }

  // function latheBezTab2 ( nbePtCbe, nbePtRot, tabP, coul, opacite, bolTranspa){
  //   var cbeBez = new THREE.QuadraticBezierCurve3(tabP[0],tabP[1],tabP[2])
  //   var tabPoints = cbeBez.getPoints(nbePtCbe); // la courbe est divisée en 10 segement equidistant
  //   var theta0 = 0;     // Angle de début (en radians)
  //   var thetaLg = Math.PI * 2; // Angle d'étendue (360 degrés en radians)
  //   var latheGeometry = new THREE.LatheGeometry(tabPoints, nbePtRot, theta0, thetaLg);
  //   var latheMaterial = new THREE.MeshPhongMaterial({
  //     color: coul, // Couleur du lathe (vert dans cet exemple)
  //     shininess: 50, // Brillance du lathe (valeur entre 0 et 100)
  //     side: THREE.DoubleSide, // Rend les deux côtés du matériau visibles (intérieur et extérieur)
  //     transparent: bolTranspa, // Rend le lathe non transparent
  //     opacity: opacite// Niveau de transparence du prisme (0 = complètement transparent, 1 = complètement opaque)
  //    }); // Choisissez un matériau approprié
  //    latheGeometry.rotateX(Math.PI / 2)
  //    let listLathes=[];
  //    for(let i=0 ;i<12;i++){
  //   listLathes.push( new THREE.Mesh(latheGeometry, latheMaterial));// cree une liste de 12 lathe qu'on peut repartir dans le plan
  //    }
  //   return listLathes;
  //   }
  

  /// variable temporaire pour contenir les lathe, on s'en sert dans IsObjetInScene()
    let temp
    let temp2
    // construit tout le pied de table avec les cylindre et les lathes 
    function  piedTable( scene,coefLin,tabP,tabQ){
    
    
      let p0=tabP[0]
      let p0x=p0[0]
      let p0y=p0[1]
      let p0z=p0[2]
    
      let p1=tabP[1]
      let p1x=p1[0]
      let p1y=p1[1]
      let p1z=p1[2]
    
      let p2=tabP[2]
      let p2x=p2[0]
      let p2y=p2[1]
      let p2z=p2[2]
    
      let p3=tabP[3]
      let p3x=p3[0]
      let p3y=p3[1]
      let p3z=p3[2]
    
        // Pour Q1
      let q1 = tabQ[0];
      let q1x = q1[0];
      let q1y = q1[1];
      let q1z = q1[2];
    
      // Pour Q2
      let q2 = tabQ[1];
      let q2x = q2[0];
      let q2y = q2[1];
      let q2z = q2[2];
    
      // Pour Q3
      let q3 = tabQ[2];
      let q3x = q3[0];
      let q3y = q3[1];
      let q3z = q3[2];
    
     // points de control des deux lathes avec cbez3 
      let P0 = new THREE.Vector3(p0x, p0y, p0z);
      let P1 = new THREE.Vector3(p1x, p1y, p1z);
      let P2 = new THREE.Vector3(p2x, coefLin*p2x, p2z);
      let P3 = new THREE.Vector3(p3x, coefLin*p3x, p3z);
    
      let Q0 = new THREE.Vector3(p3x, coefLin*p3x, p3z);
      let Q1 = new THREE.Vector3(q1x, coefLin*q1x, q1z);
      let Q2 = new THREE.Vector3(q2x, q2y, q2z);
      let Q3 = new THREE.Vector3(q3x, q3y, q3z);
  
    
    
        let tabP1=[P0,P1,P2,P3]
        let tabP2=[Q0,Q1,Q2,Q3]
     
        let b=4 // coefficient de liniarité en les jointures des deux lathes 

        let  listlathe=latheBezTab3(100,200,tabP1,0x00ff00,0.5,false)
       
        // supprime les lathe avant de reconstruire
      try {
        if(isObjectInScene(temp[0],scene)){
          for(let i=0 ;i<6;i++){
            scene.remove(temp[i])
             }
             temp=listlathe
         }else
         {
          temp=listlathe
         }
      } catch (error) {
        temp=listlathe
      }
         
          
        listlathe[0].position.x=1.2
        listlathe[0].position.y=-5.2
        listlathe[0].position.z=b
        scene.add(listlathe[0]);
    
        listlathe[1].position.x=5.2
        listlathe[1].position.y=-1.2
        listlathe[1].position.z=b
        scene.add(listlathe[1]);
    
        listlathe[2].position.x=2
        listlathe[2].position.y=2
        listlathe[2].position.z=b
        scene.add(listlathe[2]);
    
        listlathe[3].position.x=-1.2
        listlathe[3].position.y=5.2
        listlathe[3].position.z=b
        scene.add(listlathe[3]);
    
        listlathe[4].position.x=-5.2
        listlathe[4].position.y=1.2
        listlathe[4].position.z=b
        scene.add(listlathe[4]);
    
        listlathe[5].position.x=-2
        listlathe[5].position.y=-2
        listlathe[5].position.z=b
        scene.add(listlathe[5]);
      

    let  listlathe2=latheBezTab3(100,200,tabP2,0xff0000,0.5,false)
    
    try {
      if(isObjectInScene(temp2[0],scene)){
        for(let i=0 ;i<6;i++){
          scene.remove(temp2[i])
           }
           temp2=listlathe2
       }else
       {
        temp2=listlathe2
       }
    } catch (error) {
      temp2=listlathe2
    }
       


    listlathe2[0].position.x=1.2
    listlathe2[0].position.y=-5.2
    listlathe2[0].position.z=b
    scene.add(listlathe2[0]);
    
    listlathe2[1].position.x=5.2
    listlathe2[1].position.y=-1.2
    listlathe2[1].position.z=b
    scene.add(listlathe2[1]);
    
    listlathe2[2].position.x=2
    listlathe2[2].position.y=2
    listlathe2[2].position.z=b
    scene.add(listlathe2[2]);
    
    listlathe2[3].position.x=-1.2
    listlathe2[3].position.y=5.2
    listlathe2[3].position.z=b
    scene.add(listlathe2[3]);
    
    listlathe2[4].position.x=-5.2
    listlathe2[4].position.y=1.2
    listlathe2[4].position.z=b
    scene.add(listlathe2[4]);
    
    listlathe2[5].position.x=-2
    listlathe2[5].position.y=-2
    listlathe2[5].position.z=b
    scene.add(listlathe2[5]);
    
    }

    function  raquette(scene,coulFace,p,n){
      // face utile(rouge ou  jaune)
      
      const geometry = new THREE.CylinderGeometry( 0.5,0.5,0.06, 50 ); 
      geometry.rotateZ(Math.PI / 4)
      const material = new THREE.MeshPhongMaterial( {
      color: coulFace ,
      shininess: 50, // Brillance du lathe (valeur entre 0 et 100)
      side: THREE.DoubleSide, // Rend les deux côtés du matériau visibles (intérieur et extérieur)
      transparent: true, // Rend le lathe non transparent
      opacity: 1// Niveau de transparence du prisme (0 = complètement transparent, 1 = complètement opaque)
     });
      const circle = new THREE.Mesh( geometry, material ); 

      circle.position.set(p.x,p.y,p.z)
       scene.add(circle)
      

     // face non utile (noire)
      const geometry1 = new THREE.CylinderGeometry( 0.5,0.5,0.02, 50 ); 
      geometry1.rotateZ(Math.PI / 4)
      const material1 =new THREE.MeshPhongMaterial( {
        color: 0x000000 ,
        shininess: 50, // Brillance du lathe (valeur entre 0 et 100)
        side: THREE.DoubleSide, // Rend les deux côtés du matériau visibles (intérieur et extérieur)
        transparent: true, // Rend le lathe non transparent
        opacity: 1// Niveau de transparence du prisme (0 = complètement transparent, 1 = complètement opaque)
       });
      const circle1 = new THREE.Mesh( geometry1, material1 ); 

      if(n==1){
        circle1.position.set(p.x-0.03,p.y+0.03,p.z)
        }else
        {
         circle1.position.set(p.x+0.03,p.y-0.03,p.z)
    
        }
    
      scene.add( circle1 );
    // cylindre de manche 
      const geometry3 = new THREE.CylinderGeometry( 0.04, 0.06, 1, 32 );// 0.05= profondeur(0.1)/2 ; 1 pour la longeur de la manche
      geometry3.rotateX(Math.PI / 2);
      const material3 = new THREE.MeshPhongMaterial( {color: coulFace} ); 
      const cylinder3 = new THREE.Mesh( geometry3, material3 );
      cylinder3.position.set(p.x,p.y,p.z-0.9)
      scene.add( cylinder3 );

      return [circle, circle1,cylinder3,n] 
    }
    let pt

    // retourne les coordonnées du à t des courbes de bezier degree 2 
    function calculateBezierPoin12(t,tabPT1){
      // les points de controle 
      P0x=tabPT1[0].x
      P0y=tabPT1[0].y
      P0z=tabPT1[0].z
    
      P1x=tabPT1[1].x
      P1y=tabPT1[1].y
      P1z=tabPT1[1].z
    
      P2x=tabPT1[2].x
      P2y=tabPT1[2].y
      P2z=tabPT1[2].z
    
      //l'algorithme de castelJau
      M2x=Math.pow((1-t),2)*P0x+2*t*(1-t)*P1x+t*t*P2x
      M2y=Math.pow((1-t),2)*P0y+2*t*(1-t)*P1y+t*t*P2y
      M2z=Math.pow((1-t),2)*P0z+2*t*(1-t)*P1z+t*t*P2z
    
    return new THREE.Vector3(M2x,M2y,M2z);
     }
    // idem pour cbez3
     function calculateBezierPoin13(t,tabPT2){
  
      P0x=tabPT2[0].x
      P0y=tabPT2[0].y
      P0z=tabPT2[0].z

      P1x=tabPT2[1].x
      P1y=tabPT2[1].y
      P1z=tabPT2[1].z

      P2x=tabPT2[2].x
      P2y=tabPT2[2].y
      P2z=tabPT2[2].z

      P3x=tabPT2[3].x
      P3y=tabPT2[3].y
      P3z=tabPT2[3].z

      M2x=Math.pow((1-t),3)*P0x+3*t*Math.pow((1-t),2)*P1x+3*t*t*(1-t)*P2x+t*t*t*P3x
      M2y=Math.pow((1-t),3)*P0y+3*t*Math.pow((1-t),2)*P1y+3*t*t*(1-t)*P2y+t*t*t*P3y
      M2z=Math.pow((1-t),3)*P0z+3*t*Math.pow((1-t),2)*P1z+3*t*t*(1-t)*P2z+t*t*t*P3z
      return new THREE.Vector3(M2x,M2y,M2z);

     }


  function isObjectInScene(object, scene) {
    let children = scene.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i] === object) {
            return true; // L'objet est déjà dans la scène
        }
    }
    return false; // L'objet n'est pas dans la scène
}



