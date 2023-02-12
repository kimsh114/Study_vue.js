<template>
    <div class = 'inputBox shadow'>
    <input  type="text" placeholder="할 일을 적어주세요." v-model='newTodoItem' v-on:keyup.enter = 'addTodo'> 
    <!-- 텍스트 값을 인식할 수 있도록 v-model디렉티브와 데이터 속성 추가 -->
    <!--v-on:keyup.enter = 'addTodo' => 엔터를 눌렀을 때 addTodo 매소드가 실행되라 -->
    <sapn class="addContainer" v-on:click="addTodo"> 
        <!-- span=> button 대신 클릭 이벤트를 받을 테그 -->
   <i class="addBtn fas fa-plus" aria-hidden="true"></i>
   <!-- 어썸 아이콘의 + 아이콘 추가  -->
    </sapn>

<!-- 경고창을 위한 모달 -->
    <modal :show="showModal" @close="showModal = false">
     <!-- 모달 헤더 -->
        <h3 slot="header">알림</h3> 
        <!-- 모달 푸터 -->
        <span slot='body'></span>
        <span slot="footer" @click="showModal=false">
            할 일을 입력하세요
        <i class = 'closeModalBtn fas fa-times' aria-hidden="true"></i>
        </span>
      
    </modal>

    </div>

</template>

<script>
// common 파일의 모달을 불러오는 작업
import Modal from './common/Modal.vue'

export default {
data() {
    return{
        newTodoItem: '',
        showModal: false // 모달 동작을 위한 플래그 값
    }
},
methods:{
    //여기에서 addTodo의 역할은 입력했다는 이벤트를 발생시킴// 어떤 이벤트냐면 addTodo_test라는 이벤트와 value를 전달해주는 이벤트임.
    addTodo(){
        //이 부분은 검색한 것을 로컬스토리지에 저장하는 부분
        // addTodo 안의 this는 이 컴포넌트를 가르킴(여기 컴포넌트는 app컴포넌트임.)
        // 그러므로 addTodo에서 this를 사용하면 clearInput 메소드를 사용이 가능
        // input 박스에 입력값만 있을 때만 로컬스토리지에 저장을 하라
        if(this.newTodoItem !== '') {
            var value = this.newTodoItem && this.newTodoItem.trim(); // trim()은 문자열 앞뒤의 공백 제거
            this.$emit('addTodo_test', value, console.log('추가 이벤트 발생')) 
            this.clearInput(); // 아래 clearInput 메소드를 호출하고 있다.
        } else{
            this.showModal = !this.showModal; // 텍스트를 입력하지 않으면 modal을 동작하도록함.
        }
    },
    clearInput(){
        this.newTodoItem = ''; // 한 번 입력하고 난 뒤 새로고침 시에 디폴트 값을 빈 공백으로 한다.
    }
  
    },
    components: {
        Modal: Modal // 모달 컴포넌트 등록
    }
}


</script>

<style scoped> 
/* scoped => 현재 컴포넌트 범위에서만 css적용 */

input:focus{
outline: none;
/* 할일을 입력하는 인풋 박스의 선 스타일 지정 */
}
.inputBox{
    background:white;
    height: 50px;
    line-height: 50px;
    border-radius: 10px;
}
.inputBox input{
    border-style:none;
    font-size: 0.9rem;
}

.addContainer {
    float: right; 
    /*  float : 할 일 추가 버튼이 표시될 위치 정의*/
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius:0 5px 5px 0;
}
.addBtn{
    color: white;
    vertical-align: middle; 
    /* vertical-align: middle;  : 할 일 추가 아이콘의 수직 정의 */
}
.addBtn:hover {
  scale: 1.5;
  transition: 0.3s;
}
.closeModalBtn:hover{
    scale: 1.2;
  transition: 0.3s;
}
</style>