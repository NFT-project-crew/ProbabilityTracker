let listFile;
function getData(){       //this will read file and send information to other function
    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();               
    }           
    else {               
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
    }

    xmlhttp.onreadystatechange = function () {               
        if (xmlhttp.readyState == 4) {                   
          var lines = xmlhttp.responseText;    //*here we get all lines from text file*

          intoArray(lines);                    
        }               
    }

    xmlhttp.open("GET", "RDY.txt", true);
    xmlhttp.send();    
}

function intoArray (lines) {
// splitting all text data into array "\n" is splitting data from each new line
//and saving each new line as each element*

listFile = lines.split('\n'); 
//just to check if it works output lineArr[index] as below

console.log(listFile)
}

getData()