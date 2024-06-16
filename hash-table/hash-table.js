
function hashTable() {
  this.data = {}

  this.insert = function(key, value){
    this.data[key] = value
  }
  this.find = function(key){
    return this.data[key]
  }
  this.delete = function(key){
    delete this.data[key]
  }
}

const dataStructure = new hashTable()

dataStructure.insert("key1", "value1")
dataStructure.insert("key2", "value2")

console.log(dataStructure)
console.log(dataStructure.find("key1"))

dataStructure.delete("key1")

console.log(dataStructure)
console.log(dataStructure.find("key1"))

const obj = {
  "key1" : "value1"
}

console.log("obj - ", obj)