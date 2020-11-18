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
        active: '',






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
                    status: 'sent'

                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'

                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
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
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
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
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
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
                    date:'10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
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
                    status: 'sent'
                    },
                    {
                    date: t,
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Tutto fatto!',
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
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
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
                    date: '28/03/2020 16:15:22',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ah scusa!',
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
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Si, ma preferirei andare al cinema',
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

            let t =  moment().format("DD/MM/YYYY HH:mm:ss").toString();



            // let view_hh_mm = t.slice(0, 8);
          this.contacts[i].messages.push({
              date: t,
              message: element,
              status: 'sent',


          });
          Vue.nextTick(function() {
              let chat_scroll = document.getElementsByClassName('chat-messages')[0];

              chat_scroll.scrollTop = chat_scroll.scrollHeight;

          });
          this.new_message = ''
        },

        print_date(i, j) {
            let my_date = this.contacts[i].messages[j].date;
            let hh_mm = moment(my_date, 'DD/MM/YYYY HH:mm').format("HH:mm");
            return hh_mm

        },

        print_last_date(i) {
            let my_date = this.contacts[i].messages[this.contacts[i].messages.length - 1].date;
            let hh_mm = moment(my_date, 'DD/MM/YYYY HH:mm').format("HH:mm");

            return hh_mm

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
                    let t =  moment().format("DD/MM/YYYY HH:mm:ss").toString();

                    this.contacts[i].messages.push
                    ({
                        date: t,
                        message: 'Si hai ragione!',
                        status: 'received',
                    });
                    Vue.nextTick(function() {
                        let chat_scroll = document.getElementsByClassName('chat-messages')[0];

                        chat_scroll.scrollTop = chat_scroll.scrollHeight;

                    });

          }, 1000)

        },

        push_on_click: function(i, j) {


            let my_class = this.contacts[i].messages[j];
            return my_class["active"] = '';

        },


        // add_class(item) {
        //
        //     if (item.active == false) {
        //         item.active = true
        //     } else item.active = false
        //
        // },





        remove_item: function(contactsIndex, messagesIndex) {

            let myItem = this.contacts[contactsIndex].messages;

            myItem[messagesIndex].isActive = true;

            // uso un setTimeout per dare il tempo di portare isActive=false in questo
            // modo l'indice successivo che diventerà l'indice corrente non avrà isActive=true quindi il dropdown aperto
            setTimeout(() => {
                myItem.splice(messagesIndex, 1);

            }, 0001)


        },



        //
        //
        //
        // },


    },

    computed: {
        filteredChat: function(){
            return this.contacts.filter((item) => {
                return item.name.toLowerCase().match(this.search.toLowerCase())
            })
        },

    },
    //
    // created: function() {
    //     let d = this.contacts[0].messages[1].date;
    //     let t = d.slice(10, 16);
    //     console.log(t);


    // 10/01/2020 15:30:55


})
