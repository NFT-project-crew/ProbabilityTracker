function handle(e) {
    if (e.keyCode === 13) {
        calculation()
    }
}

const calculation = function (e) {
    let regex = ""
    let nrOfOccurrences = 0;
    const currentQuery = document.querySelector('.inputString').value;
    let resultList = "";
    let currentValue = currentQuery;
    //  console.log(currentValue);
    if (document.getElementById('getWhole').checked == true) {
        console.log("getWholeSelected");
        listFile.forEach(function (value) {
            // console.log(value);
        })

        for (var i = 0; i < currentQuery.length; i++) {

            regex += `[a-zA-Z0-9]*${currentQuery.charAt(i)}[a-zA-Z0-9]*`
        }

        re = new RegExp(regex);

        console.log(regex)
        listFile.forEach(function (value) {
            // console.log(value);
            if (re.test(value)) {
                nrOfOccurrences++
                resultList += `${value} \n <br/>`
                //console.log(resultList)
            }
        })



    } else {
        // console.log("getSequential selected");
        listFile.forEach(function (value) {
            // console.log(value);
            if (value.includes(currentQuery)) {
                nrOfOccurrences++
                resultList += `${value} \n <br/>`
                // console.log(resultList)
            }
        })
    }

    //  console.log(nrOfOccurrences)

    document.querySelector(".results").innerHTML = resultList
    document.querySelector(".probability").innerHTML = `${nrOfOccurrences}/${listFile.length} <br/> Probability: ${(nrOfOccurrences / listFile.length) * 100}%`


}




// selectElement.addEventListener('input', calculation);
// selectElement.addEventListener('propertychange', calculation);

