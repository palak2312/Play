let inputs = document.querySelectorAll('input');
console.log(inputs);

function f()
{
    
 console.log(this.value);
//    console.log(this.dataset);
   const suffix=this.dataset.size || '';
//    console.log(suffix);
//    console.log(this.id);
document.documentElement.style.setProperty(`--${this.id}`,this.value + suffix);

}

inputs.forEach(x=>{
    x.addEventListener('change',f);
});
inputs.forEach(x=>{
    x.addEventListener("mousemove",f);
});




