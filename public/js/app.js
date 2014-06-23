Ext.define('demo.myModule.view.Panel', {
	extend: 'Ext.panel.Panel',
	layout:'fit',
    items: {
        title: 'Inner Panel',
        html: '<p>This panel is fit within its container.</p>',
        bodyStyle: 'padding:15px',
        border: false
    },
    renderTo: Ext.getBody()
});