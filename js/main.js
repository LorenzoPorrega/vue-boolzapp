/*Funzionalità
FATTO - evitare che l’utente possa inviare un messaggio vuoto o composto solamente da spazi
FATTO - A) cambiare icona in basso a destra (a fianco all’input per scrivere un nuovo messaggio) finché l’utente sta scrivendo: di default si visualizza l’icona del microfono, quando l’input non è vuoto si visualizza l’icona dell’aeroplano. Quando il messaggio è stato inviato e l’input si svuota, si torna a visualizzare il microfono. B) inviare quindi il messaggio anche cliccando sull’icona dell’aeroplano
FATTO - predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta “ok:” quando il pc risponde, anziché scrivere “ok”, scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc
FATTO - visualizzare nella lista dei contatti l’ultimo messaggio inviato/ricevuto da ciascun contatto
FATTO (da capire cosa significa "(v. node day.js)" - (inserire l’orario corretto nei messaggi (v. note day.js)
sotto al nome del contatto nella parte in alto a destra, cambiare l’indicazione dello stato: visualizzare il testo “sta scrivendo...” nel timeout in cui il pc risponde, poi mantenere la scritta “online” per un paio di secondi e infine visualizzare “ultimo accesso alle xx:yy” con l’orario corretto
dare la possibilità all’utente di cancellare tutti i messaggi di un contatto o di cancellare l’intera chat con tutti i suoi dati: cliccando sull’icona con i tre pallini in alto a destra, si apre un dropdown menu in cui sono presenti le voci “Elimina messaggi” ed “Elimina chat”; cliccando su di essi si cancellano rispettivamente tutti i messaggi di quel contatto (quindi rimane la conversazione vuota) oppure l’intera chat comprensiva di tutti i dati del contatto oltre che tutti i suoi messaggi (quindi sparisce il contatto anche dalla lista di sinistra)
dare la possibilità all’utente di aggiungere una nuova conversazione, inserendo in un popup il nome e il link all’icona del nuovo contatto
fare scroll in giù in automatico fino al messaggio più recente, quando viene aggiunto un nuovo messaggio alla conversazione (NB: potrebbe esserci bisogno di utilizzare nextTick: https://vuejs.org/v2/api/#Vue-nextTick)
aggiungere le emoticons, tramite l’utilizzo di una libreria, ad esempio: https://www.npmjs.com/package/vue-emoji-picker

Grafica
visualizzare un messaggio di benvenuto che invita l’utente a selezionare un contatto dalla lista per visualizzare i suoi messaggi, anziché attivare di default la prima conversazione
aggiungere una splash page visibile per 1s all’apertura dell’app
A) rendere l’app responsive e fruibile anche su mobile: di default si visualizza solo la lista dei contatti e cliccando su un contatto si vedono i messaggi di quel contatto. B) aggiungere quindi un’icona con una freccia verso sinistra per tornare indietro, dalla visualizzazione della chat alla visualizzazione di tutti i contatti
aggiungere un’icona per ingrandire o rimpicciolire il font: dovrebbe essere sufficiente aggiungere una classe al wrapper principale
aggiungere un’icona per cambiare la modalità light/dark: dovrebbe essere sufficiente aggiungere una classe al wrapper principale */

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
              date: "17/08/2023 16:15",
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
              status: "sent",
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
      //Boolean starting value for notification permission
      notificationAllowed: true,
      //var to dynamically store the contact search
      contactSearch: "",
      //var to dynamically store what's written in the new message bar
      text: "",
      //var to extract in case of need of the current day
      currentDay: (new Intl.DateTimeFormat("en-GB", {dateStyle: "short"}).format(new Date())),
    }
  },
  methods: {
    //method to assign the currently opened chat index (i) to currentContactChat
    saveSelectedChat(i){
      this.currentContactChat = i;
      document.querySelector(".text-box").focus();
      
      //for each new contact tab opened we run two function to update the lastAccessDate and lastAccessHOur
      this.lastAccessDate();
      this.getLastAccessHourOnLoad(this.currentContactChat);
      /* UNUSED-> this.contacts[this.currentContactChat]["lastAccessHour"] = this.contacts[this.currentContactChat].messages[(this.contacts[this.currentContactChat].messages).length - 1].date.split(" ")[1];*/
    },
    sentMessage(){
    /*method to take message input text via const newMessage, to push the message in corresponding chat 
    and to then clear the text input. we also update lastAccessDate and lastAccessHour given the contact's
    response corresponds to being online*/
      const newMessage = this.text.trim();
      this.text = "";
      const currentHour = (new Intl.DateTimeFormat("en-GB", {timeStyle: "short",}).format(new Date()));

      if(newMessage === "" || newMessage === " "){
        return;
      }
      else{
        setTimeout(() =>{
          this.contacts[this.currentContactChat].messages.push(
            {
              date: (new Intl.DateTimeFormat("en-GB", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())).replace(",", ""),
              message: newMessage,
              status: "sent",
            }
          );
          setTimeout(() => {
            axios
              .get("https://flynn.boolean.careers/exercises/api/random/sentence")
              .then((axiosResp) =>
                this.contacts[this.currentContactChat].messages.push(
                  {
                    date: (new Intl.DateTimeFormat("en-GB", {
                      dateStyle: "short",
                      timeStyle: "short",
                    }).format(new Date())).replace(",", ""),
                    message: axiosResp.data.response,
                    status: "received",
                  }
                ));
            this.lastAccessDate();
            this.contacts[this.currentContactChat]["lastAccessHour"] = currentHour;
          }, 500 + (Math.random() * 5000));
        }, 100);
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
      //Method to ask permission to notify the user if the user clicks on a <a> tag and to alert the user if notifications have been allowed or not after their permission
      Notification.requestPermission().then(permission => {
        if (permission == "granted"){
          alert("Le notifiche di Boolzap sono abilitate!");
        }
        else{
          alert("Le notifiche di Boolzap sono disabilitate.");
        }
      });
      this.notificationAllowed = false;
    },
    deleteSelectedMessage(contacts, i){
      //Method to splice, hence remove an array's elements without disrupting the original array, based on i (the message corresponding index in the v-for)
      contacts[this.currentContactChat].messages.splice(i.toString(), 1);
    },
    lastAccessDate(){
      /*Method to get the last access of selectedContact. In the if block the first condition is to check
      if the date of the last messagge coincides with today -> the lastAccess is today ("oggi" in it), the
      second condition is to check if the current year corresponds to the year of the last message -> 
      lastAcces will be "<day>/<month>" date of the last message itself, and the last condition, which is the
      result of the last message's date not being today neither the present year, returns the full last 
      message's date -> "<day>/<month>/<year> <hour><minutes>"" */ 
      const date = (this.contacts[this.currentContactChat].messages[(this.contacts[this.currentContactChat].messages).length - 1].date).split(" ")[0];
      const dayMonth = ((this.contacts[this.currentContactChat].messages[(this.contacts[this.currentContactChat].messages).length - 1].date).split(" ")[0]).split("/").slice(0, -1).join("/");

      console.log("Funzione startata");
      if(date === this.currentDay){
        this.contacts[this.currentContactChat]["lastAccessDate"] = "oggi";
      }
      else if(((this.contacts[this.currentContactChat].messages[(this.contacts[this.currentContactChat].messages).length - 1].date).split(" ")[0]).split("/")[2] === (new Date().getFullYear().toString())){
        this.contacts[this.currentContactChat]["lastAccessDate"] = dayMonth;
      }
      else{
        this.contacts[this.currentContactChat]["lastAccessDate"] = date;
      }
    },
    resizeTextarea() {
      //Method to resize the textArea
      this.$refs.textarea.style.height = "auto";
      this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`;
    },
    getClass(){
      //Method to change the send message icon from a microphone before texting to a paperplane once the textarea has some text in it
      if(this.text === ""){
        return "icon fa-solid fa-microphone"
      }
      else{
        return "icon fa-regular fa-paper-plane"
      }
    },
    getLastAccessHourOnLoad(contactToAssign){
      //Method to grab the last accessHour on load of the page
      for(i = 0; i < this.contacts[contactToAssign].messages.length; i++){
        if(this.contacts[contactToAssign].messages[i].status === "received"){
          this.contacts[contactToAssign]["lastAccessHour"] = this.contacts[contactToAssign].messages[i].date.split(" ")[1];
        }
      }     
    },
  },
  beforeMount(){
    //Method to push in first place for each contact a blank message to not break the chat-container behaviour and freeze the page when all messages are deleted
    for(let i = 0; i < this.contacts.length; i++){
      this.contacts[i].messages.unshift({
        date: "",
        message: "",
        status: "",
      })
    }
    this.lastAccessDate();
    this.getLastAccessHourOnLoad(0);
    /* UNUSED -> this.contacts[this.currentContactChat]["lastAccessHour"] = this.contacts[this.currentContactChat].messages[(this.contacts[this.currentContactChat].messages).length - 1].date.split(" ")[1];*/
  },
  mounted(){
    //we run this method on mounted to be sure the textArea has the corrent sizing from start
    this.resizeTextarea();
  },
}).mount("#app");
