// Main 과 Login 컴포넌트를 정의함.
var Main = {template: '<div>main</div>'};
var Login = {template: '<button>login</button>'};

// 각 url에 맞춰 표시할 컴포넌트 지정
// /main => Main 컴포넌트, /login => Login 컴포넌트
var routes = [
    {path: '/main', component:Main},
    {path:'/login', component:Login}
];
// 뷰 라우터를 정의 (바로 뷰 인스턴스에 routes를 적으면 실행이 안됨)
// 이 부분이 뷰 라우터에 routes를 연결하는 부분임.
//VueRouter를 생성
var router = new VueRouter({
    mode: 'history', // mode: 'history'=> #/login 과 같이 앞의 #값을 없애는 작업
routes
});

// 뷰 인스턴스에 라우터를 추가
var app = new Vue({
    router
}).$mount('#app');
//.$mount('#app') => el 속성과 같이 인스턴스를 화면에 붙여주는 역할을 함.