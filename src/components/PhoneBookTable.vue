<template>
  <div class="table-container">
    <b-table 
     fixed
     selectable
     small
     outlined
     responsive
     bordered
     :items="formatTableData()"
     :fields="fields"
     v-if="!isLoading"
     :select-mode="selectMode"
     @row-selected="onRowSelected"
     table-variant="secondary">
     </b-table>
    <b-spinner label="Spinning" v-if="isLoading"></b-spinner>
    <PhoneBookModal :modalData="formatModalData()" v-if="showModal" v-on:onCloseModal="closeModal()"></PhoneBookModal>
  </div>
</template>

<script>
  import PhoneBookModal from "./PhoneBookModal.vue"
  
  import PhoneBookFormatService from "../services/phoneBookFormatService.js";
  import HttpService from "../services/httpService.js";

  export default {
    name: "PhoneBookTable",
    components: {
      PhoneBookModal
    },
    data() {
      return {
        isLoading: false,
        selectMode: 'single',
        selected: null,
        phoneBookData: [],
        fields: ['name', 'phone', 'address'],
        showModal: false
      }
    },
    async created(){
      try {
        this.isLoading = true;
        this.phoneBookData = await HttpService.getPhoneBookData();
      } catch (err) {
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    },
    methods: {
      onRowSelected(items){
        const [{id}] = items;
        this.selected = this.getPhoneBookDataById(id);
        // the real property that dictates if the model is shown 
        this.showModal = true;
      },
      formatTableData(){
        return PhoneBookFormatService.generateTableData(this.phoneBookData);
      },
      formatModalData(){
        return PhoneBookFormatService.generateModalData(this.selected);
      },
      getPhoneBookDataById(id){
        return this.phoneBookData.find(data => data.id === id);
      },
      closeModal(){
        this.selected = [];
        this.showModal = false;
      }
    },
  }
</script>


<style lang="stylus">
.table-container {
  margin-top: 30px;
}
</style>