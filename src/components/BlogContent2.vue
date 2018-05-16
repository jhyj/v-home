<template>
    <div>
        content
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        name:"BlogContent2",
        created() {
    console.log('BlogContent created')
    const uri =
      'https://raw.githubusercontent.com/jhyj/v-home/master/data/posts/1.md'
    axios.get(uri).then(res => {
      console.log('my Post', res.data)
    })
  }
    }
</script>
