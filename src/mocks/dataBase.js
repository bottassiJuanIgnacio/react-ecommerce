const productos = [{id:1,name:"Job",category:"Fire Sprinkler System",description:"Disp fx of base of nk of l femr, 7thG",price:8,img:'https://picsum.photos/201',stock:1},
{id:2,name:"Sondra",category:"Drywall & Acoustical (MOB)",description:"Oth traumatic displ spondylolysis of fifth cervcal vertebra",price:76,img:'https://picsum.photos/202',stock:2},
{id:3,name:"Marius",category:"Framing (Wood)",description:"Chronic gout due to renal impairment, unsp hand, with tophus",price:55,img:'https://picsum.photos/203',stock:3},
{id:4,name:"Camala",category:"Termite Control",description:"Superficial foreign body, right great toe, initial encounter",price:57,img:'https://picsum.photos/204',stock:4},
{id:5,name:"Gar",category:"Structural and Misc Steel (Fabrication)",description:"Dislocation of jaw, right side, subsequent encounter",price:45,img:'https://picsum.photos/205',stock:5},
{id:6,name:"Mellisent",category:"Elevator",description:"Traum rupt of palmar ligmt of r idx fngr at MCP/IP jt, sqla",price:91,img:'https://picsum.photos/206',stock:6},
{id:7,name:"Cody",category:"Painting & Vinyl Wall Covering",description:"External constriction, right ankle",price:29,img:'https://picsum.photos/207',stock:7},
{id:8,name:"Darius",category:"Wall Protection",description:"Pathological fracture in other disease, pelvis",price:17,img:'https://picsum.photos/208',stock:8},
{id:9,name:"Jenni",category:"Casework",description:"Type II occipital condyle fracture, unspecified side",price:54,img:'https://picsum.photos/209',stock:9},
{id:10,name:"Oralle",category:"Retaining Wall and Brick Pavers",description:"Contact with nonvenomous frogs, subsequent encounter",price:49,img:'https://picsum.photos/201',stock:10}]

   export const data = new Promise((resolve, reject) => {
    //acciones
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('Algo salio mal')
      }

    },3000)

  })