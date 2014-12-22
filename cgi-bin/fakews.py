#!/usr/bin/python

import sys, json

result = {'success':'true','message':'World'}

print ('Content-Type: application/json\n\n')
print (json.dumps(result))