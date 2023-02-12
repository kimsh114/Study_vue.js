// v-bind는 아이디, 클래스, 스타일 등의 HTML 속성값에 뷰 데이터 값을 연결할 때 사용하는 데이터 연결방식이다.

new Vue ({
    data:{
        idA: 10,
        classA:'container',
        styleA: 'color : blue'
    }
}).$mount('#app');