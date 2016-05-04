Ext.define('KitchenSink.store.pivot.Cars', {
    extend: 'Ext.data.Store',
    alias: 'store.cars',
    requires: ['KitchenSink.model.pivot.Car'],

    model: 'KitchenSink.model.pivot.Car',
    storeId: 'cars',

    proxy: {
        // load using HTTP
        type: 'ajax',
        limitParam: null,
        url: '/data/cars.json',
        // the return will be JSON, so lets set up a reader
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});
