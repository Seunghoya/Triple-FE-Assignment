# Triple-Fe-Assignment

![완성예시](src/assets/images/triple-guide-section-1.gif)

<br/>

## 개발환경

| 종류 |      버전      |
| :--: | :------------: |
|  OS  | MacOS Monterey |
| Node |    16.13.0     |
| Npm  |     8.1.0      |

<br/>

## 프로젝트 실행

1. Project Clone

```
$ git clone https://github.com/Seunghoya/Triple-FE-Assignment
```

2. Dependencies install

```
$ npm install
```

3. `.env` 셋업

```
DISABLE_ESLINT_PLUGIN=true
```

4. 실행

```
$ npm run start
```

<br/>

## 사용한 기술과 선택한 이유

- CRA : 초기 세팅에서 웹팩의 설정을 따로 지정하지 않아도 간편하게 프로젝트를 생성, 설정을 해주기 때문에 사용했습니다.
- Styled-components : 스타일 파일을 따로 만들어서 복잡하지 않은 컴포넌트 구성에서 파일을 늘릴 필요없이 한 파일 내에서 사용하는 스타일을 쉽고 빠르게 정의 할 수 있어서 사용했습니다.
- eslint & prettier : 기존 트리플 내에서 사용중인 린트와 프리티어 플러그인을 받아서 사용했습니다.

<br/>

## 구현 애니메이션

<br/>

### 영역별 등장 애니메이션

- 좌측 이미지, 지표 문구, 수상 내역 순으로 표시해야 합니다.
- 살짝 위로 떠오르는 듯한 애니메이션과 투명도를 조절하는 애니메이션을 적용해야 합니다.
- 등장 애니메이션의 duration은 700ms이고, 애니메이션 사이 간격은 100ms입니다.

### 숫자가 올라가는 애니메이션

- 각 숫자는 0부터 시작합니다.
- 세 숫자 모두 2초 동안 증가하고, 동시에 끝나야 합니다.
- 증가 속도가 느려지는 효과를 구현해야 합니다.
- React와 DOM API만을 이용해 구현해야 합니다.
