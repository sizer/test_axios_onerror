<template>
  <div class="container">
    This is /{{this.$route.params.caseName}}
  </div>
</template>

<script>

export default {
  fetch: async function() {
    const caseName = this.$route.params.caseName;
    console.log(":caseName is ", caseName)


    if(caseName === "case1") {
      // 正常終了
      await this.$axios.$get("http://localhost:4567/ng")

    } else if(caseName === "case2") {
      // 正常終了
      await this.$axios.$get("http://localhost:4567/ng")
      await this.$axios.$get("http://localhost:4567/ng")

    } else if(caseName === "case3") {
      // エラー(RangeError Maximum call stack size exceeded)が発生
      await Promise.all([
        this.$axios.$get("http://localhost:4567/ng"),
        this.$axios.$get("http://localhost:4567/ng"),
      ]);

    } else if(caseName === "case4") {
      // 正常終了
      await Promise.all([
        this.$axios.$get("http://localhost:4567/ng"),
        this.$axios.$get("http://localhost:4567/ng"),
      ]).catch(() => { /* エラーを握りつぶしてresolveさせます。 */ });

    }

    console.log("fetch finished")
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
