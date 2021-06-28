

function mad(){

    var p=document.getElementById("bat4")
    if(p.checked==true)
    {
       // alert("called checked");
        document.body.style.backgroundColor="white";
    }
    else{
        
        document.body.style.backgroundColor="black";

    }


}



$("#mad7").click(function(){

    $("#mad7").fadeToggle(1000).fadeToggle(500)
        setTimeout(function(){
        window.open("https://www.hackerearth.com/@akhileshgupta1256","_self");

    },1500);
    

})

$("#mad7").tooltip({

    
    track:true,
    show:{effect:"explode",duration:500},
    //hide:{effect:"explode",duration:2000}

})

$("#mad8").tooltip({

    track:true,
   // show:{effect:"shake",duration:500}

})

$("#mad9").tooltip({

    track:true,
   // show:{effect:"shake",duration:500}

})

$("#mad10").tooltip({

track:true,


})

$("#mad11").tooltip({

    track:true,

})

$("#mad12").tooltip({
    track:true
})

$("#mad13").tooltip({
    track:true,
})

$("#mad8").click(function(){

    $("#mad8").fadeToggle(1000).fadeToggle(500)
    setTimeout(function(){
        window.open("https://mycode.prepbytes.com/profile/adtyaofficial17","_self");

    },1000)
})

$("#mad9").click(function(){

    $("#mad9").fadeToggle(1000).fadeToggle(500)
    setTimeout(function(){

        window.open("https://leetcode.com/adtyaofficial17/","_self");
    },1000)

})

$("#mad10").click(function(){

    $("#mad10").fadeToggle(1000).fadeToggle(500)
   setTimeout(function(){
    window.open("https://www.codechef.com/users/adi_rocks1","_self");
   },1000)

})

$("#mad11").click(function(){

    $("#mad11").fadeToggle(1000).fadeToggle(500)
    setTimeout(function(){
        window.open("https://codeforces.com/profile/aditya_google","_self");
    },1000)

})

$("#mad12").click(function(){

    $("#mad12").fadeToggle(1000).fadeToggle(500)
    setTimeout(function(){

        window.open("https://auth.geeksforgeeks.org/user/adtyaofficial17/practice/","_self");
    },1000)

})

$("#mad13").click(function(){

    $("#mad13").fadeToggle(1000).fadeToggle(500)
    setTimeout(function(){

        window.open("https://www.hackerrank.com/adtyaofficial17?badge=problem-solving&stars=4&level=2&hr_r=1&utm_campaign=social-","_self");

    },1000)

})

function mad1(){

    console.log("done");
    

    window.open("coding.html","_self");

}

function mad3(){

    window.open("academicsdet.html","_self");

}

function mad4(){

//console.log("aditya")
var mat=document.getElementById("contac").style.visibility
//console.log(mat)
if(mat=="hidden")
{
    document.getElementById("contac").style.visibility="visible"
}
else{
    document.getElementById("contac").style.visibility="hidden"
}

}

function mad5()
{

    window.open("skills.html","_self");

}

function mad6(){


    window.open("project.html","_self")

}