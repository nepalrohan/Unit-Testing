// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });




// test('two plus two is four' ,()=>{
//   expect(2+2).toBe(4);
// })



// test('object assigment', ()=>{
// const data = { one:1};
// data['two'] =2;

// expect(data).toEqual({one:1, two:2});
// })





// falsy

//it is for 0, null, undefined, false.
// test('null is falsy', ()=>{

// const n = null;
// expect(n).toBeFalsy();

// })


// truthy

// test('truthy', ()=>{
//   const n= 1;
//   expect(n).toBeTruthy();
// })



//throw()
const myFunction = require('./sum.js');
test('throw error on invalid input', ()=>{

  expect(()=>{
    myFunction(5);
  }).toThrow()

})