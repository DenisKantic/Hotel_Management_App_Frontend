<template>
  <!-- loading spinner-->
  <v-app>
    <v-snackbar v-model="snackbar.visible" :timeout="snackbar.timeout" :color="snackbar.color">
      <div class="d-flex justify-space-between align-center">
        <span style="font-size: 1.2rem">{{ snackbar.message }}</span>
        <v-btn icon @click="snackbar.visible = false" class="ml-2">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </v-snackbar>
    <v-container
      v-if="is_loading"
      class="d-flex align-center justify-center flex-column"
      style="height: 100vh; background: none"
    >
      <v-progress-circular indeterminate color="primary" size="120" width="12">
      </v-progress-circular>
      <br />
      <span class="text-h5 text-center">Učitavanje...</span>
    </v-container>
    <div v-else style="min-height: 100%" class="d-flex items-center justify-center">
      <v-container
        class="d-flex align-center justify-center flex-column pb-0 sm-pb-0"
        style="min-height: 100%; background-color: lightcyan"
      >
        <router-link to="/" class="mt-16">
          <v-avatar class="mb-10 mb-sm-10" color="surface-light" size="100">
            <img src="@/assets/logo.svg" style="width: 100%" alt="Logo" />
          </v-avatar>
        </router-link>
        <span class="text-center text-h4">{{ $t('login') }}</span> <br />

        <v-form ref="form" v-model="valid" lazy-validation style="width: 50%">
          <label>Email</label>
          <v-text-field
            outlined
            class="input_field mb-2 mt-2"
            v-model="email"
            :rules="computedEmailRules"
            required
            variant="outlined"
            @blur="validateEmail"
          ></v-text-field>

          <label>{{ $t('password') }}</label>
          <v-text-field
            v-model="password"
            :rules="computedPasswordRules"
            required
            :type="show_password ? 'text' : 'password'"
            variant="outlined"
            class="mb-1 mt-2"
            @blur="validatePassword"
            ><v-icon id="eye-icon" @click="toggle_password">{{
              show_password ? 'mdi-eye' : 'mdi-eye-off'
            }}</v-icon></v-text-field
          >

          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                v-bind="activatorProps"
                color="surface-variant"
                :text="$t('pass_forgot')"
                variant="text"
                class="px-0 text-none"
              ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card
                :loading="is_card_loading"
                :disabled="is_card_disabled"
                style="min-height: 20vh"
                title="Resetuj šifru"
              >
                <v-card-text class="text-justify text-subtitle-2"
                  >Da bi se generisala nova šifra, molimo vas da upišete ispod vašu email adresu, s
                  kojom ste kreirali vaš korisnički nalog. Nova šifra će biti poslana na vašu email
                  adresu.</v-card-text
                >
                <v-text-field
                  outlined
                  label="Email"
                  placeholder="Upišite vaš email"
                  class="px-4"
                  v-model="reset_email"
                  :rules="computed_reset_email_rules"
                  required
                  variant="outlined"
                  @blur="validate_reset_email"
                ></v-text-field>
                <p v-show="reset_email_error" class="pb-2 text-red font-weight-bold text-center">
                  Korisnički nalog ne postoji.
                </p>
                <p
                  v-show="reset_email_okay"
                  class="pb-4 px-4 text-green font-weight-regular text-center"
                >
                  Nova šifra je kreirana. Provjerite svoju email adresu
                </p>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="primary" variant="elevated" @click="submit_password_reset">
                    Reset
                  </v-btn>
                  <v-btn
                    text="Zatvori"
                    variant="outlined"
                    color="error"
                    class="mr-2"
                    @click="isActive.value = false"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>

          <v-btn
            @click="submit"
            class="mb-4"
            style="
              width: 100%;
              height: 3rem;
              margin-top: 1rem;
              background-color: #2f5382;
              color: #ffffff;
            "
            outlined
            >{{ $t('login') }}</v-btn
          >
        </v-form>
      </v-container>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const snackbar = ref({
  visible: false,
  message: '',
  timeout: 3000,
  color: 'success',
})

const is_loading = ref(true)
const valid = ref(false)
const form = ref()
const email = ref('')
const password = ref('')
const show_password = ref(false)
const emailTouched = ref(false)
const passwordTouched = ref(false)
const email_reset_touched = ref(false)
const reset_email = ref('')
const is_card_disabled = ref(false)
const is_card_loading = ref(false)
const reset_email_error = ref(false)
const reset_email_okay = ref(false)

const rules = {
  required: (value: string) => !!value || '*Obavezno polje.',
  email: (value: string) => /.+@.+\..+/.test(value) || 'E-mail mora biti validan.',
  password: (value: string) => value.length >= 8 || 'Šifra mora imati minimalno 8 karaktera.',
  reset_email: (value: string) => /.+@.+\..+/.test(value) || 'E-mail mora biti validan.',
}

const computedEmailRules = computed(() => (emailTouched.value ? [rules.required, rules.email] : []))
const computedPasswordRules = computed(() =>
  passwordTouched.value ? [rules.required, rules.password] : [],
)
const computed_reset_email_rules = computed(() =>
  email_reset_touched.value ? [rules.required, rules.reset_email] : [],
)

function validateEmail() {
  emailTouched.value = true
}

function validatePassword() {
  passwordTouched.value = true
}

function validate_reset_email() {
  email_reset_touched.value = true
}

function toggle_password() {
  show_password.value = !show_password.value
}

function showSnackbar(message: string, color: string) {
  snackbar.value.message = message
  snackbar.value.color = color
  snackbar.value.visible = true
}

async function submit_password_reset() {}

async function submit() {
  if (!email.value || !password.value) {
    showSnackbar('Niste popunili sva polja!', 'error')
    return
  }
}

onMounted(() => {
  setTimeout(() => {
    is_loading.value = false
  }, 700)
})
</script>

<style scoped>
.text-h4 {
  width: 60%;
}

html {
  height: 100%;
  margin: 0;
  overflow: hidden;
}

#eye-icon {
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
}
@media (max-width: 1024px) {
  .v-form {
    width: 90% !important;
  }

  .text-h4 {
    width: 90% !important;
  }
}
</style>
