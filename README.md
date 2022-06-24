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

1. Dependencies install

```
$ npm install
```

2. `.env` 셋업

```
DISABLE_ESLINT_PLUGIN=true
```

3. 실행

```
$ npm run start
```

<br/>

## 사용한 기술과 선택한 이유

- CRA : 초기세팅
- Styled-components :
- eslint & prettier

<br/>

## 구현 애니메이션

<br/>

### 영역별 등장 애니메이션

- 좌측 이미지, 지표 문구, 수상 내역 순으로 표시해야 합니다.
- 살짝 위로 떠오르는 듯한 애니메이션과 투명도를 조절하는 애니메이션을
  적용해야 합니다.
- 등장 애니메이션의 duration은 700ms이고, 애니메이션 사이 간격은
  100ms입니다.

### 숫자가 올라가는 애니메이션

- 각 숫자는 0부터 시작합니다.
- 세 숫자 모두 2초 동안 증가하고, 동시에 끝나야 합니다.
- 증가 속도가 느려지는 효과를 구현해야 합니다.
- React와 DOM API만을 이용해 구현해야 합니다.
