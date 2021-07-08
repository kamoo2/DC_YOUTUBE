# React를 이용한 Youtube Web Application

## React Project 구현시 TIP POINT

### 리액트 컴포넌트는 최대한 멍청하게 만들어야 합니다.

리액트 컴포넌트는 단지 View의 역할만 하도록 만들어야 합니다.
api관련 로직이나 다양한 로직들은 따로 클래스로 묶어서 제공하는게 좋습니다.

#### service/youtube.js 파일

이 파일은 api에 관련된 역할을 하는 아이들을 묶어서 클래스로 구현한 파일입니다.
일단 생성자로 key와 option을 생성해주고 각각의 필요한 api를 받아오는 함수를 구현합니다.
그리고 Youtube 클래스를 app.jsx에서 구현하게 되면 해당 컴포넌트가 랜더링 될 때마다 새롭게 Youtube객체가 생성되므로
좋지 않습니다. 따라서 프로젝트에서 처음 딱 한번 랜더링 되는 index.js에서 이를 생성해주고 props로 전달해주는게 Best !!
