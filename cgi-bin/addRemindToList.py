#!/usr/bin/python

import sys, json, os, cgi
params = cgi.FieldStorage()
remlist = params.getvalue("remlist")
thought = params.getvalue("thought")

with open('data/reminds.json', 'r+') as f:
    data = json.load(f)
    for r in data['remindslist']:
        if r['name'] == remlist:
            tid = 0
            if 'reminds' in r:
                for t in r['reminds']:
                    if tid < t['id']:
                        tid = t['id'] + 1
                r['reminds'].append({"id":tid,"content":thought})
            else:
                r['reminds']=[{"id":tid,"content":thought}]
    f.seek(0)
    f.write(json.dumps(data, f, indent=4))
    f.truncate()
    print ('Content-Type: application/json\n\n')
    print (json.dumps(data))