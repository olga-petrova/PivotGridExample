Ext.define('KitchenSink.view.navigation.Breadcrumb', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'navigation-toolbar',

    items: [{
        xtype: 'tool',
        type: 'down',
        tooltip: 'Switch to Tree View',
        listeners: {
            click: 'showTreeNav'
        }
    }, {
        xtype: 'breadcrumb',
        itemId: 'navigation-breadcrumb',
        cls: 'navigation-breadcrumb',
        bind: {
            selection: '{selectedView}'
        },
        flex: 1,
        // hide glyphs on the buttons (too busy)
        showIcons: false,
        store: 'navigation'
    }]
});
