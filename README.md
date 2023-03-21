
### jest 학습하기

```
$ npm install jest --save-dev

### 사용방법
$ npm test
```


# global로 npm-check-updates 설치
$> npm i -g npm-check-updates

### 패키지 설치
```
    npm install -g ts-node typescript @types/node
    npm install -D jest
    npm install @types/jest ts-jest
```


# 테스트 설정
```JSON
"jest": {
    "rootDir": "src",
    "moduleNameMapper": {
        "^@src/(.*)$": "<rootDir>/$1",
        "^@root/(.*)$": "<rootDir>/../$1"
    },
    "moduleFileExtensions": [
        "js",
        "json",
        "ts"
    ],
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
        "^.+\\.(t|j)s$": "ts-jest"
    },
    "coverageDirectory": "../coverage",
    "coveragePathIgnorePatterns": [
        "node_modules",
        ".entity.ts",
        ".input.ts",
        ".return.ts",
        "DefaultEntity.ts"
    ],
    "testEnvironment": "node"
}
```