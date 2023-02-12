//// 10이라는 인자값을 num으로 전달하는 과정
// new Vue({
    
// methods:{
//     // function(num) => 넘긴 인자값을 num이라는 전달값으로 받음.
//     clickBtn: function(num){
//         alert('clicked'+num+'times');
//     }
// }
// }).$mount('#app');


// event인자를 이용해 화면 요소의 돔 이벤트에 접근하는 과정
new Vue({
    
    methods:{
        // 이 인자가 굳이 event일 필요는 없지만 그래도 이벤트라고 쓰자
        // html 태그에서 위에처럼 메소드에 인자를 전달하지 않아도 인스턴스 자체에서 인자를 전달 가능하다.
        clickBtn: function(event){
            console.log(event);
        }
    }
    }).$mount('#app');