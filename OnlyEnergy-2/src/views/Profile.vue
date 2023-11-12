<template>
  <div class="p-16 ml-80 max-w-5xl">
    <div class="p-8 bg-white shadow mt-24">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="relative">
          <div
            class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-24"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div
          class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center"
        >
          <router-link
            to="/register"
            class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            Log out
          </router-link>
        </div>
      </div>
      <div class="mt-20 text-center border-b pb-12">
        <h1 class="text-4xl font-medium text-gray-700">
          Johongir <span class="font-light text-gray-500">0 y.o.</span>
        </h1>
        <p class="font-light text-gray-600 mt-3">Uzbekistan, Tashkent</p>
        <p class="mt-8 text-gray-500">Figma Designer (UI/UX)</p>
        <p class="mt-2 text-gray-500">INHA University</p>
      </div>
      <div class="mt-12 flex flex-col justify-center">
        <p class="text-gray-600 text-center font-light lg:px-16">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          magni commodi dolore accusantium est laudantium adipisci tenetur,
          voluptatem laborum fugit? Officiis, maxime tempore ipsam consectetur
          quibusdam vero accusamus vitae ducimus, labore corrupti saepe
          accusantium dolores.
        </p>
        <button class="text-indigo-500 py-2 px-4 font-medium mt-4">
          Show more
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>