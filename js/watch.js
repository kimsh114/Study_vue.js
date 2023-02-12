// watch는 데이터 호출과 같이 시간이 상대적으로 더 많이 소모되는 비동기 처리에 적함.

new Vue({
data: {
    message: '와치 와치'
},
watch: {
    message: function(test){
        console.log('message 값이 바뀜니다.', test)
    }
}
}).$mount('#app')