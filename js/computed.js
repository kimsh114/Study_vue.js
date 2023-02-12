// computed => 데이터 연산을 정의하는 영역이다.
//html에서 바로 {{message.split('').reverse().join('')}}게 정의할 수도 있지만 computed로 하면 코드가 간결해짐

//computed는 1.data 속성 값이 변경되면 전체 값을 다시한 번 계산한다.
//2. 동일한 연산을 반복해서 하지 않기 위해 연산의 결과 값을 미리 저장하고 있다가 필요할 때 불러오는 캐싱이 가능하다.

// methods는 호출할 때만 해당 로직이 수행됨(수동적), computed는 대상 데이터 값이 변경되면 자동으로 수행됨.(능동적)

// 복잡한 연산을 할 때는 methods 보다는 computed가 낫다.
//computed는 js 내장 API를 활용한 연산을 함.
new Vue({
data:{
    message:'computed_test'
},
computed: {
    reverseMessage: function(){
        return this.message.split('').reverse().join('');
    }
}
// methods: {
//     reverseMsg: function(){
//         this.message = this.message.split('').reverse().join(''); // 메소드는 reverseMsg라는 메소드가 호출될 때만 바뀜.
//     }
// }
}).$mount('#app')