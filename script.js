const sign_in = document.querySelector(".sign_in");
const sign_up = document.querySelector(".sign_up");
const go_to_sign_in = document.querySelector(".go_to_sign_in>.link");
const go_to_sign_up = document.querySelector(".go_to_sign_up>.link");

go_to_sign_in.addEventListener("click" , ()=>{
    setTimeout(() => {
        sign_up.classList.add("out");
    }, 250);
    setTimeout(() => {
        sign_up.classList.add("none");
        sign_in.classList.remove("none");
        sign_in.classList.add("in");
    }, 250);
    setTimeout(() => {
        sign_in.classList.remove("in");
        sign_up.classList.remove("out");
    }, 500);

})
go_to_sign_up.addEventListener("click" , ()=>{
    setTimeout(() => {
        sign_in.classList.add("out"); 
    }, 250);
    setTimeout(() => {
        sign_in.classList.add("none");
        sign_up.classList.remove("none");
        sign_up.classList.add("in");
    }, 250);
    setTimeout(() => {
        sign_in.classList.remove("out");
        sign_up.classList.remove("in");
    }, 500);

})


const year = document.querySelector(".year");
const month = document.querySelector(".month");
const day = document.querySelector(".day");
function create_birthday_form(){
    // year
    const today = new Date();
    const today_year = today.getFullYear();
    for(let i = today_year; today_year-120 < i; i--){
        let item = document.createElement("option");
        item.setAttribute("value" , i);
        item.innerText = i;
        year.append(item);
    }
    // month
    for(let i = 1; i <= 12; i++){
        let item = document.createElement("option");
        item.setAttribute("value" , i);
        item.innerText = i;
        month.append(item);
    }
    // dat
    for(let i = 1; i <= 31; i++){
        let item = document.createElement("option");
        item.setAttribute("value" , i);
        item.innerText = i;
        day.append(item);
    }
}
create_birthday_form();

// validation of birthday form
const birthday = document.querySelector(".birthday");
birthday.addEventListener("change" , ()=>{
    // about month
    console.log(month.value);
    if([4,6,9,11].includes(parseInt(month.value)) && day.value == parseInt(31)){
        console.log("wrong!!!");
        lender_birthday_alert_about_birthday();
    }
    else if(parseInt(month.value) == 2 && 28 < parseInt(day.value)){
        if(parseInt(year.value)%4 == 0 && parseInt(day.value) == 29){
            reset_birthday_alert_element();

        }else{
            console.log("wrong!!")
            lender_birthday_alert_about_birthday();
        }
    }else{
        reset_birthday_alert_element();
    }
})
const birthday_alert = document.querySelector(".birthday_alert");
function lender_birthday_alert_about_birthday(){
    birthday_alert.innerText = "유효한 생년월일을 입력해주세요!"
}
function reset_birthday_alert_element(){
    birthday_alert.innerText = "";
}

// sign in action
const signin_btn = document.querySelector(".sign_in input[type='submit']");
const signin_email_box = document.querySelector(".sign_in .email_box");
const signin_password_box = document.querySelector(".sign_in .password_box");

signin_btn.addEventListener("click" , (event)=>{
    event.preventDefault();

    signin_email_box.classList.remove("please_fill");
    signin_password_box.classList.remove("please_fill");
    signin_email_box.classList.remove("please_valid");
    signin_password_box.classList.remove("please_valid");

    let e = fill_check(signin_email_box);
    let p = fill_check(signin_password_box);
    if(e && p){
        login_valid_check(signin_email_box , signin_password_box);
    }
})
function fill_check(obj){
    let str = obj.querySelector("input").value;

    if(str == ""){
        obj.classList.add("please_fill");
        return false
    }else{
        return true
    }
}
// email validation
function login_valid_check(obj1 , obj2) {

    let str = obj1.querySelector("input").value;
    var reg_email=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; 
    var reg_phone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
    var e1 = (str != '' && str != 'undefined' && reg_email.test(str)); 
    var e2 = (reg_phone.test(str));
    var p = obj2.querySelector("input").value;

    if((e1 || e2) && 6<=p.length){

    }else{
        obj1.classList.add("please_valid");
        obj2.classList.add("please_valid");
    }

}

// sign up action
const signup_btn = document.querySelector(".sign_up input[type='submit']");
const signup_email_box = document.querySelector(".sign_up .email_box");
const signup_username_box = document.querySelector(".sign_up .username_box");
const signup_password_box = document.querySelector(".sign_up .password_box");
signup_btn.addEventListener("click" , (event)=>{
    event.preventDefault();
    signup_email_box.classList.remove("please_fill");
    signup_username_box.classList.remove("please_fill");
    signup_password_box.classList.remove("please_fill");    
    signup_email_box.classList.remove("please_valid");
    signup_username_box.classList.remove("please_valid");
    signup_password_box.classList.remove("please_valid");


    let e = fill_check(signup_email_box);
    let u = fill_check(signup_username_box);
    let p = fill_check(signup_password_box);
    if( e && u && p ){
        signup_email_check(signup_email_box);
        signup_username_check(signup_username_box);
        signup_password_check(signup_password_box);
    }
})
function signup_email_check(obj){
    let str = obj.querySelector("input").value;
    var reg_email=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; 
    if(str != '' && str != 'undefined' && reg_email.test(str)){

    }else{
        obj.classList.add("please_valid");
    }
}
function signup_username_check(obj){
    let str = obj.querySelector("input").value;
    console.log(str);
    if( 2 <= str.length && str.length <= 32){

    }else{
        obj.classList.add("please_valid");
    }

}
function signup_password_check(obj){
    let str = obj.querySelector("input").value;
    if(str.length < 6){
        obj.classList.add("please_valid");
    }else{

    }
}