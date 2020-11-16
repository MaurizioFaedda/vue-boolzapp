let m = moment();
console.log(` toString() => ${m.toString()}`);
console.log(` toISOString() => ${m.toISOString()}`);


var app = new Vue ({

    el: '#root',

    data:{
        contactsIndex: 0,
        messagesIndex: '',
        index: '',
        new_message: '',
        search: '',
        item: '',

        user: {
            name: 'Maurizio',
            avatar: 'user'
        },
        contacts:
        [
            {
                name: 'Mauro',
                avatar: '_0',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    isActive: false,
                    status: 'sent'

                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    isActive: false,
                    status: 'sent'

                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    isActive: false,
                    status: 'received'


                    }
                ],
            },
            {
                name: 'Sara',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    isActive: false,
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    isActive: false,
                    status: 'sent'
                    }
                ],
            },
            {
                name: 'John',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    isActive: false,
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    isActive: false,
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Emy',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    isActive: false,
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Bob',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    isActive: false,
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Joe',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    isActive: false,
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    isActive: false,
                    status: 'sent'
                    }
                ],
            },
            {
                name: 'Janis',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    isActive: false,
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    isActive: false,
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Jim',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    isActive: false,
                    status: 'received'
                    }
                ],
            }
        ],

    },

    methods: {

        change(index){
            this.contactsIndex = index;
        },
        sent_new_message(element, i) {
          this.contacts[i].messages.push({
              date: '',
              message: element,
              status: 'sent',
              isActive: false

          })
          this.new_message = ''
        },

        // received_new_message(i) {
        //
        //         this.contacts[i].messages.push({
        //         date: '',
        //         message: 'Si hai ragione',
        //         status: 'received',
        //         isActive: false
        //
        //     })
        // },
        received_new_message(i) {


                setTimeout(() => {
                    this.contacts[i].messages.push({
                    date: '',
                    message: 'Si hai ragione!',
                    status: 'received',
                    isActive: false
              })
          }, 1000)

        },

        add_class(item) {

            if (item.isActive == false) {
                item.isActive = true
            } else item.isActive = false

        },

        remove_item: function(contactsIndex, messagesIndex) {

            let myItem = this.contacts[contactsIndex].messages;

            myItem[messagesIndex].isActive = false;

            // uso un setTimeout per dare il tempo di portare isActive=false in questo
            // modo l'indice successivo che diventerà l'indice corrente non avrà isActive=true quindi il dropdown aperto
            setTimeout(() => {
                myItem.splice(messagesIndex, 1);

            }, 0001)


        },


        // push_on_click(i){
        //     this.contacts[i].messages.push({
        //         isActive: false
        //     })
        // }
        // removeClass: function() {
        //     if (remove_item() == true) {
        //         myItem.isActive = false
        //     }
        // }

    },

    computed: {
        filteredChat: function(){
            return this.contacts.filter((item) => {
                return item.name.toLowerCase().match(this.search.toLowerCase())
            })
        }
    }

})
