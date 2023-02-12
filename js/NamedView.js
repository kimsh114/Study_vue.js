// 네임드 뷰는 여러 개의 컴포넌트를 동시에 표시하는 라우팅 방식이다. 
//여러 개의 컴포넌트를 한 번에 표시한다.

// 각 컴포넌트의 내용을 정의
var Body = {template: '<div>this is body</div>'}
var Header = {template: '<div>this is header</div>'}
var Footer = {template: '<div>this is footer</div>'}

var router = new VueRouter ({
 
routes: [{ // nested router 같은 경우 밖에서 따로 routes를 정의해줬지만 여기서는 바로 안에서 routes를 정의를 함.
    path:'/',
    components: { // <router-view>의 name 속성과 컴포넌트를 연결함.
default: Body,
header: Header,
footer:Footer
}

}]
})

// 뷰 인스턴스에 라우터 추가
var app = new Vue({
    router 
}).$mount('#app')



