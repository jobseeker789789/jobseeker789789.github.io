const total_pages =12;
let display_pages;
let current_page = 1;

function def_display_pages(){
    if(total_pages < 10){
        display_pages = [];
        for(let i=1; i<total_pages+1; i++){
            display_pages.push(i);
        }   
    }else{
        display_pages = [1,2,3,4,5,6,7,8,9,10]; 
    }
}
def_display_pages();

function change_display_page(){
    start = current_page - 4;
    end = current_page + 5;
    while(start < 1){
        start++;
        end++;
    }
    while(end > total_pages){
        start--;
        end--;
    }
    if(start < 1){
        start = 1;
    }
    display_pages=[];
    for(let i=start; i<end+1; i++){
        display_pages.push(i);
    }
}

function change_current_page(n){
    if(n < 1 || total_pages < n){
        console.log("Error!");
    }else{
        current_page = n;
        
    }
    change_display_page();
    lender_o(display_pages , current_page);
    lender_pre();
    lender_next();
}


const CONTAINER = document.querySelector(".container");
const PRE = document.querySelector(".pre");
PRE.addEventListener("click" , ()=>{
    change_current_page(current_page-1);
})
function lender_pre(){
    if(1 < current_page){
        PRE.classList.add("active");
    }else{
        PRE.classList.remove("active");
    }
        
}
lender_pre();
const NEXT = document.querySelector(".next");
NEXT.addEventListener("click" , ()=>{
    change_current_page(current_page+1);
})
function lender_next(){
    if(current_page < total_pages){
        NEXT.classList.add("active");
    }else{
        NEXT.classList.remove("active");
    }
}
lender_next();

const O_AREA = document.querySelector(".o-area");
// 현재 페이지는 클릭 아예 안 되게 만들기.
// n = current_page
function lender_o(d , c){
    O_AREA.innerHTML = "";

    const start = d[0];
    const end = d[d.length-1];
    console.log(start , end);

    for(let i=start; i<end+1; i++){
        const O = document.createElement("div");
        O.classList.add("o");
        O.setAttribute("value" , i);
        if(i == c){
            O.classList.add("active");
        }else{
            O.addEventListener("click" , ()=>{
                change_current_page(i);
            })
        }
        O_AREA.append(O);

            const UPPER = document.createElement("div");
            UPPER.classList.add("upper");
            UPPER.innerText = "o";
            O.append(UPPER);

            const LOWER = document.createElement("div");
            LOWER.classList.add("lower");
            LOWER.innerText = i;
            O.append(LOWER);
    }



}
lender_o(display_pages , current_page);