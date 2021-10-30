const fn = require('./fn');


// test('1 ==  1 ? ', () => {
//     expect(1).toBe(1);
// });

/*
    toBe() 와 toEquals 차이
    
*/
// test('2 + 3 = 5', () => {
//     expect(fn.add(2,3)).toBe(5);
// });

// test('2 + 3 = 5', () => {
//     expect(fn.add(2,3)).toEqual(5);
// });


//부정
test('3 + 3 은 5가 아니야',
 () => {
    expect(fn.add(3,3)).not.toBe(5);
});

let objNameAge = ({
    name: 'lee',
    age: 30
});

//console.log('타입좀 알려줘',typeof objNameAge)
// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//     expect(fn.makeUser('lee', 30)).toEqual(objNameAge);
// });

// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//    // toBe 사용시 
//    // expect(received).toBe(expected) // Object.is equality 에러 반환
//    // If it should pass with deep equality, replace "toBe" with "toStrictEqual" 
//     expect(fn.makeUser('lee', 30)).toBe(objNameAge);
// });


// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//     //엄격모드
//     expect(fn.makeUser('lee', 30)).toStrictEquals(objNameAge);
// });


