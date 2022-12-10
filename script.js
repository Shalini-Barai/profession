var arr= [{id:1,name:"john",age:"18",profession:"developer"},
{id:2, name:"jack",age:"20", profession:"developer"},
{id:3, name:"karen", age:"19",profession:"admin"}];

const id1=arr.map((ids)=>{
    return ids.id;
});
document.getElementById("id1").innerHTML=id1[0];
document.getElementById("id2").innerHTML=id1[1];
document.getElementById("id3").innerHTML=id1[2];

const name1=arr.map((names)=>{
    return names.name;
});
document.getElementById("name1").innerHTML=name1[0];
document.getElementById("name2").innerHTML=name1[1];
document.getElementById("name3").innerHTML=name1[2];

const age1=arr.map((ages)=>{
    return ages.age;
});
document.getElementById("age1").innerHTML=age1[0];
document.getElementById("age2").innerHTML=age1[1];
document.getElementById("age3").innerHTML=age1[2];

const pro1=arr.map((pros)=>{
    return pros.profession;
});
document.getElementById("profession1").innerHTML=pro1[0];
document.getElementById("profession2").innerHTML=pro1[1];
document.getElementById("profession3").innerHTML=pro1[2];


function validate() {
    var pro = document.getElementById("prof");
    console.log(pro.value);
    if (pro.value != "admin" && pro.value!=="developer") {
        alert("Select profession before clicking the button.");
        return false;
    }
    else if(pro.value=="admin"){
       document.getElementById("profession1").innerHTML="admin";
       document.getElementById("profession2").innerHTML="admin";
       document.getElementById("profession3").innerHTML="admin";
    }
    else if(pro.value=="developer"){
        document.getElementById("profession1").innerHTML="developer";
       document.getElementById("profession2").innerHTML="developer";
       document.getElementById("profession3").innerHTML="developer";
    }
    return true;
}

