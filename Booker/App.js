Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        console.log("Launching App");
        this._getIterationData();
        //this._getData();
    },

    _getIterationData: function() {
        var iterSTore = Ext.create('Rally.data.wsapi.Store', {
            limit: 200,
            model: 'Iteration',
            autoLoad: 'true',
            filters: [
                //{
                //    property: 'Project',
                //    operator: '=',
                //    value: 'LGS Mavericks (OS DFW)',
                //},
                {
                    property: 'Name',
                    operator: 'contains',
                    value: '2019'
                },
            ],
            fetch: ['Name', 'StartDate', 'EndDate', 'Project'],
            sorters: [
                {
                    property: 'StartDate',
                    direction: 'ASC', //'DESC',
                }
            ],
            listeners: {
                load: function(store, data, success) {
                    console.log('Logging iterations', store);
                    //app._getLimitedIterations(app, data);
                }
            }
        });
    },
    //_getLimitedIterations: function(app, iterations) {
        //console.log('Limited iterations');
    //},

    _getData: function() {
        var myStore = Ext.create('Rally.data.wsapi.Store', {
	model: 'User Story',
	autoLoad: true,
	listeners: {
            load: function(store, data, success) {
                this._logGrid(store);
            },
            scope: this
        },
	filter: [
                {
                    property: 'Project',
                    operator: '=',
                    value: 'LGS Mavericks (OS DFW)',
                },
                //{
                //    property: 'Iteration.Name',
                //    operator: '=',
                //    value: 'S12#2019-06-05/06-18',
                //},
            ],
	fetch: ['Name', 'FormattedID', 'ScheduleState', 'Iteration'],
		});
    },
    
    _logGrid: function(store) {
        console.log('Logging Store: ', store);
    }

});
/***
***/
