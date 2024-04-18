import { fuggvenyem3 } from "./fuggvenyem3.js";
export function tesztszamjegyekosszege(){
    const tesztESETEK = [
        {
            szam: 312,
            vart: 6,

        },

        {
            szam:523,
            vart:10,
        },

        {
            szam:1542,
            vart:1,
            
        },
    ];



        // let kapott fuggvenyem3(szam)
        tesztESETEK.forEach(function(teszt){
        console.assert(
            teszt.vart===fuggvenyem3(teszt.szam),
            `n: ${teszt.szam} vart: ${teszt.vart} kapott:${fuggvenyem3(teszt.szam)}
            )} HIBA!`
            );
        });
    }
