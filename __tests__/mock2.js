const fn = require('../fn');

const mockFn = jest.fn(num => num + 1);

mockFn(10, 20);
mockFn(30);

it('함수 호출은 3번 됩니다', () => {
    console.log('mockFn.mock.results:::: ',mockFn.mock.results);
    expect(mockFn.mock.calls.length).toBe(2);
});



it('mockFn이 한번 이상 호출?', () => {
    expect(mockFn).toBeCalled();
});

test('정화히 3번 호출되었나요?', () => {
    expect(mockFn).toBeCalledTimes(2);
});

test('10, 20으로 전달받은 mockFn 함수가 있는가?', () => {
    expect(mockFn).toBeCalledWith(10, 20);
});

test('마지막 함수로 20, 30을 받았는가?', () => {
    expect(mockFn).lastCalledWith(30);
});