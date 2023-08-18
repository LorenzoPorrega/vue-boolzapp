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
              date: "10/01/2020 15:30",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15",
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
              date: "20/03/2020 16:30",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35",
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
              date: "28/03/2020 10:10",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Andrea",
          avatar: "_4",
          messages: [
            {
              date: "10/01/2020 15:30",
              message: "1vs1 CS:Go? 🤡",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50",
              message: "Zì, badrone...",
              status: "received",
            },
          ],
        },
        {
          name: "Salvatore",
          avatar: "_5",
          messages: [
            {
              date: "10/01/2020 15:30",
              message: "Eccoci qua 🤡",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50",
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
              date: "10/01/2020 15:30",
              message: "Ngopp a mammt",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50",
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
              date: "10/01/2020 15:30",
              message: "Lo sai che hanno pubblicato una nuova versione della distro di Arch?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50",
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
              date: "10/01/2020 15:30",
              message: "Margot Robbie o Megan Fox?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50",
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
              date: "10/01/2020 15:30",
              message: "Bella Simon",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50",
              message: "BEEEELLLLAAAAAAAAAA",
              status: "received",
            },
          ],
        },
        {
          name: "Riccardo",
          avatar: "_6",
          messages: [
            {
              date: "10/01/2020 15:30",
              message: "Bella uaiò",
              status: "received",
            },
            {
              date: "10/01/2020 15:50",
              message: "Eccochi qua",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50",
              message: "Haram o sessione su Genshin Impact?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50",
              message: "Mah, io mi sparerei una Warzonata EAZY con gli altri tbh",
              status: "sent",
            },
          ],
        },
      ],
      //Index of current opened chat
      currentContactChat: 0,
      notificationAllowed: true,
      contactSearch: "",
      text: "",
    }
  },
  methods: {
    //method to assign the currently opened chat index (i) to currentContactChat
    saveSelectedChat(i){
      this.currentContactChat = i;
      console.log(i);
    },
    //method to take message input text via const newMessage, to push the message in corresponding chat and to then clear the text input
    sentMessage(){
      const newMessage = this.text.trim();
      this.text = "";

      if(newMessage === "" || newMessage === " "){
        return
      }
      else{
        setTimeout(() =>{
          this.contacts[this.currentContactChat].messages.push(
            {
              date: (new Intl.DateTimeFormat("it", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())).replace(",", ""),
              message: newMessage,
              status: "sent",
            }
          );
          setTimeout(() => {
            this.contacts[this.currentContactChat].messages.push(
              {
                date: (new Intl.DateTimeFormat("it", {
                  dateStyle: "short",
                  timeStyle: "short",
                }).format(new Date())).replace(",", ""),
                message: "Ok",
                status: "received",
              }
            );
          },
          500 + (Math.random() * 5000));
        },
        100);
      }
    
    },
    sender(i, contacts){
      //Method to print who sent the message ("Tu" = You) based on the last message's class ("sent" or "received")
      if(contacts[i].messages[contacts[i].messages.length - 1].status === "sent"){
        return "Tu";
      }
      else{
        return contacts[i].name;
      }
    },
    allowNotification(){
      Notification.requestPermission().then(permission => {
        if (permission == "granted"){
          alert("Le notifiche di Boolzap sono abilitate!")
        }
        else{
          alert("Le notifiche di Boolzap sono disabilitate.")
        }
      });

      this.notificationAllowed = false;
    },
  }
}).mount("#app");
