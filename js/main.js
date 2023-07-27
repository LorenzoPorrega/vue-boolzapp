const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "_1",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "received",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Luisa",
          avatar: "_4",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Salvatore",
          avatar: "_5",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Eccoci qua 🤡",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "EEEEEEEEEEEEEEEEEEEEEASY",
              status: "received",
            },
          ],
        },
        {
          name: "Giulia",
          avatar: "_6",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ngopp a mammt",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Eccoci qua",
              status: "received",
            },
          ],
        },
        {
          name: "Pietro",
          avatar: "_7",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che hanno pubblicato una nuova versione della distro di Arch?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Véro dici? Comunque io uso solo Ubuntu..",
              status: "received",
            },
          ],
        },
        {
          name: "Valerio",
          avatar: "_8",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Margot Robbie o Megan Fox?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Megan Fox, indiscutibilmente.",
              status: "received",
            },
          ],
        },
        {
          name: "Simone",
          avatar: "_2",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Bella Simon",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "BEEEELLLLAAAAAAAAAA",
              status: "received",
            },
          ],
        },
      ],
      currentContactChat: 0,
    }
  },
  methods: {
    saveSelectedChat(i){
      this.currentContactChat = i;
      console.log(i);
    },
    /*lastMessagePreview(){
      return this.singleContact.message[this.singleContact.message.length - 1].message;
    }*/
  }
}).mount("#app");
