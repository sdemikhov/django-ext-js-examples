Ext.define(
    'Frontend.view.main.Login', 
    {
        extend: 'Ext.form.Panel',
        xtype: 'loginForm',
        items: [{
             xtype: 'textfield',
             name: 'username',
             label: 'login',
         }],
        buttonAlign: 'left',
        bodyPadding: 10,
        buttons: [
            {
                text: 'Check',
                handler: 'onLoginClick'
                
            }
        ],
        width: 300,

    }
);
