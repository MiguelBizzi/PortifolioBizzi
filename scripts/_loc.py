import json,sys
def merge(path, ns, kv):
    d=json.load(open(path))
    cur=d.setdefault(ns,{})
    cur.update(kv)
    json.dump(d,open(path,'w'),indent=2,ensure_ascii=False); open(path,'a').write('\n')
