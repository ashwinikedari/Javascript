process.nextTick(function C() {
    console.log("1st process");
});
console.log("program started");

setTimeout(()=>{
    console.log("1st Timeout");
},100);

setImmediate(function A() {
    console.log("1st immediate");
});

console.log("program started 2");

process.nextTick(function C() {
    console.log("2nd process process");
});

/***Output will be as follows */

// program started
// program started 2
// 1st process
// 2nd process process
// 1st immediate
// 1st Timeout