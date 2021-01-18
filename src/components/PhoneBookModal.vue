<template>
  <div>
    <b-modal id="bv-modal-example" hide-footer v-model="modalShow">
      <template #modal-title>
        User Details
      </template>
      <div class="d-block text-center">
        <h3 class="login-details">{{modalData.username}} - {{modalData.email}}</h3>
        <h3>{{modalData.website}}</h3>
        <h3>{{modalData.company.name}}</h3>
      </div>
      <b-button class="mt-3" block @click="emitCloseModal()">Close Me</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "PhoneBookModal",
  props: {
    modalData: Object,
  },
  data() {
    return {
      // modalShow- property is a hack to always keep the modal open,
      // while the real open and closing mechanisem will happen in the parent
      modalShow: true,
    }
  },
  methods: {
    emitCloseModal(){
      this.$bvModal.hide('bv-modal-example');
      this.$emit('onCloseModal');
    }  
  },
};
</script>