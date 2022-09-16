// var students ={
//     name: "islom",
//     boyi: 170,
//     age: 18,
//     group: 'n18',
//     score: 89,
//     adress: "andijan",
//     contact: 932152890,
//     married: false,
// }
// if (students.score > 110){
//     console.log("siz imtixondan otdingiz");
// }




1-misol   // A butun son berilgan. Jumlani rostlikka tekshiring: A son musbat
function NumberFUNC (A){
    if (A>=0){
        if (A % 2 ==0){
            return console.log("juft son");
        }else
        return console.log("toq son");
    }else return console.log("son manfiy");
    
}
NumberFUNC(-10)

// Ikkita butun son berilgan. Jumlani rostlikka tekshiring. M-s a > 0 && b > 0 4-masala
   var son = [
   a=5,
   b= 5
]
if(a>0 && b>0 && a % 1==0 && b%1==0) {
    console.log("musbat butun son");
}else if(a<0 &&b<0 && a%-1==0 && b%-1==0) {
    console.log("manfiy butun son");
}else{
    console.log("kasir son");

}
// 4-masala
function TwoNumber(a,b){
    if (a>0 && b>0){
        return console.log('shart togri bajarildi');
    }else {
        return console.log("shart notogri bajaridi");
    }
}
TwoNumber(5, 10)

// 5-masala    3 ta son berilgan a,b,c. a bdan katta b c dan katta rostlikka tekshiring

function ThreeNumber(a,b,c){
    if (a>b && a>c ){
        return console.log("ok");

    } else if (a<b && b>c){
        return console.log("no ok");
    }else {
        return console.log("net");
    }
    return console.log(Math.max(a,b,c));
    }
    ThreeNumber( 29,62,13)
// 6-masala   a, b, c, son berilgan. B son a va c sonlarni orasida yotadi.
 function fournumber(a,b,c){
    if (a<b && b<c){
        return console.log("true");
    } else if (a>b && b>c) {
        return console.log("togri");
    }else{
        return console.log("false");
    }
 }
 fournumber( -9, -8, 7)
7-masala
function TwoNumber(a,b){
    if (a>10 && b> !0){
        return console.log('shart togri bajarildi');
    }else {
        return console.log("shart notogri bajaridi");
    }
}
TwoNumber(5, 10)
// 8-masala a,b,c,d sonlar berilgan barchasi musbat
function hownumber(a,b,c,d){
    if (a>0 && b>0 && c>0  && d>0){
        return console.log("zor");
    } else{
        return console.log("yomon");
    }
}
hownumber ( 1,4,6,8)
// 9-masala a,b,c sonlar berilgan kamida ikkitasi musbat berilgan
function younumber(a,b,c){
    if (a>0 && b<0 && c>0){
        return console.log("yaxwi");
    } else {
        return console.log("yoq");
    }
}
// 10-masala hafta kunlari berilgan raqamga qarab hafta kunlarini nomini chiqaring
  var wekday =["monday" , "thusday" , "wendesday" , "thursday" , "fridsy" , "saturday" , "sunday"]
 function weknumber(a){
    return console.log(wekday[a]);
}
weknumber (3)
younumber ( 3, -4 , 9)
// Butun son berilgan agar son musbat bo'lsa unda sonni bittaga oshiring aks xolda 1taga kamaytiring
function getnumber(f){
    if(f>0 +1==0){
        return console.log("ok");
    }else if (f<0-1==-1){
        return console.log("no ok");
    }
}
// 11-masala  Telefon nomer kodi orqali qaysi kompaniya ekanligini tekshiring
let ums = 977675567  && 937076460 && 903233343
function telnumber(a){
    if (977675567 == a){
        return console.log("ums company");
    } else if (937076460 == a){
        return console.log("usell company");
    } else if (903233343 == a){
        return console.log("beeline company");
    }
    
}
telnumber (903233343)
12-masala 
// Butun son berilgan agar son musbat bo'lsa unda sonni bittaga oshiring aks xolda 1taga kamaytiring
  function water(a){
    if ( a > 0 && a ++){
        return console.log([a]);
    } else if ( a < 0 &&  a ++){
        return console.log([a]);
    }
  }
  water (9)
// 13-masala   Butun son berilgan agar son musbat bo'lsa sonni 3 ga oshiring manfiy bo'lsa unda 2ga kamaytiring
   
  function youfunc (a){
    if(a>0 && a + 3){
        return console.log([a +3]);
    } else if (a < 0 && a - 2 ){
        return console.log([a+ 2]);
    }
    
  }
  youfunc(-5)

getnumber ()
// Ikkita butun son berilgan kattasin aniqlovchi dastur tuzing
// 14-masala
function livenumber(a,b){
    if(a>b) {
    return console.log("A katta");    
    } if (a<b){
     return console.log("B katta");
    }else{
        return console.log("teng");
    }
}
livenumber (1,9)
// 15-masala   3 ta butun son berilgan eng kattasini aniqlovchi dastur tuzing
function letnumber(a, b, c ){
    if (a>b && a > c  ){
        return console.log("a katta");
    } else if (b>a && b>c){
        return console.log("b katta");
    } else if (c>a && c>b){
        return console.log("c katta");
    } else{
        return console.log(" hammasi katta");
    }
}
letnumber (15, 15, 15)  
// 16 -masala   3 ta son berilgan eng kichikin aniqlovchi dastur tuzing
function smalnumber(a,b,c){
    if (a<b && a<c){
        return console.log("a kichik");
    } else if (b<a && b<c){
        return console.log("b kichik");
    } else if (c<b && c<a){
        return console.log("c kichk");
    } else{
        return console.log("hammasi kichik");
    }
}
smalnumber (11,11,11)
// 18 -masala   Bahoga qarab stependiyani aniqlovchi dastur tuzing
 function bahonumber(a){
    if (a == 1){
        return console.log("100ming");
    } else if (a == 2){
        return console.log("200ming");
    } else if (a == 3){
        return console.log("300ming");
    } else{
        return console.log("0 ming");
    }
 }
 bahonumber (2)
// 19 -masala
//  Butun son berilgan shu songa qarab toq musbat, toq manfiy, juft musbat, juft manfiy deb chiqaruvchi dastur tuzing
function getfunc (a){
    if( a % 2 == 1){
        return console.log("toq musbat");
    } else if (a % -2 ==-1){
        return console.log("toq manfiy");
    } else if (a>0 &&  a % 2 == 0){
        return console.log("juft musbat");
    } else if (a<0 && a %2 == 0) {
        return console.log("juft manfiy");
    }
}
getfunc ( -8)
// 20 -masala Yilga qarab yoshin aniqlovchi dastur tuzing

function age ( a ){ 
    console.log([ 2022 - a ]);
}
age (2000)
// 21-masala 3 ta butun son berilgan jumlani rostlikkar tekshiring. A <= B <= C
function letfunc( a,b,c){
    if (a >=0 && b>= 0 && c >= 0){
        return console.log("musbat");
    
    } else if (a <=0 && b <= 0 && c <= 0) {
        console.log("manfiy");
    }
}
letfunc (-1,-2,-3)
// 22-masala   ikki butun son berilgan ikki sondan faqat 1tasi toq son hisoblanadi
function twofunc(a,b){
    if (a % 2==0  && b % 2 ==1){
        return console.log("b toq son");
    } else {
        console.log("b juft son");
    }
}
twofunc ( 2 , 9)
// 23-masala     a,b,c sonlar berilgan har biri musbat son
function listnumber(a,b,c){
    if (a>=0 && b>=0 && c>=0 ){
        return console.log("barchasi musbat");
    } else if (a<=0 && b<=0 && c<=0){
        return console.log("barchasi manfiy");
    }
}
listnumber(2,3,2)
// 24-masala a,b,c sonlardan biri musbat son
function listfunc(a,b,c){
    if ( a > 0 && b < 0 && c < 0){
        return console.log("a musbat");
    } else if (a < 0 && b > 0 && c < 0) {
        console.log("b musbat");
    } else if (a < 0 && b < 0 && c > 0){
        console.log("c musbat");
    }  else {
        console.log("xat0");
    }
}
listfunc(-1,-1,1 )


// 25-masala 3 xonali son berilgan har bir raqamlari har xil    
function onefunc(a){
    if (a % 111 ==0){
        console.log("true");
    } else{
        console.log("false");
    }
}
onefunc (111)