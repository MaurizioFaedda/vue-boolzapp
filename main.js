let t =  moment().format('HH:mm:ss, MM DD YYYY');
let view_hh_mm = t.slice(0, 5);



var app = new Vue ({

    el: '#root',

    data:{
        contactsIndex: 0,
        messagesIndex: '',
        index: '',
        new_message: '',
        search: '',
        item: '',
        t: '',
        iIcon: '0',
        icon: ['fa-microphone', 'fa-paper-plane'],
        // hh_mm: view_hh_mm,






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
                    date: t,
                    dateView: view_hh_mm,
                    message: 'Hai portato a spasso il cane?',
                    isActive: false,
                    status: 'sent'

                    },
                    {
                    date: t,
                    dateView: view_hh_mm,

                    message: 'Ricordati di dargli da mangiare',
                    isActive: false,
                    status: 'sent'

                    },
                    {
                    date: t,
                    dateView: view_hh_mm,

                    message: 'Tutto fatto!',
                    isActive: false,
                    status: 'received'


                    }
                ]
            },
            {
                name: 'Sara',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                    date: t,
                    dateView: view_hh_mm,
                    message: 'Ciao come stai?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: t,
                    dateView: view_hh_mm,
                    message: 'Bene grazie! Stasera ci vediamo?',
                    isActive: false,
                    status: 'received'
                    },
                    {
                    date: t,
                    dateView: view_hh_mm,
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
                    date: t,
                    dateView: view_hh_mm,
                    message: 'La Marianna va in campagna',
                    isActive: false,
                    status: 'received'
                    },
                    {
                    date: t,
                    dateView: view_hh_mm,
                    message: 'Sicuro di non aver sbagliato chat?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: t,
                    dateView: view_hh_mm,
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
                    date: t,
                    dateView: view_hh_mm,
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: t,
                    dateView: view_hh_mm,
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
                    date: t,
                    dateView: view_hh_mm,
                    message: 'Hai portato a spasso il cane?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: t,
                    dateView: view_hh_mm,
                    message: 'Ricordati di dargli da mangiare',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: t,
                    dateView: view_hh_mm,
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
                    date: t,
                    dateView: view_hh_mm,
                    message: 'Ciao come stai?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: t,
                    dateView: view_hh_mm,
                    message: 'Bene grazie! Stasera ci vediamo?',
                    isActive: false,
                    status: 'received'
                    },
                    {
                    date: t,
                    dateView: view_hh_mm,
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
                    date: t,
                    dateView: view_hh_mm,
                    message: 'La Marianna va in campagna',
                    isActive: false,
                    status: 'received'
                    },
                    {
                    date: t,
                    dateView: view_hh_mm,
                    message: 'Sicuro di non aver sbagliato chat?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: t,
                    dateView: view_hh_mm,
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
                    date: t,
                    dateView: view_hh_mm,
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    isActive: false,
                    status: 'sent'
                    },
                    {
                    date: t,
                    dateView: view_hh_mm,
                    message: 'Si, ma preferirei andare al cinema',
                    isActive: false,
                    status: 'received'
                    }
                ],
            }
        ]

    },

    methods: {

        sentIcon(iIcon) {
            if (this.iIcon == 0) {
                this.iIcon = 1
            }

        },

        micIcon(iIcon) {
            if (this.iIcon == 1) {
                this.iIcon = 0
            }
        },


        change(index){
            this.contactsIndex = index;
        },

        sent_new_message(element, i) {
            let t =  moment().format('HH:mm:ss, MM DD YYYY');
            let view_hh_mm = t.slice(0, 8);

            // let view_hh_mm = t.slice(0, 8);
          this.contacts[i].messages.push({
              date: t,
              dateView: view_hh_mm,
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
                    let t =  moment().format('HH:mm:ss, MM DD YYYY');
                    let view_hh_mm = t.slice(0, 8);

                    this.contacts[i].messages.push({
                    date: t,
                    dateView: view_hh_mm,
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

        // myTime(contactsIndex) {
        //
        //     let hour = this.contacts[contactsIndex].messages[this.contacts[contactsIndex].messages.length - 1].date.hours;
        //     let minutes = this.contacts[contactsIndex].messages[this.contacts[contactsIndex].messages.length - 1].date.minutes;
        //
        //     return
        //
        // }

    }


})
