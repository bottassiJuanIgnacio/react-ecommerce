const productos = [{id:1,name:"Job",category:"nuevos",description:"Disp fx of base of nk of l femr, 7thG",price:8,img:'https://picsum.photos/201',stock:5},
{id:"2",name:"Sondra",category:"nuevos",description:"Oth traumatic displ spondylolysis of fifth cervcal vertebra",price:76,img:'https://picsum.photos/202',stock:4},
{id:"3",name:"Marius",category:"nuevos",description:"Chronic gout due to renal impairment, unsp hand, with tophus",price:55,img:'https://picsum.photos/203',stock:10},
{id:"4",name:"Camala",category:"oferta",description:"Superficial foreign body, right great toe, initial encounter",price:57,img:'https://picsum.photos/204',stock:18},
{id:"5",name:"Gar",category:"oferta",description:"Dislocation of jaw, right side, subsequent encounter",price:45,img:'https://picsum.photos/205',stock:18},
{id:"6",name:"Mellisent",category:"oferta",description:"Traum rupt of palmar ligmt of r idx fngr at MCP/IP jt, sqla",price:91,img:'https://picsum.photos/206',stock:16},
{id:"7",name:"Cody",category:"vendidos",description:"External constriction, right ankle",price:29,img:'https://picsum.photos/207',stock:7},
{id:"8",name:"Darius",category:"vendidos",description:"Pathological fracture in other disease, pelvis",price:17,img:'https://picsum.photos/208',stock:38},
{id:"9",name:"Jenni",category:"vendidos",description:"Type II occipital condyle fracture, unspecified side",price:54,img:'https://picsum.photos/209',stock:3},
{id:"10",name:"Oralle",category:"vendidos",description:"Contact with nonvenomous frogs, subsequent encounter",price:49,img:'https://picsum.photos/201',stock:10}]

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