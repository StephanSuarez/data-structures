package main

import "fmt"

type HashTable struct {
	data map[string]string
}

func main() {
	dataStructure := &HashTable{data: make(map[string]string)}
	dataStructure.insert("key1", "value1")
	dataStructure.insert("key2", "value2")

	fmt.Println(dataStructure)
	fmt.Println(dataStructure.find("key1"))

	dataStructure.delete("key1")
	fmt.Println(dataStructure.find("key1"))

}

func (ht *HashTable) insert(key, value string) {
	ht.data[key] = value
}

func (ht *HashTable) find(key string) string {
	value, ok := ht.data[key]
	fmt.Println("---- in func | value - ", value)
	fmt.Println("---- in func | ok - ", ok)
	if ok {
		return value
	}
	return ""
}

func (ht *HashTable) delete(key string) {
	delete(ht.data, key)
}
