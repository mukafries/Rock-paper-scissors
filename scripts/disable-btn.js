//player name and button elements
const submit_name_btn1 = document.getElementById("name-submit-btn-1");
const submit_name_btn2 = document.getElementById("name-submit-btn-2");
const name_1_el = document.getElementById("player-1-name");
const name_2_el = document.getElementById("player-2-name");

//message element
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");

let result= false;
submit_name_btn1.addEventListener("click", () => {
  result = disable(name_1_el);
  if(!result){
    error1.textContent= "name must not be less than 5 chatacters";
  }
  else{
    error1.textContent ="ready";
    error1.style ="color: green";
  }
});

submit_name_btn2.addEventListener("click", () => {
  result = disable(name_2_el);
  if(!result){
    error2.textContent= "name must not be less than 5 characters";
  }
  else{
    error2.textContent ="ready";
    error2.style ="color: green";
  }
});

function disable(e) {
  console.log(e.value);
  if (e.value && e.value.length >= 5) {
    e.disabled = true;
    console.log(e.id + " disabled");
    return true;
  }

  console.log(e.id + " not performed");
  return false;
}
