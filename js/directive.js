// 디렉티브란 html 테그 안에 'v-' 접두사를 가지는 모든 속성들을 의미한다.
// v-if: 가정문, v-for:반복문, 
//v-show: v-if와 같은 가정문이지만 v-if는 해당 테그를 완전히 삭제하지만, 이것은 css효과만 displa:none으로 주어 실제 태그는 남아있고 화면 상으로만 보이지 않는다
// v-bind: 데이터 속성 연결,v-on: 이벤트 처리 감지
//v-model: 폼(form)에 입력한 값을 뷰 인스턴스와 즉시 동기화함,
// v-model: 화면에 입력된 값을 저장해 서버에 보내거나 watch와 같은 고급 속성을 이용해 추가로직 수행가능 <input>/<select>/<textarea>에 사용가능

new Vue ({
data:{
    flag: false,
    system:['android','ios','window'],
    uid:10
},
methods: {
    popupAlert: function(){
        return alert('경고창 표시');
    }
}
}).$mount('#app');