<template>
 <div>
  <h1>{{title}}</h1>
  <p>{{path}}</p>
  <p>{{text}}</p>
 </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {
        path: '',
        title: '',
        text: '',
      },
    },
  },
  data () {
    return {
      msg: 'Hello this is <Foo-Bar>'
    }
  },
  methods: {
    closeModal() {
    },
  },
}
</script>