from MongoDb import MongoDb

db = MongoDb()

# for el in ["cos", "ala", "kot", "tomek"]:
#     db.add({"name": el})

text = 'ko'
print(db.search(text))
# exec(open('pytest'))