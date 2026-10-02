function writeLog(){
    var myString = '';
    for(var params of arguments){
        myString += `${params} -`
    }
    console.log(myString);
}
writeLog('log1', 'log2', 'log3');