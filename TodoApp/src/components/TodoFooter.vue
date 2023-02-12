<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearTodo">전부 삭제</span>
    </div>
</template>

<script>
export default {
methods:{
    clearTodo() {
    this.$emit('removeAll')
        
    }
}
}
</script>

<style scoped>
.clearAllContainer{
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin:0 auto;
}
.clearAllBtn{
    color: #e20303;
    display: black;
}
.clearAllContainer:hover {
  scale: 1.2;
  transition: 0.3s;
}
</style>