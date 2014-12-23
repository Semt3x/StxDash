#!/usr/bin/python

import sys, json, cgi, platform
data = cgi.FieldStorage()
received = data.getvalue("value")
machine = "{'node':"+platform.node()+", 'system':"+platform.system()+"}"
result = {'success':'true','value':received.upper(),'platform':machine}
print ('Content-Type: application/json\n\n')
print (json.dumps(result))