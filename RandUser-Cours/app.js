const app = Vue.createApp({
  data() {
    return {
      titre: "Random de Soul",
      firstName: "Jul",
      lastName: "Dra",
      email: "jul@dra@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg"
    };
  },
  methods: {
    async onClick() {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();
      //   console.log(results);
      (this.firstName = results[0].name.first),
        (this.lastName = results[0].name.last),
        (this.email = results[0].email),
        (this.gender = results[0].gender),
        (this.picture = results[0].picture.large);
    }
  }
});
app.mount("#app");
