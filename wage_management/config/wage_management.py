from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
      {
         "label":_("Data Stored"),
         "items":[
             {
               "type":"doctype",
               "name":"Garden Information",
               "description":_("This is to store the garden information")
             },

             {
               "type":"doctype",
               "name":"Salary Information",
               "description":_("This is to store the salary information")
             }

         ]
      },
      {
            "label":_("Input Data"),
            "items":[
                {
                    "type":"doctype",
                    "name":"Labour Information",
                    "description":_("This is to get the labour information")
                }
            ]
      }

    ]
