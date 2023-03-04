//closure in js
function test() {
    let n = 2;
    function setN(arg) {
       n = arg;
    }
    function getN() {
        return n;
    }
    return {setN, getN};
}

//test().setN(4);
const v = test();
v.setN(4);
console.log(v.getN());
v.setN(10);
console.log(v.getN());