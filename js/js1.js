window.onscroll=function(){scrollNav()};  //selfinvoke
 
    var myNav=document.getElementById("mainNavX");
    var myNavOffSet=myNav.offsetTop;
    var searchBar=document.querySelector("#searchBar");

   function scrollNav(){
        if(window.pageYOffset>=myNavOffSet) 
       {myNav.classList.add("stickyNav");
        searchBar.setAttribute("style","position:fixed;top:0") }

else{myNav.classList.remove("stickyNav");}
           
    }




/////////////////////////////CHOOSE LANGUAGE////////////////////////////////
var earth=document.querySelector('#changeLang');
var languages=document.querySelector('.mainNav__pageFunctions--lang');
 
earth.addEventListener('mouseenter',function(){
    languages.style.display="block";  
    this.style.display="none";
}) 

languages.addEventListener('mouseleave',function(){
    languages.style.display="none";
    earth.style.display="block";
})
////////////////////////////////////////////////////////////////////////////////




///////////////////////////SIDE MENU//////////////////////////////////////////
var tribleBar=document.querySelector('.mainNav__hamburger');
var sideNav=document.querySelector('.sideNav');
var closeBtn=document.querySelector('#closeBtn');
tribleBar.addEventListener('click',function(){
    sideNav.style.display="block";
    sideNav.animate([{width:"150px"},{width:"250px"},{width:"350px"}],{duration:200,easinsg:"ease"})
    document.querySelector("body").backgroundColor="#ccc";

})
closeBtn.addEventListener('click',function(){
        sideNav.style.display="none";
        document.querySelector("body").backgroundColor="#fff";

})
////////////////////////////////////////////////////////////////////////////////


///////////////////////////search Area/////////////////////////////////////////
    var searchMainBtn=document.querySelector("#searchMainBtn");
    var closeBtnSearch=document.querySelector("#closeBtnSearch");
    var searchBar=document.querySelector("#searchBar");
    
    /*
    var dis=false;    
    searchMainBtn.onclick=function(){
        if(dis==false){searchBar.style.display="block"; dis=true}
    }
    closeBtnSearch.onclick=function(){
        if(dis==true){searchBar.style.display="none"; dis=false}
    }*/
    
    searchMainBtn.addEventListener("click",function(){
        searchBar.style.display="block";
    })
    
    closeBtnSearch.addEventListener("click",function(){
        searchBar.style.display="none";
    })
   
   


////////////////////////////////////////////////////////////////////////////////



///////////////////////////////// SLIDER//////////////////////////////////////
   /* var slider=document.querySelector(".slider")
    var prev=document.querySelector("#prev")
    var next=document.querySelector("#next")
     prev.addEventListener("click",function(){
        slider.scrollLeft-=150;
        slider.scrollIntoView({behavior:"smooth"})
    }) 
     next.addEventListener("click",function(){
        slider.scrollLeft+=150;
        slider.scrollIntoView({behavior:"smooth"})
    })
     */
     
    /*
    //also you can do the following rather that addEventListener
      prev.onclick=function(){
         slider.scrollLeft-=180;
        slider.scrollIntoView({behavior:"smooth"})
    }
    */
    
    
    
     
        var next = document.querySelector("#next");
        var prev = document.querySelector('#prev');
        var slider = document.querySelector('.slider');
 //sliderName,direction,intervalTime,total distance(scrollLeft),scrollLeft(each step)
        prev.onclick=function(){slideScrollFunc(slider,"left",15,400,25)}
        next.onclick=function(){slideScrollFunc(slider,"right",15,400,25)}
        
    
    

        var next2= document.querySelector("#next2");
        var prev2 = document.querySelector('#prev2');
        var slider2 = document.querySelector('.slider2');
//sliderName,direction,intervalTime,total distance(scrollLeft),scrollLeft(each step)
        prev2.onclick=function(){slideScrollFunc(slider2,"left",15,400,25)}
        next2.onclick=function(){slideScrollFunc(slider2,"right",15,400,25)}
         
     
        
        
        function slideScrollFunc(sliderName,direction,intervalTime,total,stepLeft){
           var stopInterval=0;
           var intervalScroll= setInterval(function(){
               sliderName.scrollIntoView({behavior:"smooth"})
                if(direction=="right") sliderName.scrollLeft+=stepLeft;
               else if(direction=="left")  sliderName.scrollLeft-=stepLeft;
                stopInterval+=stepLeft;
                if(stopInterval>=total) clearInterval(intervalScroll);
            },intervalTime)
        }
 
////////////////////////////////////////////////////////////////////////////////
    

 