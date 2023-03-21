const fn = require('../../fn');

/*
    callback을 사용할 때는 done 인자를 꼭 받아야 함.
    (done을 받지 않으면 콜백함수가 실행은 되나 정상적으로 실행되지 않음)
*/
//  test("2초 후에 받아온 이름은 Mike", (done) => {
//     function callback(name){
//         try {
//             expect(name).toBe("Mike");
//             //callback 함수를 사용할 때는 함수에 done 을 받아서 리턴해줘야 한다.
//             done();
//         } catch (error) {
//             done();
//         }
//     }
//     fn.getName(callback);
// });

/*
 Promise를 사용하는 경우에는 무조건 return 을 작성해서 받아야 한다.
( return을 작성하지 않으면 콜백함수가 실행은 되나 정상적으로 실행되지 않음)
 Promise(resolve, rejects)
    new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>
*/
// test("2초 후에 받아온 나이는 30", () => {
//     // return fn.getAge().then( age => {
//     //     expect(age).toBe(30);
//     // });

//     //보다 간단히 작성하고 싶으면 matcher를 이용하여
//     // resolves, rejects
//     return expect(fn.getAge()).resolves.toBe(30);

//     //return expect(fn.getAge()).rejects.toMatch('err');
// });

/**
 * async > await 처리
 */
// test('2초 후 나이 30 테스트', async () => {
//     const age = await fn.getAge();
//     expect(age).toBe(30);
//     //await expect(fn.getAge()).resolves.toBe(30);
// });

let user;

//beforeEach > 테스트가 시작되기전에 무조건 실행한다.
//beforeAll > 최초 테스트 시작 전에 한번만 실행한다.

//afterEach > 테스트가 끝나고나서 매번 실행한다
//afterAll > 테스트가 끝나고 마지막 한번만 실행한다.

/*
beforeAll( async () => {
    user = await fn.connectUserDb();
});

afterAll( () => {
    return fn.disconnectDb();
});

it('내 이름은 Mike', () => {
    expect(user.name).toBe('Mike');
});

it('내 이름은 Mike', () => {
    expect(user.age).toBe(30);
});

it('내 이름은 Mike', () => {
    expect(user.gender).toBe('male');
});
*/

/*
beforeAll( () =>  console.log("밖 beforeAll"));         // 1
beforeEach( () => console.log("밖 beforeEach"));        // 2, 6
afterEach ( () => console.log("밖 afterEach"));         // 4, 10
afterAll ( () => console.log("밖 afterAll"));           // 마지막

test("0 + 1", () => {
    console.log("밖 test")
    expect(fn.add(0, 1)).toBe(1);                       // 3
});

describe("describe 작업", () => {
    beforeAll( () =>  console.log("안 beforeAll"));         // 5
    beforeEach( () => console.log("안 beforeEach"));        // 7
    afterEach ( () => console.log("안 afterEach"));         // 9
    afterAll ( () => console.log("안 afterAll"));           // 마지막 -1

    test("0 + 1", () => {
        console.log("안 test")
        expect(fn.add(0, 1)).toBe(1);                       // 8
    });
});
*/

/**
 * skip : 해당 테스트함수를 skip
 * only : 해당 테스트함수만 실행
 */

let num = 0;
test('0 + 1 = 1', () => {
  expect(fn.add(0, 1)).toBe(1);
});

test.only('0 + 2 = 2', () => {
  expect(fn.add(0, 2)).toBe(2);
});
