const { createApp } = Vue;

createApp({
  data() {
    return {
      titleToDo: "My To Do List",

      myList: [
        { text: "Fare la spesa", done: false },
        { text: "Accendere il PC", done: false },
        { text: "Seguire la lezione", done: true },
        { text: "Imprecare", done: false },
      ],
    };
  },
  //metodo per far funzionare il delete/cestino
  methods: {
    deleteToDo(index) {
      this.myList.splice(index, 1);
    },
  },
}).mount("#app");
