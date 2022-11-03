# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# VALUN FROENTEND

---

### Introduction

---

#### 안내 사항

##### 0. 개발 환경

VALUN 은 다음과 같은 환경에서 제작되었습니다.
MacBook Air (M1, 2020)
Node.js v16.16.0
Yarn v1.22.19
아래에 서술된 내용은 관련 프로그램이 사전에 설치되어있음을 가정하고 작성되었습니다.

##### 1. 공통

이슈 제보나 커뮤니티 게시글 등록 등의 기능을 이용하더라도, 조회가 불가능할 수 있습니다. 아래에 이유를 서술하였습니다.
로그인 관련 기능은 구현되어있으나, 개발 단계의 편의성을 위해 비활성화된 상태입니다. Issue 또는 Community 기능을 이용할 때, 서버에서는 자동으로 "test1" 계정의 request 로 간주하고 처리합니다.

##### 2. Issue

API 서버는 별도의 Cloud Service 를 통해 배포된 상태이지만, 항상 master branch 와 동기화 되지는 않습니다. 특히 서비스에서 가장 중요한 기능인 AI 서버의 경우 별도의 하드웨어 자원을 필요로 하기에 Cloud 에 배포하지 않았습니다.
VALUN 의 이슈 제보 기능을 통해 제보한 이슈는 반드시 AI Server 의 Detection 을 거쳐야만 조회가 가능하도록 구성되어 있습니다. 따라서 이슈를 제보하면 서버의 데이터베이스에 기록은 되지만, 지도에서 조회할 수는 없습니다. 만약 제보한 이슈를 확인하고 싶다면 VALUN-API 를 로컬 또는 클라우드에서 실행한 후, 별도로 AI 모델을 사용하는 서버와 연결하여야 합니다.

##### 3. Community

VALUN 의 커뮤니티 일부 기능은 현재 테스트 단계에 있습니다. 이용이 불가능할 수 있습니다.

### How to start

---

##### 1. 필수 패키지 설치

프로젝트를 실행하려면, npm 또는 yarn 등의 Node.js 패키지 매니저를 통해 프로젝트에 필요한 dependency 를 설치해야 합니다. package.json 파일이 존재하는 소스의 최상위 디렉토리에서 다음의 명령을 통해 설치할 수 있습니다.

    npm install
    // 또는
    yarn install

##### 2. 실행 전 확인사항

src > service.js > TownCleanerAPI 객체의 baseUrl 속성에 VALUN 의 API 서버의 주소를 기입해야 합니다.
개발 단계에서 사용한 많은 주소들이 주석처리 되어있습니다. 현재 배포한 VALUN API 서버의 주소는 https://valun.kro.kr 입니다. 상황에 맞게 적절히 수정하여 사용하면 됩니다.

##### 3. 실행 방법

package.json 파일이 존재하는 소스의 최상위 디렉토리에서 다음의 명령을 통해 VALUN 을 실행할 수 있습니다.

    npm run start
    // 또는
    yarn start
