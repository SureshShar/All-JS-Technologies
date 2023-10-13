import { configureStore, createStore } from "@reduxjs/toolkit"
import { noteReducer } from "./noteReducer"

export const store = createStore(noteReducer)