/**
 *
 * This example shows how to create a pivot grid and drill down the results.
 *
 * DblClick a cell to open the drill down window and see all records used to
 * aggregate that cell.
 *
 */
Ext.define('KitchenSink.view.pivot.DrillDown', {
    extend: 'Ext.pivot.Grid',
    xtype: 'drilldown-pivot-grid',

    requires: [
        'KitchenSink.store.pivot.Cars',
        'Ext.pivot.plugin.DrillDown'
    ],

    title: 'Pivot Grid with DrillDown plugin',
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
        ptype: 'pivotdrilldown',
        columns: [{
            dataIndex: 'Manufacturer',
            text: 'Manufacturer'
        },
            {
                dataIndex: 'Model',
                text: 'Model'
            },
            {
                dataIndex: 'Type',
                text: 'Type'
            },
            {
                dataIndex: 'Min.Price',
                text: 'Min.Price'
            },
            {
                dataIndex: 'Price',
                text: 'Price'
            },
            {
                dataIndex: 'Max.Price',
                text: 'Max.Price'
            },
            {
                dataIndex: 'MPG.city',
                text: 'MPG.city'
            },
            {
                dataIndex: 'MPG.highway',
                text: 'MPG.highway'
            },
            {
                dataIndex: 'AirBags',
                text: 'AirBags'
            },
            {
                dataIndex: 'DriveTrain',
                text: 'DriveTrain'
            },
            {
                dataIndex: 'Cylinders',
                text: 'Cylinders'
            },
            {
                dataIndex: 'EngineSize',
                text: 'EngineSize'
            },
            {
                dataIndex: 'Horsepower',
                text: 'Horsepower'
            },
            {
                dataIndex: 'RPM',
                text: 'RPM'
            },
            {
                dataIndex: 'Rev.per.mile',
                text: 'Rev.per.mile'
            },
            {
                dataIndex: 'Man.trans.avail',
                text: 'Man.trans.avail'
            },
            {
                dataIndex: 'Fuel.tank.capacity',
                text: 'Fuel.tank.capacity'
            },
            {
                dataIndex: 'Passengers',
                text: 'Passengers'
            },
            {
                dataIndex: 'Length',
                text: 'Length'
            },
            {
                dataIndex: 'Wheelbase',
                text: 'Wheelbase'
            },
            {
                dataIndex: 'Width',
                text: 'Width'
            },
            {
                dataIndex: 'Turn.circle',
                text: 'Turn.circle'
            },
            {
                dataIndex: 'Rear.seat.room',
                text: 'Rear.seat.room'
            },
            {
                dataIndex: 'Luggage.room',
                text: 'Luggage.room'
            },
            {
                dataIndex: 'Weight',
                text: 'Weight'
            },
            {
                dataIndex: 'Origin',
                text: 'Origin'
            }
        ]
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
