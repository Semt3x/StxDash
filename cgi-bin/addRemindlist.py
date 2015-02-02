#!/usr/bin/python

import sys, json, os, cgi
params = cgi.FieldStorage()
received = params.getvalue("newlist")

with open('data/reminds.json', 'r+') as f:
    data = json.load(f)
    data['remindslist'].append({"name":received})
    f.seek(0)        # <--- should reset file position to the beginning.
    f.write(json.dumps(data, f, indent=4))
    f.truncate()
    print ('Content-Type: application/json\n\n')
    print (json.dumps(data))