Ext.define('KitchenSink.store.Navigation', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.navigation',

    constructor: function(config) {
        var me = this;

        me.callParent([Ext.apply({
            root: {
                text: 'All',
                id: 'all',
                expanded: true,
                children: me.getNavItems()
            }
        }, config)]);
    },

    addIconClasses: function (items) {
        for (var item, i = items.length; i-- > 0; ) {
            item = items[i];

            if (!('iconCls' in item)) {
                item.iconCls = 'icon-' + item.id;
            }

            if (!('glyph' in item)) {
                // sets the font-family
                item.glyph = '32@Sencha-Examples';
            }

            if (item.children) {
                this.addIconClasses(item.children);
            }
        }

        return items;
    },

    getNavItems: function() {
        return this.addIconClasses([
            {
                text: 'Pivot Grids',
                id: 'pivot-grids',
                expanded: true,
                description:    'The Pivot Grid component enables rapid summarization of large sets of data. ' +
                                'It provides a simple way to condense many data points into a format that ' +
                                'makes trends and insights more apparent.',
                children: [
                    { id: 'normal-pivot-grid', text: 'Full Data', leaf: true },
                    { id: 'outline-pivot-grid', text: 'Question 1', leaf: true },
                    { id: 'compact-pivot-grid', text: 'Question 2', leaf: true },
                    { id: 'configurable-pivot-grid', text: 'Configurator plugin', leaf: true },
                    { id: 'drilldown-pivot-grid', text: 'DrillDown plugin', leaf: true },
                    { id: 'rangeeditor-pivot-grid', text: 'RangeEditor plugin', leaf: true },
                    { id: 'excel-pivot-grid', text: 'Exporter plugin', leaf: true },
                    { id: 'chart-pivot-grid', text: 'Chart integration', leaf: true }/*,
                    { id: 'remote-pivot-grid', text: 'Remote calculations', leaf: true }*/
                ]
            }
        ]);
    }
});
