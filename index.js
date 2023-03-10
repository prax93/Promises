const myFunctionToSetVariable = function(){
    return 2;
};

let myPromise = new Promise((resolve, reject)=>{

    let test = myFunctionToSetVariable();

    if(test == 2){
        resolve('Resolved')
    }
    else{
        reject('Rejected')
    }

});


myPromise
    .then((message)=>console.log(message))
    .catch((error)=> console.error(error));



