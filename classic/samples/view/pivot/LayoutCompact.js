/**
 *
 * This example shows how to create a pivot grid and display the results in
 * a compact layout.
 *
 */
Ext.define('KitchenSink.view.pivot.LayoutCompact', {
    extend: 'Ext.pivot.Grid',
    xtype: 'compact-pivot-grid',
    controller: 'pivotlayout',

    requires: [
        'KitchenSink.store.pivot.Cars',
        'KitchenSink.view.pivot.LayoutController'
    ],

    title: 'What car types are popular inside and outside of US?',
    collapsible: true,
    multiSelect: true,
    height: 350,

    store: {
        type: 'cars'
    },
    selModel: {
        type: 'cellmodel'
    },

    // Set layout type to "compact"
    viewLayoutType: 'compact',


    // Set this to false if multiple dimensions are configured on topAxis and
    // you want to automatically expand the col groups when calculations are ready.
    startRowGroupsCollapsed: true,
    startColGroupsCollapsed: true,
    rowGrandTotalsPosition: 'none',
    colGrandTotalsPosition: 'none',
    colSubTotalsPosition: 'none',
    rowSubTotalsPosition: 'none',

    aggregate: [{
        dataIndex:  'Model',
        header:     'Count of cars',
        aggregator: 'count',
        width:      120,
        renderer: Ext.util.Format.numberRenderer('0')
    }],

    topAxis: [{
        dataIndex:  'Origin',
        header:     'Origin'
    }],

    leftAxis: [{
        dataIndex:  'Type',
        header:     'Type'
    },{
        header: 'EngineSize',
        dataIndex: 'EngineSize',
        grouperFn: function(record) {
            var dataIndex = this.dataIndex,
                engine = parseInt(record.get(dataIndex));
            if (engine < 2) return "Engine < 2l";
            if (engine >= 2 && engine < 3) return "Engine 2l - 3l";
            if (engine >= 3 && engine < 4) return "Engine 3l - 4l";
            if (engine >= 4) return "Engine > 4l";

        }
    }]
});
