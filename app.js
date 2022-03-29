window.addEventListener("keydown", (event) => {
    let numKey = document.getElementById("displayKey"); //assigned the keyDisplay id from html to numKey
    
    let keyClick = event.key; // .key = generates an event of the key that was executed

    numKey.innerHTML = `${keyClick}`; //inner.html will target the text inside the numKey (which is displayKey ID)

    //location part-----------------

    let locKey = document.getElementById("displayLocation");

    let locClick = event.location;

    locKey.innerHTML = `${locClick};`
    //location part end---------------



    //better way to display the code
    let codeKey = document.getElementById("displayCode");
    
    let altKey = document.getElementById("displayAlt");



    let codeClick = event.code;
    let altClick = event.altKey;


    codeKey.innerHTML = `${codeClick}`
    altKey.innerHTML = `${altClick}`



});