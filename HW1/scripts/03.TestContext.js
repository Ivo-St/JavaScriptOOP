function testContext(){
    console.log(this);
}

function testFunction(){
    testContext();
}

testContext();

testContext.apply(new testContext());

testFunction();