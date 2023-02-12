// 네스티드 라우터는 라우터로 페이지를 이동할 때 최소 2개 이상의 컴포넌트를 화면에 나타낼 수 있다.
// 네스티드 라우터는 화면을 구성하는 컴포넌트의 수가 적을 때는 유용하지만 한 번에 많은 컴포넌트를 표시하는데는 한계가 있다.
// 위의 문제를 해결하는 것이 네임드 뷰이다.

// 여기부터
var User = { //User 컴포넌트를 상위 컴포넌트로
    template:`
    <div>
    User Component
    <router-view></router-view> 
    </div>`
    // 최상위 컴포넌트에도 router-view가 있다 => 즉 최상위 컴포넌트인 id = app 컴포넌트에도 router-view가 있고 하위 컴포넌트인
    // User에도 router-view가 있다.
    //<router-view></router-view> => 하위 컴포넌트가 뿌려질 영역이다.
};
var UserProfile = {template: '<p>User Profile Component</p>'};
var UserPost = {template: '<p>User Post Component</p>'};
// 여기까지가 컴포넌트의 내용을 정의하는 구간이다.

// 네스티드 라우팅 정의 children 안에 하위 컴포넌트 적기
var routes = [
    {path: '/user', 
    component:User,
    children:[{
        path:'posts', component:UserPost
    },
    {path:'profile',component:UserProfile}
]},
   
    
];

// 뷰 라우터 정의
var router = new VueRouter({
    routes
});


// 뷰 인스턴스에 라우터 추가
var app = new Vue({
    
    router 
}).$mount('#app')




