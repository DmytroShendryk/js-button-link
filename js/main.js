const btnGetLink = document.getElementById('btnPrompt');
const btnGoToLink = document.getElementById('btnLink');
let link;
let linkArr;
let stringLink;

btnGetLink.onclick = function() {
    link = prompt("Write link");
    linkArr = link.split("");
    let arrText = [];
    for(let i = 0; i < 7; i++) {
        arrText.push(linkArr[i]);
    }
    for(let i = 0; i < arrText.length; i++){
        if (linkArr.indexOf('://') > 0 || linkArr.indexOf('//') === 0 ) {
            continue
        } else {
            linkArr.unshift('h','t','t','p','s',':','/','/');
            break
        }
    }
    stringLink = linkArr.join("");
    console.log(stringLink);
}
btnGoToLink.onclick = function() {
    location.href = stringLink;
}