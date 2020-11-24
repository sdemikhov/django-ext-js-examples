Ext.define(
    'Frontend.view.main.Login', 
    {
        extend: 'Ext.form.Panel',
        xtype: 'loginform',
        items: [{
             xtype: 'textfield',
             name: 'login',
             label: 'login'
         }],
        buttonAlign: 'left',
        bodyPadding: 10,
        buttons: [
            {
                text: 'Check',
                listeners: {
                    click: 'onLoginClick'
                }
            }
        ],
        
    }
);
