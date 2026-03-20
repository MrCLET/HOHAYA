function formatNumber(num){
if(num >= 1000000) return (num/1000000).toFixed(1)+"M";
if(num >= 1000) return (num/1000).toFixed(1)+"K";
return num;
}

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

let target = counter.dataset.target;
let count = 0;

let interval = setInterval(() => {

count++;

counter.textContent = formatNumber(count);

if(count >= target){
clearInterval(interval);
}

}, 0.3);

});



document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector("span");

    // Toggle content
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.classList.remove("rotate-180");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add("rotate-180");
    }
  });
});