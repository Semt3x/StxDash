#!/usr/bin/python

import sys, json, os
applications = os.listdir('partials')
result = {'success':'true','applications':applications}
print ('Content-Type: application/json\n\n')
print (json.dumps(result))