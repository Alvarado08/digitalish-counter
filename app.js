const count = document.querySelector("#count");
const btn_count = document.querySelector("#btn-count");
const btn_reset = document.querySelector("#btn-reset");

let counter = 0;
count.textContent = counter;

const counting = () => {
    counter++;
    count.classList.add("scale-110", "-translate-y-1");
    count.textContent = counter;
    // count.classList.remove("scale-110");
    if(counter > 0){
        btn_reset.classList.remove("hidden");
        btn_reset.classList.add("block");
    }
}

const reset = () => {
    counter = 0;
    count.textContent = counter;
    btn_reset.classList.remove("block");
    btn_reset.classList.add("hidden");
}

btn_count.addEventListener("click", counting);
btn_reset.addEventListener("click", reset);