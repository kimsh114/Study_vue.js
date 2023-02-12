<template>
  <section>
    <!-- <TransitionGroup> => 애니메이션을 추가할 때 사용되는 태그 이다. 안의 tag는 필요한 테그 집어넣음 -->
        <!--  :key="todoItem 애니메이션 값을 적용하려면 이 :key값이 필요, v-for을 사용할 때 지정해주는 것이 좋음. -->
        <TransitionGroup name="list" tag="ul">
                    <!-- propsdata 내용물을 todoItem이라는 변수로 저장하고 그것을 반복한다. -->
        <!-- v-for = '(todoItem,index) in todoItems' :key="todoItem" => 선택한 할 일 아이템을 인식하기 위한 template코드 -->
        <li v-for = '(todoItem,index) in propsdata' :key="todoItem" class='shadow'>
            <!-- index는 v-for 디렉티브에서 기본적으로 제공하는 변수이다.// v-for 디렉티브로 반복한 요소는 인덱스를 내부적으로 부여 -->
            <!-- 어썸 아이콘에서 체크리스트 아이콘과 쓰레기통 아이콘 추가 -->
        <i class="checkBtn fas fa-check" aria-hidden="ture"></i>
        {{todoItem }}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem,index)">
            <!-- @click => v-on:click와 같은 기능  -->
            <!-- i테그 위에 span테그를 씌움으로써 이벤트를 더 잘 잡을 수 있도록 함. -->
            <i class="far fa-trash-alt" aria-hidden="ture"></i>
        </span>
        </li>
        </TransitionGroup>
  </section>
</template>
<script>
export default {

    props:['propsdata'], // 부모 컴포넌트인 app에서 props를 받기위한 props이름 정의 


// 할 일 삭제를 위한 코드
methods: {
    removeTodo(todoItem, index){
        this.$emit('removeTodo', todoItem, index)
    }
}
}
</script>

<style scoped>
.list-enter-active, .list-leave-active{
    transition: all 1s;
}
.list-enter, list-leave-to{
    opacity: 0;
    transform: translateY(30px);
}
/* list 클래스의 enter-active와 leave-active, leave-to => 데이터가 들어오고 나가는 동작을 정의 */
ul{

    list-style-type: none; /* 목록 아이템의 스타일을 지정함. */
    padding-left: 0px;
    margin-top: 0;
    text-align:left;

}
li {
    display: flex; /* 비율 기준의 레이아웃 방식인 flex로 지정 */
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding:0 0.9rem;
    background: rgb(247, 248, 241);
    border-radius: 5px;
}
.checkBtn{
    line-height: 45px;
    color: blue;
    margin-right: 5px;
}
.removeBtn{
    margin-left: auto;
    color: brown;
}
.removeBtn:hover {
  scale: 1.5;
  transition: 0.3s;
}


</style>