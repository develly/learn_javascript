# LECTURE 1 NOTE

## 1. Hello world 출력하기

```console.log("Hello World");```


1) 터미널에서 실행하기  
node 파일명


2) 웹에서 실행하기 (MacOS 기준)  
vscode > Live server 설치 > 브라우저 열기 (cmd+L, cmd+O) >  개발자 도구 열기 (cmd + option + i) > console 확인


(참고)  
console.log는 JavaScript 언어가 아니라 web API 임  
개발자 도구의 console 창에서 간단한 결과를 확인할 수도 있음 (예: alert('hi'))  
그 외의 탭들도 유용하며 source 탭은 디버깅에 좋음</br></br>

## 2. HTML에 JavsScript 포함 시키기

```index.html``` 파일 생성  
`!`입력시 html 기본 구조가 자동 완성 됨


컴퓨터는 html을 한줄씩 읽고 처리함(parsing)  
parsing + css => Dom  


**HTML에 JavsScript 포함시키기**  
1) head 안에 src 포함시키기  
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script defer src="main.js"></script>
    </head>
    <body>
    </body>
    </html>
    ```

   **프로세스 흐름**  
   html 한 줄씩 읽으며 parsing > ```script```태그를 만나면 parsing을 멈추고 scoure code를 서버에서 다운(Fetching) > 다운로드 완료시 실행(Executing) > 남은 html 코드 parsing


   **단점**  
   인터넷 속도가 느리거나 source의 용량이 크다면 사용자가 웹 페이지를 보기까지 시간이 꽤 걸림 </br></br>

2) body 안에 src 포함시키기  
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <script defer src="main.js"></script>
    </body>
    </html>
    ```


   **장점**  
   기본적인 웹 페이지 컨텐츠를 빠르게 볼 수 있음


   **단점**  
   body에 들어가 있는 내용이 웹 페이지 이용에 핵심적인 내용이라면 사용자가 의미있는 정보를 보기까지는 시간이 꽤 소요 됨</br></br>


3) head 안에 aysn src 포함시키기 
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script asyn src="main.js"></script>
    </head>
    <body>
    </body>
    </html>
    ```

   **프로세스 흐름**  
   html 한 줄씩 읽으며 parsing > ```script``` 태그를 만나면 parsing과 scoure code Fetching을 병렬로 진행 > 다운로드 완료시 실행(Executing) > 남은 html 코드 parsing


   **장점**  
   Fetching 시간 절약


   **단점**  
   Fetching이 완료되면 언제든지 source가 실행되므로 여전히 페이지 로드에 시간이 소요됨  
   source 안에서 아직 parsing 되지 않은 html 내용을 이용한다면 에러가 발생할 수 있음  


   (참고)  
   aysn은 boolean 타입으로 선언시 true로 설정됨</br></br>


4) head 안에 defer src 포함시키기 (!very good!)
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script asyn defer="main.js"></script>
    </head>
    <body>
    </body>
    </html>
    ```

   **프로세스 흐름**  
   html 한 줄씩 읽으며 parsing > ```script``` 태그를 만나면 parsing과 scoure code Fetching을 병렬로 진행 > 남은 html 코드 parsing > parsing 완료시 실행(Executing)


   **장점**  
   Fetching 시간 절약, 안정적인 souce code 실행</br></br>


## 3. asyn와 defer의 차이점

asyn은 코드 순서와 상관없이 다운로드가 완료되는 파일 순서대로 실행함  
defer은 코드 순서와 동일하게 실행됨</br></br>


## 4. use strict

```'use strict';```
자바스크립트 파일 맨 위에 선언  
type script를 사용하면 선언할 필요 없지만 Vanlia JavaScript를 사용한다면 꼭 선언해줄 것!


ECMA Script 5 (ES 5)에 추가되어져 있어서 정확한 문법을 구사할 수 있도록 함  
사용시 장점 : 실행 속도 향상


예시)  
use strict 선언 전: ```a=6;``` 에러 발생 하지 않음  
use strict 선언 후: ```a=6;``` 에러 발생 (a is not defined)   


(참고)  
JavaScript는 브랜든이 10일 만에 만든 문법으로 매우 유연한 문법이다.  
유연한 문법은 사용하기에 편리하다는 장점이 있지만 에러를 고치기 힘들다는 위험성 또한 가지고 있다.