<template>
  <div class="site-home container max-w-6xl text-left p-2 pt-16">
    <section class="intro mb-8 ">
      <!-- Heading Section -->
      <div class="font-semibold leading-none">
        <h1 class="text-3xl sm:text-5xl mb-5">Hey. I'm <span class="code-block">Indra</span></h1>
        <h2 class="text-4xl sm:text-6xl font-normal leading-tight">
          I like <span class="code-block">maths</span> and making <span class="code-block">computery</span> things.
        </h2>
      </div>
      <br>
      <!-- Extracting component classes: -->
      <button class="btn btn-green mt-4" @click="$router.push('/posts/')">
        View Posts →
      </button>
    </section>

    <!-- About me -->
    <div class="overflow-auto my-16">
      <img src="https://media.discordapp.net/attachments/863300968539619338/901326337283883058/download20211006152841.png" class="float-right w-1/3 rounded-3xl m-2 border-2 border-blue-500">
      <h1 class="font-semibold text-4xl">About me</h1>
      <p class="text-lg">
        I'm a highschooler who loves programming and making things for people. Currently I'm learning web development with VueJS.

        I also love Mathematics and have made a <a href="">library of Wolfram Language/Mathematica functions</a> to use in VCE Maths exams. (Totally not cheating)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
.btn
  @apply font-bold py-4 px-6 rounded

.btn-green
  @apply bg-blue-600 text-white

.btn-green:hover
  @apply bg-blue-500

</style>

<style scoped>
.code-block {
  @apply font-mono text-blue-500 bg-gray-900 px-2 rounded-xl;
}

a {
  @apply text-blue-500;
}

a:hover {
  @apply underline
}
</style>
