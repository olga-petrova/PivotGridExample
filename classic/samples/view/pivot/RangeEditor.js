/**
 *
 * This example shows how to create a pivot grid and range edit the results.
 *
 * DblClick a cell to open the range editor window which allows you to change
 * all records that were used to aggregate that cell.
 *
 */
Ext.define('KitchenSink.view.pivot.RangeEditor', {
    extend: 'Ext.pivot.Grid',
    xtype: 'rangeeditor-pivot-grid',

    requires: [
        'KitchenSink.store.pivot.Cars',
        'Ext.pivot.plugin.RangeEditor'
    ],

    title: 'Pivot Grid with RangeEditor plugin',
    collapsible: true,
    multiSelect: true,
    height: 350,

    store: {
        type: 'cars'
    },
    selModel: {
        type: 'spreadsheet'
    },

    plugins: [{
        ptype: 'pivotrangeeditor'
    }],

    // Configure the aggregate dimensions. Multiple dimensions are supported.
    aggregate: [{
        dataIndex:  'Price',
        header:     'Average price',
        aggregator: 'avg',
        width:      150
    }],

    // Configure the left axis dimensions that will be used to generate the grid rows
    leftAxis: [{
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
    topAxis: [{
        dataIndex:  'Type',
        header:     'Type'
    }]
});
