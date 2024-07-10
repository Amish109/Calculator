function customEValue(stringValue){
    var numString=stringValue;
    // var numString="2+3-5*10/2"
    var number=[];
    var digit="";
    for(let i=0;i<numString.length;i++){
        if(numString[i]!="+" &&numString[i]!="-" && numString[i]!="*" &&numString[i]!="/" &&i!=numString.length-1){
            digit+=numString[i];
        }
        else if(i==numString.length-1){
            digit+=numString[i];
            number.push(digit)
            digit=""
        }
        else{
            number.push(digit)
            number.push(numString[i])
            digit=""
        }
    }
    console.log(number);
    for(let j=0;j<number.length;j++){
        let addData;
        if(number[j]=="*"||number[j]=="/"){
            addData= number[j]=="*"? +number[j-1] * +number[j+1]: +number[j-1] / +number[j+1];
            number.splice(j-1,3,addData)
            j=j-1;
        }
    }
    console.log(number)
    for(let k=0;k<number.length;k++){
        let addData;
        if(number[k]=="+"||number[k]=="-"){
            addData= number[k]=="+"? +number[k-1] + +number[k+1]: +number[k-1] - +number[k+1];
            number.splice(k-1,3,addData)
            k=k-1;
        }
    }
    result=number[0]
    console.log(number)
    return result
    }


