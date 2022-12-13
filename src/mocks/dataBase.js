const productos = [{name:"Job",category:"nuevos",description:"Disp fx of base of nk of l femr, 7thG",price:8,img:'https://picsum.photos/201',stock:5},
{name:"Sondra",category:"nuevos",description:"Oth traumatic displ spondylolysis of fifth cervcal vertebra",price:76,img:'https://picsum.photos/202',stock:4},
{name:"Marius",category:"nuevos",description:"Chronic gout due to renal impairment, unsp hand, with tophus",price:55,img:'https://picsum.photos/203',stock:10},
{name:"Camala",category:"oferta",description:"Superficial foreign body, right great toe, initial encounter",price:57,img:'https://picsum.photos/204',stock:18},
{name:"Gar",category:"oferta",description:"Dislocation of jaw, right side, subsequent encounter",price:45,img:'https://picsum.photos/205',stock:18},
{name:"Mellisent",category:"oferta",description:"Traum rupt of palmar ligmt of r idx fngr at MCP/IP jt, sqla",price:91,img:'https://picsum.photos/206',stock:16},
{name:"Cody",category:"vendidos",description:"External constriction, right ankle",price:29,img:'https://picsum.photos/207',stock:7},
{name:"Darius",category:"vendidos",description:"Pathological fracture in other disease, pelvis",price:17,img:'https://picsum.photos/208',stock:38},
{name:"Jenni",category:"vendidos",description:"Type II occipital condyle fracture, unspecified side",price:54,img:'https://picsum.photos/209',stock:3},
{name:"Oralle",category:"vendidos",description:"Contact with nonvenomous frogs, subsequent encounter",price:49,img:'https://picsum.photos/201',stock:10}]

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
    for (let j = 0; j <= n; j++) {
      
            restoTres= [j] % 3 == 0;
            restoCinco= [j] % 5 == 0;
            
            if(restoTres && !restoCinco){
                console.log("Fizz")
                
            }else if( !restoTres && restoCinco){
                console.log("Buzz")
                
            }else if(restoTres && restoCinco){
                console.log("FizzBuzz");
                
            } else{
                console.log([j]);
            }  
    }
  })
