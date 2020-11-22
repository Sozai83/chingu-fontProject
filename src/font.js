const DOM ={
    inputText : 'inputText',
    outputText : '.text-box',
    fontSize: 'font-size',
    reset : '.reset-btn',
    menubar :'.fa-bars',
    navLists :'.nav-lists',
    li : '.nav-list'

};

const init ={
    fontSize : '24px',
    text : 'Hello world'
}

const getInputData = document.getElementById(DOM.inputText);
const getFontSize = document.getElementById(DOM.fontSize);
const outputs = document.querySelectorAll(DOM.outputText);
const resetEverything = document.querySelector(DOM.reset);
const displayMenu = document.querySelector(DOM.menubar);
const navWrapper = document.querySelector(DOM.navLists);
const lists = document.querySelectorAll(DOM.li);

getInputData.addEventListener('input', function(){
    outputs.forEach(cur => cur.innerHTML = getInputData.value)
});

getFontSize.addEventListener('change',function(){
    console.log(getFontSize.value);
    outputs.forEach(cur => cur.style.fontSize =  getFontSize.value);
})

resetEverything.addEventListener('click', function(){
    outputs.forEach(cur =>{
        cur.style.fontSize =  init.fontSize;
        cur.innerHTML = init.text;
        getFontSize.value = init.fontSize;
        getInputData.innerHTML = init.text;
        getInputData.value = '';
    })
})

displayMenu.addEventListener('click', function(){
    console.log("it's wroking");
    navWrapper.classList.toggle('display');
    lists.forEach(cur => cur.classList.toggle('display'));
})

///the text doesn't wrap when input is so long without spaces.
// if you resize the window after click the menu button, the 'display' classs reamins as same.

//menu close automatically.
//switch card to list npm 
//add max-width or 