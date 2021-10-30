const fn = require('./fn');


/**
 * toBeNull
 * toBeUndefined
 * toBeDefined
 */

// test("null은 null입니다.", () => {
//     expect(null).toBeNull();
// });



/**
 * toBeTruthy
 * toBeFalsy
 */
// test("0은 false 입니다.", () => {
//     //expect(fn.add(1,-1)).toBeFalsy();
//     expect(fn.add("hello","world")).toBeTruthy();
// })



/**
 * toBeGreaterthan
 * toBeGreaterThanOrEqual 크거나 같다
 * toBeLessThan 작다
 * toBeLessThanOrEqual 작거나 같다 
 */
// test("ID는 10자 이하여야 합니다.", () => {
//     const ID = 'abcdefghij';
//     expect(ID.length).toBeLessThanOrEqual(10);
// });


/**
 * toBeCloseTo : 가까운 값
 */
// test("0.1 더하기 0.2 는 0.3입니다", () => {
//     /*
//     Expected: 0.3 
//     Received: 0.30000000000000004
//     2진법을 사용하기 때문에 toBeCloseTo로 값이 가까운지 확인
//     */
//     //expect(fn.add(0.1, 0.2)).toBe(0.3);
//     expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
// });

/**
 * 정규식 활용
 */
// test('Hello World에 w가 있나요?', () => {
//     expect('Hello world').toMatch(/w/i)
// });

/**
 * toContain
 */
// test("유저리스트에 Mike가 있는가?", () => {
//     const user = 'Mike';
//     const userList = ["Tom", "Mike", "Kai"];
//     expect(userList).toContain(user);
// });



/**
 * Exception Throw
 */
test("에러가 나나요?", () => {
    //expect( () => fn.throwErr()).toThrow();
    expect( () => fn.throwErr()).toThrow('err');
    //expect( () => fn.throwErr()).toThrow('eeeeee');
});


/**
 * expect function URL
/*
https://jestjs.io/docs/en/expect
https://jestjs.io/docs/api
https://jestjs.io/docs/cli
*/

