describe('Соответсвие значений', () => {
    it('Проверка значения переменной a на 10', function () {
        let a = 10;
        expect(a).toBe(10);
        // expect(a).not.toBe(10);
    });
});

describe('Дополнительные функции', () => {
    it('Сравнение объектов', function () {
        const myGo = () => {};

        const user1 = {
            name: 'John',
            age: 30,
            go: myGo,
        };
        const user2 = {
            name: 'John',
            age: 30,
            go: myGo,
        };

        expect(user1).toEqual(user2);
    });

    it('RegExp', function () {
        let str = 'Test AbcD Jasmine';

        expect(str).toMatch(/abcd/i);
    });

    it('Arrays', function () {
        const arr1 = ['black', 'white'];
        const arr2 = ['white', 'black'];

        // expect(arr1).toEqual(arr2);
        expect(arr1).toContain('black');
    });
});

// для каждого теста есть not
// expect().toBeNull();
// expect().toBeUndefined();
// expect().toBeTrusty();
// expect().toBeFalsy();
// expect().toBeNaN();
// expect().toBeGreaterThan();
// expect().toBeGreaterThanOrEqual();
// expect().toBeLessThan();
// expect().toBeLessThanOrEqual();
// expect().toBeCloseTo();
