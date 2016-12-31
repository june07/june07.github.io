$.notify({
        animate: {
                enter: 'animated fadeInRight',
                exit: 'animated fadeOutRight'
        },
            // options
            title: '<strong>Heads up!</strong>',
            message: 'Bootstrap Notify uses Bootstrap Info Alert styling as its default setting.'
        },{
            // settings
            type: 'info',
            delay: 0,
            allow_dismiss: true
        });