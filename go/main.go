//go:build js && wasm

package main

import (
	"syscall/js"
)

func main() {
	c := make(chan struct{}, 0)

	js.Global().Set("hello", js.FuncOf(hello))
	js.Global().Set("add", js.FuncOf(add))
	js.Global().Set("addAndSub", js.FuncOf(addAndSub))
	js.Global().Set("div", js.FuncOf(div))

	<-c
}

//	func hello() string {
//		return "Hello, WebAssembly!"
//	}
func hello(this js.Value, args []js.Value) interface{} {
	return js.ValueOf("Hello, WebAssembly!")
}

//	func add(v1, v2 int) int {
//		return v1 + v2
//	}
func add(this js.Value, args []js.Value) interface{} {
	v1 := args[0].Int()
	v2 := args[1].Int()
	return js.ValueOf(v1 + v2)
}

//	func addAndSub(v1, v2 int) (int, int) {
//		return v1 + v2, v1 - v2
//	}
func addAndSub(this js.Value, args []js.Value) interface{} {
	v1 := args[0].Int()
	v2 := args[1].Int()
	return js.ValueOf(map[string]interface{}{
		"sum":  v1 + v2,
		"diff": v1 - v2,
	})
}

//	func div(v1, v2 int) (int, error) {
//		if v2 == 0 {
//			return 0, errors.New("Divide by zero")
//		}
//		return v1 / v2, nil
//	}
func div(this js.Value, args []js.Value) interface{} {
	v1 := args[0].Int()
	v2 := args[1].Int()
	if v2 == 0 {
		return js.ValueOf(map[string]interface{}{
			"quot":  0,
			"error": "Divide by zero",
		})
	}
	return js.ValueOf(map[string]interface{}{
		"quot":  v1 / v2,
		"error": nil,
	})
}
