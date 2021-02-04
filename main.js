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
        search:'',
        // ......





        user: {
            name: 'Maurizio',
            avatar: 'user'
        },
        contacts:
        [
            {
                name: 'Luca',
                avatar: '_0',
                visible: true,
                messages: [

                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ei!',
                    status: 'sent',
                    isActive: false

                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'Ciao Mauri!',
                    status: 'received',
                    isActive: false

                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Come và a lavoro?',
                    status: 'received',
                    isActive: false
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Non benissimo. Non riesco a programmarmi le ferie😁',
                    status: 'sent',
                    isActive: false
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: '😞',
                    status: 'received',
                    isActive: false
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
                    status: 'sent',
                    isActive: false
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    isActive: false
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    isActive: false
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
                    status: 'received',
                    isActive: false
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    isActive: false
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received',
                    isActive: false
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
                    status: 'sent',
                    isActive: false
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    isActive: false
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
                    status: 'sent',
                    isActive: false
                    },
                    {
                    date: t,
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    isActive: false
                    },
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Tutto fatto!',
                    status: 'received',
                    isActive: false
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
                    status: 'sent',
                    isActive: false
                    },
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    isActive: false
                    },
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    isActive: false
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
                    status: 'received',
                    isActive: false
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    isActive: false
                    },
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ah scusa!',
                    status: 'received',
                    isActive: false
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
                    status: 'sent',
                    isActive: false
                    },
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    isActive: false
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
              isActive: false

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


        received_new_message(i) {


                setTimeout(() => {
                    let t =  moment().format("DD/MM/YYYY HH:mm:ss").toString();

                    this.contacts[i].messages.push
                    ({
                        date: t,
                        message: 'Si hai ragione!',
                        status: 'received',
                        isActive: false
                    });
                    Vue.nextTick(function() {
                        let chat_scroll = document.getElementsByClassName('chat-messages')[0];

                        chat_scroll.scrollTop = chat_scroll.scrollHeight;

                    });

          }, 1000)

        },

        push_on_click(i, j) {


            Vue.set(this.contacts[i].messages[j], 'active', true);


        },

        show_menu(item) {

            if (item.isActive == false) {
                item.isActive = true
            } else item.isActive = false

            // delete Vue.set(this.contacts[i].messages[j], 'active', true);
        },








        remove_item: function(contactsIndex, messagesIndex) {

            let myItem = this.contacts[contactsIndex].messages;

            myItem[messagesIndex].isActive = true;

            // uso un setTimeout per dare il tempo di portare isActive=false in questo
            // modo l'indice successivo che diventerà l'indice corrente non avrà isActive=true quindi il dropdown aperto
            setTimeout(() => {
                myItem.splice(messagesIndex, 1);

            }, 0001)


        },

        search_contacts(){
            this.contacts.forEach((item) => {

                let contact_name = item.name.toLowerCase();
                let searched_name = this.search.toLowerCase();
                if(contact_name.includes(searched_name)) {
                    item.visible = true;
                } else {
                    item.visible = false;
                }
            });

        },

    },

    computed: {
        filteredChat: function(){
            return this.contacts.filter((item) => {
                return item.name.toLowerCase().match(this.search.toLowerCase())
            })
        },




    },

    created: function() {
        // let name_array = this.contacts[0].name.split("");
        //
        // search_contacts: function(item){
        //     let y = item.split("");
        // };

    }
    // 10/01/2020 15:30:55


})
