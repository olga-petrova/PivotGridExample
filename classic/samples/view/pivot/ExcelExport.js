/**
 *
 * This example shows how to create a pivot grid and export the results to Excel.
 *
 */
Ext.define('KitchenSink.view.pivot.ExcelExport', {
    extend: 'Ext.pivot.Grid',
    xtype: 'excel-pivot-grid',
    controller: 'pivotexport',

    requires: [
        'KitchenSink.store.pivot.Cars',
        'Ext.pivot.plugin.Exporter'
    ],

    title: 'Pivot Grid with Exporter plugin',
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
        ptype: 'pivotexporter',
        pluginId: 'exporter'
    }],

    // Set this to false if multiple dimensions are configured on topAxis and
    // you want to automatically expand the col groups when calculations are ready.
    startRowGroupsCollapsed: true,
    startColGroupsCollapsed: true,

    // Configure the aggregate dimensions. Multiple dimensions are supported.
    aggregate: [{
        dataIndex:  'Model',
        header:     'Count of cars',
        aggregator: 'count',
        width:      150,
        renderer: function (v) {
            return Math.round(v)||0;
        }
    }],

    // Configure the left axis dimensions that will be used to generate the grid rows
    leftAxis: [{
        dataIndex:  'Origin',
        header:     'Origin'
    },{
        dataIndex:  'Manufacturer',
        header:     'Manufacturer'
    }],


    // Configure the top axis dimensions that will be used to generate the columns.
    // When columns are generated the aggregate dimensions are also used. If multiple aggregation dimensions
    // are defined then each top axis result will have in the end a column header with children
    // columns for each aggregate dimension defined.
    topAxis: [{
        dataIndex:  'Type',
        header:     'Type'
    },{
        header: 'EngineSize',
        dataIndex: 'EngineSize',
        grouperFn: function(record) {
            var dataIndex = this.dataIndex,
                engine = parseInt(record.get(dataIndex));
            if (engine < 2) return "Engine less 2l";
            if (engine >= 2 && engine < 3) return "Engine less 3l";
            if (engine >= 3 && engine < 4) return "Engine less 4l";
            if (engine >= 4) return "Engine bigger 4l";

        }
    }],

    header: {
        itemPosition: 1, // after title before collapse tool
        items: [{
            ui: 'default-toolbar',
            xtype: 'button',
            text: 'Export to Excel',
            handler: 'exportToExcel'
        }]
    }
});
