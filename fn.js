const fn = {
    add: (num1, num2) => num1 + num2,
    makeUser: (name, age) => ({ name, age, gender: undefined}),
    throwErr: () => {
        throw new Error('err');
    },

    getName: (callback) => {
        const name = 'Mike';
        setTimeout( () => {
            callback(name);
        }, 2000);
    },


    getAge: () => {
        const age = 30;
        return new Promise((res, rej) => {
            setTimeout( () => {
                res(age);
                //rej('err');
            }, 2000);
        });
    },

    connectUserDb: () => {
        return new Promise( res => {
            setTimeout( () => {
                res({
                    name: 'Mike',
                    age: 30,
                    gender: 'male',
                });
            }, 500);
        });
    },

    disconnectDb: () => {
        return new Promise( res => {
            setTimeout( () => {
                res();
            });
        });
    },
};

module.exports = fn;