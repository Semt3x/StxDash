#!/usr/bin/python

import sys, json, cgi
data = cgi.FieldStorage()
received = data.getvalue("value")
result = {'success':'true','value':received.upper()}
print ('Content-Type: application/json\n\n')
print (json.dumps(result))