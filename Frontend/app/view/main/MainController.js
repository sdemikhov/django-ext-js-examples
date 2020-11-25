/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Frontend.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    onLoginClick: function(button) {      
        const form = button.up('formpanel');
        const params = form.getValues();      
        Ext.Ajax.request({
            url: 'http://127.0.0.1:8000/api/user/login',
             success: function(response, opts) {
                 const obj = Ext.decode(response.responseText);
                 Ext.Msg.alert('Validation result', String(obj.result));
             },
             failure: function(response, opts) {
                 Ext.Msg.alert(
                    'Error',
                    'server-side failure with status code ' + response.status
                );
             },
            method: 'POST',
            params: params,
             
        });
    },
});
