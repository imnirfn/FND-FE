<template>
    <div>
        <section class="hero is-primary">
            <div class="hero-body is-medium">
                <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                    <form action="" class="box">
                        <div class="field">
                        <label for="" class="label">Email</label>
                        <div class="control has-icons-left">
                            <input v-model="form.email" type="email" class="input" required>
                            <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                            </span>
                        </div>
                        </div>
                        <div class="field">
                        <label for="" class="label">Password</label>
                        <div class="control has-icons-left">
                            <input v-model="form.password" type="password" placeholder="*******" class="input" required>
                            <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                            </span>
                        </div>
                        <div>
                            <span v-if="form.wrong" style="color:red;">
                                Wrong Credentials, Please Try Again!</span>
                        </div>
                        </div>
                        <div class="field">
                        <label for="" class="checkbox">
                            <input type="checkbox">
                        Remember me
                        </label>
                        </div>
                        <div class="field">
                        <button @click="login" class="button is-success">
                            Login
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
        wrong: false,
      },
    };
  },

  methods: {
    login() {
      this.$v.form.$touch();
      this.$store.dispatch('Login', this.form)
        .then((res) => {
          console.log('res', res);
          this.$router.push({ path: '/' });
        })
        .catch((err) => {
          console.log('error');
          if (err.response && err.response.status === '401') {
            // Invalid mobile or password
            console.log(err.response.message);
          }
        });
      // eslint-disable-next-line no-alert
      alert('Success');
    },
  },
};
</script>
