// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Salary Information', {
	refresh: function(frm) {

	}
});
frappe.ui.form.on('Salary Information','validate',function(frm){
	for(var i in frm.doc.activity_table){
		frm.doc.activity_table[i].garden_name=frm.doc.garden_name;
	}
});

frappe.ui.form.on('Salary Information','validate',function(frm){
	for(var j in frm.doc.code_table){
		frm.doc.code_table[j].garden_name=frm.doc.garden_name;
	}
});
