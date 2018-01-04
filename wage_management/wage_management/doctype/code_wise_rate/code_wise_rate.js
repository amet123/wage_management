// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Code Wise Rate', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on('Code Wise Rate','validate',function(frm){
	for(var i in activity_table){
		frm.doc.activity_table[i].garden_name=frm.doc.garden_name;
	}
});
