process.nextTick(function(){
    console.log("nextTick execute1")
});

process.nextTick(function(){
    console.log("nextTick execute2")
});

setImmediate(function(){
    console.log("setImediate execute1")
    process.nextTick(function(){
        console.log("reinforce insect")
    });
});

setImmediate(function(){
    console.log("setImediate execute2")
});

console.log("normal execute!!");