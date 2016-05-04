Ext.define('KitchenSink.view.Header', {
    extend: 'Ext.Container',
    requires: ['KitchenSink.view.HeaderModel'],
    viewModel: {
       type: 'header-model'
    },
    xtype: 'appHeader',
    cls: 'app-header',

    height: 52,
    layout: {
        type: 'hbox',
        align: 'middle'
    },

    initComponent: function() {

        this.items = [{
            xtype: 'component',
            cls: 'app-header-logo'
        },{
            xtype: 'component',
            cls: 'app-header-title',
            bind: {
                html: '{title}'
            },
            flex: 1
        }];

        if (!Ext.getCmp('options-toolbar')) {
            this.items.push({
                xtype: 'profileSwitcher'
            });
        }

        this.callParent();
    }
});
