
  function isObjectInScene(object, scene) {
    let children = scene.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i] === object) {
            return true; // L'objet est déjà dans la scène
        }
    }
    return false; // L'objet n'est pas dans la scène
}
function menugui(camera,scene){
let gui= new dat.GUI();
let menuGUI = new function () {
  // propriete de la camera
this.cameraxPos = camera.position.x;
this.camerayPos = camera.position.y;
this.camerazPos = camera.position.z;

this.cameraxDir = 1
this.camerayDir = 1
this.camerazDir = 1
this.cameraZoom = 1;


 // points de control
 this.P0x=0.1
 this.P0y=-0.6
 this.P0z=0

 this.P1x=0.3
 this.P1y=-0.2
 this.P1z=0

 this.P2x=0.3
 this.P2y=0.3
 this.P2z=0

 this.P3x=0.3
 this.P3y=0.5
 this.P3z=0

 this.Q1x=0.3
 this.Q1y=0.6
 this.Q1z=0

 this.Q2x=0.2
 this.Q2y=0.7
 this.Q2z=0

 this.Q3x=0.6
 this.Q3y=0.9
 this.Q3z=0
//
 this.coulTab=0x0077b6 
 this.coulSol=0x0077b6
 this.coulPied=0x0077b6

  }; //fin de la fonction menuGUI


// repertoir caméra 
  let guiCamera = gui.addFolder("Camera");
  let P0 = gui.addFolder("P0");
  let P1 = gui.addFolder("P1");
  let P2 = gui.addFolder("P2");
  let P3 = gui.addFolder("P3");
  let Q1 = gui.addFolder("Q1");
  let Q2 = gui.addFolder("Q2");
  let Q3 = gui.addFolder("Q3");

  let guicoulTab = gui.addFolder("coulTab");
  let guicoulSol = gui.addFolder("coulSol");
  let guicoulPied = gui.addFolder("coulPied");



  // abscisse de la position de la camera dans le menu

  // position de la camera
guiCamera.add(menuGUI,"cameraxPos",-10,10).onChange(function () {
  camera.position.set(menuGUI.cameraxPos, menuGUI.camerayPos,menuGUI.camerazPos );
  //actuaPosCameraHTML(menuGUI.cameraxPos, menuGUI.camerayPos, menuGUI.camerazPos,menuGUI.cameraxDir,menuGUI.camerayDir, menuGUI.camerazDir);
  camera.lookAt(testZero(menuGUI.cameraxDir), testZero(menuGUI.camerayDir), testZero(menuGUI.camerazDir));

});
  // ordonnée de la position de la camera dans le menu

guiCamera.add(menuGUI,"camerayPos",-10,10).onChange(function () {
  camera.position.set(menuGUI.cameraxPos, menuGUI.camerayPos,
    menuGUI.camerazPos );
   // actuaPosCameraHTML(menuGUI.cameraxPos, menuGUI.camerayPos, menuGUI.camerazPos,menuGUI.cameraxDir,menuGUI.camerayDir, menuGUI.camerazDir);
    camera.lookAt(testZero(menuGUI.cameraxDir), testZero(menuGUI.camerayDir), testZero(menuGUI.camerazDir));

  });
  // côte de la position de la camera dans le menu

guiCamera.add(menuGUI,"camerazPos",-10,10).onChange(function () {
  camera.position.set(menuGUI.cameraxPos, menuGUI.camerayPos,
    menuGUI.camerazPos );
   // actuaPosCameraHTML(menuGUI.cameraxPos, menuGUI.camerayPos, menuGUI.camerazPos,menuGUI.cameraxDir,menuGUI.camerayDir, menuGUI.camerazDir);
    camera.lookAt(testZero(menuGUI.cameraxDir), testZero(menuGUI.camerayDir), testZero(menuGUI.camerazDir));

  });
  // direction de la camera
      // position de la camera
guiCamera.add(menuGUI,"cameraxDir",-10,10).onChange(function () {
  camera.lookAt(menuGUI.cameraxDir, menuGUI.camerayDir, menuGUI.camerazDir );
  actuaPosCameraHTML(menuGUI.cameraxPos, menuGUI.camerayPos, menuGUI.camerazPos,menuGUI.cameraxDir,menuGUI.camerayDir, menuGUI.camerazDir);
  
  });
    // ordonnée de la position de la camera dans le menu
  
  guiCamera.add(menuGUI,"camerayDir",-10,10).onChange(function () {
    camera.lookAt(menuGUI.cameraxDir, menuGUI.camerayDir, menuGUI.camerazDir );
    actuaPosCameraHTML(menuGUI.cameraxPos, menuGUI.camerayPos, menuGUI.camerazPos,menuGUI.cameraxDir,menuGUI.camerayDir, menuGUI.camerazDir);
  });
    // côte de la position de la camera dans le menu
  
  guiCamera.add(menuGUI,"camerazDir",-10,10).onChange(function () {
    camera.lookAt(menuGUI.cameraxDir, menuGUI.camerayDir, menuGUI.camerazDir );
    actuaPosCameraHTML(menuGUI.cameraxPos, menuGUI.camerayPos, menuGUI.camerazPos,menuGUI.cameraxDir,menuGUI.camerayDir, menuGUI.camerazDir);
  });

  // zoom 
  guiCamera.add(menuGUI,"cameraZoom",-10,10).onChange(function () {
    camera.position.set(menuGUI.cameraxPos*testZero(menuGUI.cameraZoom), menuGUI.camerayPos*testZero(menuGUI.cameraZoom), menuGUI.camerazPos*testZero(menuGUI.cameraZoom));
    camera.lookAt(testZero(menuGUI.cameraxDir), testZero(menuGUI.camerayDir), testZero(menuGUI.camerazDir))
  });

  P0.add(menuGUI,"P0x",-5,5).onChange(function () {
    let tabP=[[menuGUI.P0x,menuGUI.P0y,menuGUI.P0z],
              [menuGUI.P1x,menuGUI.P1y,menuGUI.P1z],
              [menuGUI.P2x,menuGUI.P2y,menuGUI.P2z],
              [menuGUI.P3x,menuGUI.P3y,menuGUI.P3z]
              ]
    let tabQ=[[menuGUI.Q1x,menuGUI.Q1y,menuGUI.Q1z],
              [menuGUI.Q2x,menuGUI.Q2y,menuGUI.Q2z],
              [menuGUI.Q3x,menuGUI.Q3y,menuGUI.Q3z]
              ]
              
    piedTable(scene,menuGUI.coefLin,tabP,tabQ)

  });

  P0.add(menuGUI,"P0y",-5,5).onChange(function () {
    let tabP=[[menuGUI.P0x,menuGUI.P0y,menuGUI.P0z],
              [menuGUI.P1x,menuGUI.P1y,menuGUI.P1z],
              [menuGUI.P2x,menuGUI.P2y,menuGUI.P2z],
              [menuGUI.P3x,menuGUI.P3y,menuGUI.P3z]
              ]
    let tabQ=[[menuGUI.Q1x,menuGUI.Q1y,menuGUI.Q1z],
              [menuGUI.Q2x,menuGUI.Q2y,menuGUI.Q2z],
              [menuGUI.Q3x,menuGUI.Q3y,menuGUI.Q3z]
              ]
    piedTable(scene,menuGUI.coefLin,tabP,tabQ)
  });
  P0.add(menuGUI,"P0z",-5,5).onChange(function () {
    let tabP=[[menuGUI.P0x,menuGUI.P0y,menuGUI.P0z],
              [menuGUI.P1x,menuGUI.P1y,menuGUI.P1z],
              [menuGUI.P2x,menuGUI.P2y,menuGUI.P2z],
              [menuGUI.P3x,menuGUI.P3y,menuGUI.P3z]
              ]
    let tabQ=[[menuGUI.Q1x,menuGUI.Q1y,menuGUI.Q1z],
              [menuGUI.Q2x,menuGUI.Q2y,menuGUI.Q2z],
              [menuGUI.Q3x,menuGUI.Q3y,menuGUI.Q3z]
              ]
    piedTable(scene,menuGUI.coefLin,tabP,tabQ)
  });
          
  
  // Pour P1
P1.add(menuGUI, "P1x", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

P1.add(menuGUI, "P1y", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

P1.add(menuGUI, "P1z", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

// Pour P2
P2.add(menuGUI, "P2x", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

P2.add(menuGUI, "P2y", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

P2.add(menuGUI, "P2z", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

// Pour P3
P3.add(menuGUI, "P3x", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

P3.add(menuGUI, "P3y", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

P3.add(menuGUI, "P3z", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

// Pour Q1
Q1.add(menuGUI, "Q1x", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

Q1.add(menuGUI, "Q1y", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

Q1.add(menuGUI, "Q1z", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

// Pour Q2
Q2.add(menuGUI, "Q2x", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

Q2.add(menuGUI, "Q2y", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

Q2.add(menuGUI, "Q2z", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

// Pour Q3
Q3.add(menuGUI, "Q3x", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

Q3.add(menuGUI, "Q3y", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

Q3.add(menuGUI, "Q3z", -5, 5).onChange(function () {
  let tabP = [
    [menuGUI.P0x, menuGUI.P0y, menuGUI.P0z],
    [menuGUI.P1x, menuGUI.P1y, menuGUI.P1z],
    [menuGUI.P2x, menuGUI.P2y, menuGUI.P2z],
    [menuGUI.P3x, menuGUI.P3y, menuGUI.P3z],
  ];
  let tabQ = [
    [menuGUI.Q1x, menuGUI.Q1y, menuGUI.Q1z],
    [menuGUI.Q2x, menuGUI.Q2y, menuGUI.Q2z],
    [menuGUI.Q3x, menuGUI.Q3y, menuGUI.Q3z],
  ];
  piedTable(scene, menuGUI.coefLin, tabP, tabQ);
});

// table

guicoulTab.addColor(menuGUI,"coulTab").onChange( function (){ 
  if(isObjectInScene(tabletop, scene)){
    scene.remove(tabletop);
  }
  var tableMaterialt = new THREE.MeshPhongMaterial({ color: menuGUI.coulTab }); // Brun
  var tabletopGeometryt = new THREE.BoxGeometry(7, 12, 0.3);
  var tabletop = new THREE.Mesh(tabletopGeometryt, tableMaterialt);
  tabletop.rotateZ(Math.PI/4)
  tabletop.position.set(0, 0, 5);
  scene.add(tabletop)
});
// sol
guicoulSol.addColor(menuGUI,"coulSol").onChange( function (){ 
  if(isObjectInScene(faceTM, scene)){
    scene.remove(faceTM); 
  }
  if(isObjectInScene(faceTM1, scene)){
    scene.remove(faceTM1); 
  }
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
    //0x007f5f
     //faceTriangulaire(scene,PtA,PtB,PtC,menuGUI.coulSol)
     // 
     var faceT = new THREE.Geometry();
     faceT.vertices = [PtA, PtB, PtC];
     faceT.faces = [
         new THREE.Face3( 0, 2, 1 )
     ];
     var faceTM = surfPhong(faceT,menuGUI.coulSol,0.75,false,"#636e72");
     scene.add(faceTM);

     //
     var faceT1 = new THREE.Geometry();
     faceT1.vertices = [PtA, PtD, PtC];
     faceT1.faces = [
         new THREE.Face3( 0, 2, 1 )
     ];
     var faceTM1 = surfPhong(faceT1,menuGUI.coulSol,0.75,false,"#636e72");
     scene.add(faceTM1);

     //faceTriangulaire(scene,PtA,PtD,PtC,menuGUI.coulSol)
  });

  // piedTable

guicoulPied.addColor(menuGUI,"coulPied").onChange( function (){ 

  pied(scene,1.2,-5.2,1.8,menuGUI.coulPied);
  pied(scene,5.2,-1.2,1.8,menuGUI.coulPied);
  pied(scene,2,2,1.8,menuGUI.coulPied);
  pied(scene,-1.2,5.2,1.8,menuGUI.coulPied);
  pied(scene,-5.2,1.2,1.8,menuGUI.coulPied);
  pied(scene,-2,-2,1.8,menuGUI.coulPied);

});

return menuGUI;
}