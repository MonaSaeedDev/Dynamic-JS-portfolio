const prog = document.getElementById("prog") ;
const addSkill = document.getElementById("Add");
const removekill = document.getElementById("Remove");
var coun = 1;

 
addSkill.addEventListener("click", () => {
    const barSkill = document.createElement("div");
    barSkill.className = "bar-skill";
    barSkill.id = `skill0${coun}`;
    coun++;
    const divBar = document.createElement("div");
    divBar.className = "bar";
    divBar.innerText = "70%";
    const progress = document.createElement("div");
    progress.className = "progress"
    progress.appendChild(divBar);
    const label = document.createElement("label");
    label.textContent = "HTML";
    barSkill.append(label);
    barSkill.append(progress);
    prog.append(barSkill);
    console.log(prog);
});

let j = coun;
removekill.addEventListener("click", () => {
    const remove = document.getElementById(`skill0${coun}`);
    console.log(remove);
    console.log(j);
    coun--;
    remove.remove();

});


































