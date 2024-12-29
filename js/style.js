const inner = document.getElementById("inner-image");

inner.onchange = function () {
    let file = this.files;
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = function () {
        console.log(reader.result);
        const image = document.getElementById("characters");
        image.style.backgroundImage = `url(${reader.result})`;
    };
};

const outer = document.getElementById("outer-image");

outer.onchange = function () {
    let file = this.files;
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = function () {
        console.log(reader.result);
        const image = document.getElementById("panel");
        image.style.backgroundImage = `url(${reader.result})`;
    };
};

function onlyouter(){
    const image = document.getElementById("characters");
    image.style.backgroundImage = "";
    image.style.backgroundColor = "#00000000";
}

function defaultStyle(){
    let image = document.getElementById("panel");
    image.style.backgroundImage = "";
    image.style.backgroundColor = "#242424";
    image = document.getElementById("characters");
    image.style.backgroundImage = "";
    image.style.backgroundColor = "#fefefe";
    inner.value = "";
    outer.value = "";
}

const title = document.getElementById("title");
const firstnight = document.getElementById("firstnight");
const othernight = document.getElementById("othernight");

function setTitleColor(color){
    title.style.color = color;
    // firstnight.style.color = color;
    // othernight.style.color = color;
}

function setTitleBlack(){
    setTitleColor("black")
}
function setTitleWhite(){
    setTitleColor("white")
}