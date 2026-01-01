function getValue() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if(success){
                resolve("you get value ...")
            } else {
                reject("error while getting value ...")
            }

        }, 2000);
    })
}

getValue()
    .then((resulte)=>{
        console.log("resulte : ", resulte);
    })

    .catch((error)=>{
        console.log("error : ", error);
    })

    .finally(()=>{
        console.log("i am finally runs anyway");
        
    })

