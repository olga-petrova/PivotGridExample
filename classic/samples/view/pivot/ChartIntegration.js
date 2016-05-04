/**
 *
 * This example shows how to create a pivot grid and integrate it with Sencha Charts.
 *
 */
Ext.define('KitchenSink.view.pivot.ChartIntegration', {
    extend: 'Ext.panel.Panel',
    xtype: 'chart-pivot-grid',
    controller: 'chartintegration',

    requires: [
        'KitchenSink.store.pivot.Cars',
        'KitchenSink.view.pivot.ChartIntegrationController'
    ],

    title: 'Pivot Grid with chart integration',
    collapsible: true,
    height: 450,
    layout: 'border',

    items: [{
        xtype: 'pivotgrid',
        region: 'center',
        flex: 1,

        store: {
            type: 'cars'
        },
        selModel: {
            type: 'cellmodel'
        },

        // Set this to false if multiple dimensions are configured on topAxis and
        // you want to automatically expand the col groups when calculations are ready.
        startRowGroupsCollapsed: true,
        startColGroupsCollapsed: true,

        // Configure the aggregate dimensions. Multiple dimensions are supported.
        aggregate: [{
            dataIndex:  'Price',
            header:     'Average price',
            aggregator: 'avg',
            width:      150
        }],

        // Configure the left axis dimensions that will be used to generate the grid rows
        topAxis: [{
            dataIndex:  'Origin',
            header:     'Origin',
            width:      150
        }],

        /**
         * Configure the top axis dimensions that will be used to generate the columns.
         * When columns are generated the aggregate dimensions are also used. If multiple aggregation dimensions
         * are defined then each top axis result will have in the end a column header with children
         * columns for each aggregate dimension defined.
         */
        leftAxis: [{
            dataIndex:  'Type',
            header:     'Type'
        }],

        listeners: {
            pivotdone: 'onPivotDone'
        }
    }]
});
