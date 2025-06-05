# CXO 우지훈 이모지 페이지 테스트

이 프로젝트는 다양한 이모지와 특수 문자를 검색하고 복사할 수 있는 간단한 웹 페이지입니다.

## 요구 사항
- Node.js 18 이상
- npm

## 설치
```bash
npm install
```

## 실행
정적 파일을 제공하는 간단한 서버에서 실행해야 `fetch` 요청이 제대로 동작합니다. 예를 들어:

```bash
npx serve .
# 또는
python -m http.server 8000
```

브라우저에서 `http://localhost:3000`(serve 기본 포트) 혹은 `http://localhost:8000`으로 접속합니다.

## 테스트
```bash
npm test
```

Jest를 사용하여 단위 테스트를 실행합니다.
