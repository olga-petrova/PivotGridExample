/**
 *
 * This example shows how to create a pivot grid and display the results in
 * an outline layout.
 *
 */
Ext.define('KitchenSink.view.pivot.NormalGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'normal-pivot-grid',

    requires: [
        'KitchenSink.store.pivot.Cars',
        'KitchenSink.view.pivot.LayoutController'
    ],

    title: 'Data from 93 Cars on Sale in the USA in 1993',
    collapsible: true,
    multiSelect: true,
    height: 350,

    store: {
        type: 'cars'
    },
    selModel: {
        type: 'rowmodel'
    },

    columns:[
        {
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
});

