// 부모-자식 컴포넌트 간 데이터 전달 방법
// 부모 => 자식 : props 전달
//자식 => 부모: 이벤트 발생(data도 같이 전달)

// 상위 컴포넌트인 메시지의 속성을 하위 컴포넌트인 child-com에 props로 전달하는 예제
// 상위 컴포넌트는 html에서 <div id = 'app'></div>임(뷰 인스턴스)


//2번
// 하위 컴포넌트
Vue.component('child-com', {
    //3번
    props: ['propsdata'], // props는 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용하는 속성이다.
    // 지금 이 부분은  props속성으로 props 속성의 이름을 정의함.
    //5번
    template: '<p>{{propsdata}}</p>',
});
// props의 속성을 하위 컴포넌트의 속성이 먼저 정의함. //propsdata=> props속성의 이름이다.

Vue.component('test-com', {
    props: ['dd'],
    template:'<p>{{dd}}</p>'
})

//1번
// 상위 컴포넌트
new Vue({ // 컴포넌트를 등록함과 동시에 이 뷰 인스턴스 자체가 상위 컴포넌트가 됨.
    // 상위 컴포넌트인 이 뷰 인스턴스가 props를 통해 데이터를 전달함.
el: '#app',
data: {
    message: 'Hello vue! passed from Parent Component',
    message1: '테스트 테스트'
}
});

// 뷰는 단방향의 흐름이라서 상위에서 하위로의 데이터 전달은 가능하지만 하위에서 상위로의 데이터 전달은 불가능하다.
