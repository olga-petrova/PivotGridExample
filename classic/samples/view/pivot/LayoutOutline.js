/**
 *
 * This example shows how to create a pivot grid and display the results in
 * an outline layout.
 *
 */
Ext.define('KitchenSink.view.pivot.LayoutOutline', {
    extend: 'Ext.pivot.Grid',
    xtype: 'outline-pivot-grid',
    controller: 'pivotlayout',

    requires: [
        'KitchenSink.store.pivot.Cars',
        'KitchenSink.view.pivot.LayoutController'
    ],

    title: 'What manufacturers produces the cheapest and the most expencive cars?',
    collapsible: true,
    multiSelect: true,
    height: 350,

    store: {
        type: 'cars'
    },
    selModel: {
        type: 'rowmodel'
    },

    // Set layout type to "outline". If this config is missing then the default layout is "outline"
    viewLayoutType: 'outline',

    // Set this to false if multiple dimensions are configured on leftAxis and
    // you want to automatically expand the row groups when calculations are ready.
    startRowGroupsCollapsed: false,

    aggregate: [{
        dataIndex:  'Price',
        header:     'Average price',
        aggregator: 'avg',
        width:      150
    }],

    leftAxis: [{
        dataIndex:  'Manufacturer',
        header:     'Manufacturer',
        width:      150
    }],

    topAxis: [{
        dataIndex:  'Type',
        header:     'Type'
    }],

    tbar: [{
        text: 'Totals position',
        menu: {
            defaults: {
                xtype: 'menucheckitem',
                group:  'totals',
                checkHandler: 'totalsHandler'
            },
            items: [{
                text: 'First'
            },{
                text: 'Last',
                checked: true
            },{
                text: 'None'
            }]
        }
    }]
});
