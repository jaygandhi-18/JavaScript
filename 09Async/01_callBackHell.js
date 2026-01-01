
function getId(idNumber, delayId) {
    setTimeout(()=>{
        console.log(`id is ${idNumber}`);
        if (delayId){
            delayId();
        }
    }, 5000);
}

console.log(`Getting 1st Id....`);    


getId(1,()=>{
    console.log(`Getting 2nd Id....`);    
    getId(2,()=>{
        console.log(`Getting 3rd Id....`);    
        getId(3,()=>{
            console.log(`Getting 4th Id....`);    
            getId(4,()=>{
                console.log(`Getting 5th Id....`);    
                getId(5)
            })
        })
    })
});
