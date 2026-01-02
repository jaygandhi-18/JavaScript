function fatchValue() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = 1;

            if(success){
                resolve("you get value ...")
            } else {
                reject("error while getting value ...")
            }

        }, 2000);
    })
}

async function getData() {
    try {
        const resulte = await fatchValue()
        console.log("resulte : ", resulte);
    } catch (error) {
        console.log("error : ", error);
    } finally {
        console.log("i am finally runs anyway");;
    }
}

getData()