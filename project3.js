var date = new Date();

var day=30,month=5,year=2020,garag;
var day1=1,month1=1,year1=2009,garag1;
document.getElementById("today").innerHTML = month + "-" + year;
document.getElementById("today1").innerHTML = month1 + "-" + year1;
//sariin odor togtooh
function sar(year,month){
    var len;
    if(year%4===0&&month===2){
        len=29;
        console.log("oldloooo");
        
    }else if(month===0||1===month||3===month||5===month||7===month||8===month||10===month||12===month){
        len=31;
    }else if(month===2){
        len=28;
    }else{
        len=30;
    }
    return len;
}
//garigiin utga odor togtooh

function hewleh(yearr,monthh,garig,a){
    console.log("a:",a);
    var prev=sar(yearr,monthh-1);
    console.log("omnox sar:",prev);  
    var noxox=prev-garig+1;
    console.log("noxox too",noxox);
    var noxox1=1,len=sar(yearr,monthh),h=0;
   var row;
   var table=document.getElementById('table');
   var table1=document.getElementById('table1');
    if(a===1){
    row = table.insertRow(0);
   }else {
    row = table1.insertRow(0);
   }
   var b=["Su","Mo","Tu","We","Th","Fr","Sa"];
    for(h=0;h<7;h++){
        var cell1= row.insertCell(h);
        cell1.innerHTML=b[h];
        cell1.className = "garchig";
    }
    h=1;

    for(var i=1;i<=len+garig;){
        var today=new Date();
        var todayDay=today.getDate();
        var todayMonth=today.getMonth()+1;
        var todayYear=today.getUTCFullYear();
        if(a===1){
             row = table.insertRow(h);
        }else { row = table1.insertRow(h);}
        
        for(var j=1;j<=7;j++){
            
            var  cell2 = row.insertCell(j-1);
            if(yearr===todayYear&&monthh===todayMonth&&todayDay===i-garig){
                cell2.className="today";
            }
            
            if(garig<i){
                
                if(i>len+garig){
                    noxox=0;
                    cell2.innerHTML =noxox1;
                    cell2.className = "noxow";
                    noxox1++;
                    }else{
            cell2.innerHTML = i-garig;}
            }else {
                cell2.innerHTML = noxox;
                cell2.className = "noxow";
                noxox++;
            }
            i++;
        }
        h++;
        if(noxox===0){
            break;
        }          
    }
    noxox1--;
    garig=7-noxox1;
    if(garig===7){
        garig=0;
    }
    
    return garig;
}


//odoogiin sar
var firsday=new Date(date.getFullYear(),date.getMonth(),1 );
garag=firsday.getDay();
garag=hewleh(year,month,garag,1);
console.log("duussan garag:",garag);


function left() {
    console.log("left duudagdlee--------------------");
    
    garag=((sar(year,month)+sar(year,--month)-garag)%7);
    garag=7-garag;
    if(garag===7){
        garag=0;
    }
    month++;
    console.log(garag,"-s ehelne");

    //tuhain on saraa togtooh
    if(month===1){
        year--;
        month=12;
    }else {month--;}
    document.getElementById("today").innerHTML = month + "-" + year;

//omnoh saraa ustgah    
var node=document.getElementById("table");
var h1=node.rows.length;
while(h1-1>=0){
    document.getElementById("table").deleteRow(h1-1);
    h1--;    
    }

    //h=node.rows.length;
if(node.rows.length===1){
    console.log("omnox sar zow ustgalaa");
    
}

garag=hewleh(year,month,garag,1);
  }




  function right() {
    console.log("right duudagdlee--------------------");
    console.log(garag,"-s ehelne");


    //tuhain on saraa togtooh
    if(month===12){
        year++;
        month=1;
    }else {month++;}
    document.getElementById("today").innerHTML =month + "-" + year;

//omnoh saraa ustgah    
var node=document.getElementById("table");
var h1=node.rows.length;
while(h1-1>=0){
    document.getElementById("table").deleteRow(h1-1);
    h1--;    
    }

    //h=node.rows.length;
if(node.rows.length===1){
    console.log("omnox sar zow ustgalaa");
    
}

garag=hewleh(year,month,garag,1);
  }



  //----------------------------------------------------------------------------------------
  //odoogiin sar
garag1=4;
garag1=hewleh(year1,month1,garag1,0);
console.log("duussan garag:",garag1);
  
  
  
  function right1() {
    console.log("right duudagdlee--------------------");
    console.log(garag1,"-s ehelne");


    //tuhain on saraa togtooh
    if(month1===12){
        year1++;
        month1=1;
    }else {month1++;}
    document.getElementById("today1").innerHTML =month1 + "-" + year1;

//omnoh saraa ustgah    
var node=document.getElementById("table1");
var h1=node.rows.length;
while(h1-1>=0){
    document.getElementById("table1").deleteRow(h1-1);
    h1--;    
    }

    //h=node.rows.length;
if(node.rows.length===1){
    console.log("omnox sar zow ustgalaa");
    
}

garag1=hewleh(year1,month1,garag1,0);
  }






  function left1() {
    console.log("left duudagdlee--------------------");
    
    garag1=((sar(year1,month1)+sar(year1,--month1)-garag1)%7);
    
    garag1=7-garag1;
    if(garag1===7){
        garag1=0;
    }
    month1++;
    console.log(garag1,"-s ehelne");

    //tuhain on saraa togtooh
    if(month1===1){
        year1--;
        month1=12;
    }else {month1--;}
    document.getElementById("today1").innerHTML = month1 + "-" + year1;

//omnoh saraa ustgah    
var node=document.getElementById("table1");
var h1=node.rows.length;
while(h1-1>=0){
    document.getElementById("table1").deleteRow(h1-1);
    h1--;    
    }

    //h=node.rows.length;
if(node.rows.length===1){
    console.log("omnox sar zow ustgalaa");
    
}

garag1=hewleh(year1,month1,garag1,0);
  }
