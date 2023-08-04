1.Comparing two JSON objects:


let obj1={name:"Person 1",age:5};
let obj2={age:5,name:"Person 1"};
let person_deta=(obj1)=>{       
    console.log(obj1);
}
person_deta(obj1);
let person_deta_02=(obj2)=>{    
    console.log(obj2);
}
person_deta_02(obj2);
if(obj1[person_deta] == obj2[person_deta_02]) 
    console.log("true");
}
else{
    console.log("false");
}



2. Display the all the country flags :



let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");
let obj1;
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300)
    {
         obj1=JSON.parse(this.response);
        country_flags(obj1);
    }

}
xhr.send();
function country_flags(obj1){   
    for(const flog of obj1)     
    {
        console.log(`${flog.flags}`)
    }
}




3. Print the all Name, Region, Sub-Region and population in country:



let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");
let obj1;
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300)
    {
         obj1=JSON.parse(this.response);
         country_flags(obj1);
    }

}
xhr.send();
function country_flags(obj1){       
    for(const flog of obj1)         
    {
        console.log(`
        Names: ${flog.name}
        Region: ${flog.region}
        Sub-Region: ${flog.subregion}
        Population: ${flog.population}
        `);
        
    }
}


