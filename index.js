console.log("This is my console");

function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

let addedParamCount = 0;

// hide the parameters box initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// if users click params ,hide json Box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})
// if users click json ,hide parameterBox
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
})

// if the user clicks on add button 
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = ` <form class="row g-3">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamCount + 2}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey1" placeholder=" Enter Parameter ${addedParamCount + 2} key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue1" placeholder="Enter Parameter ${addedParamCount + 2} value">
                    </div>
                    <div class="col-md-1">
                        <!-- <input type="password" class="form-control" id="inputPassword4"> -->
                        <button class="btn btn-primary" id="addParam">-</button>
                    </div>
                    </form>`;
                    
    // convert element string to DOM node
    let paramElement = getElementFromString(string);
    console.log(paramElement);
    addedParamCount++;

})

