/**
 *
 * This example shows how to create a pivot grid and let your end users
 * configure it.
 *
 */
Ext.define('KitchenSink.view.pivot.Configurator', {
    extend: 'Ext.pivot.Grid',
    xtype: 'configurable-pivot-grid',
    controller: 'pivotconfig',

    requires: [
        'KitchenSink.view.pivot.ConfiguratorController',
        'KitchenSink.store.pivot.Cars',
        'Ext.pivot.plugin.Configurator'
    ],

    title: 'Pivot Grid with Configurator plugin',
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
        ptype:      'pivotconfigurator',
        pluginId:   'configurator',
        // It is possible to configure a list of fields that can be used to configure the pivot grid
        // If no fields list is supplied then all fields from the Store model are fetched automatically
        fields: [{
            dataIndex: 'Manufacturer',
            header: 'Manufacturer'
        },
            {
                dataIndex: 'Model',
                header: 'Model',
                aggregator: 'count'
            },
            {
                dataIndex: 'Type',
                header: 'Type'
            },
            {
                dataIndex: 'Min.Price',
                header: 'Min.Price',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Price',
                header: 'Price',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Max.Price',
                header: 'Max.Price',
                aggregator: 'avg'
            },
            {
                dataIndex: 'MPG.city',
                header: 'MPG.city'
            },
            {
                dataIndex: 'MPG.highway',
                header: 'MPG.highway'
            },
            {
                dataIndex: 'AirBags',
                header: 'AirBags'
            },
            {
                dataIndex: 'DriveTrain',
                header: 'DriveTrain'
            },
            {
                dataIndex: 'Cylinders',
                header: 'Cylinders'
            },
            {
                dataIndex: 'EngineSize',
                header: 'EngineSize',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Horsepower',
                header: 'Horsepower',
                aggregator: 'avg'
            },
            {
                dataIndex: 'RPM',
                header: 'RPM',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Rev.per.mile',
                header: 'Rev.per.mile',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Man.trans.avail',
                header: 'Man.trans.avail',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Fuel.tank.capacity',
                header: 'Fuel.tank.capacity',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Passengers',
                header: 'Passengers',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Length',
                header: 'Length',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Wheelbase',
                header: 'Wheelbase',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Width',
                header: 'Width',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Turn.circle',
                header: 'Turn.circle',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Rear.seat.room',
                header: 'Rear.seat.room',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Luggage.room',
                header: 'Luggage.room',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Weight',
                header: 'Weight',
                aggregator: 'avg'
            },
            {
                dataIndex: 'Origin',
                header: 'Origin'
            }
        ]
    }],

    header: {
        itemPosition: 1, // after title before collapse tool
        items: [{
            ui: 'default-toolbar',
            xtype: 'button',
            text: 'Dock',
            menu: {
                defaults: {
                    xtype: 'menucheckitem',
                    group:  'docking',
                    checkHandler: 'changeDock'
                },
                items: [{
                    text: 'Top'
                },{
                    text: 'Right',
                    checked: true
                },{
                    text: 'Bottom'
                },{
                    text: 'Left'
                }]
            }
        }]
    }
});
