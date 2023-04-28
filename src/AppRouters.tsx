import { Component, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Productos } from "./components/Productos";
import Maps from "./components/Maps";
import InstrumentoIndividual from "./components/InstrumentoIndividual";
import Instrumento from "./components/InstrumentoClass";



export class AppRouters extends Component{
    render() : ReactNode{
        return (
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Home/>}/>
                <Route path="/productos" element={<Productos/>} />
                <Route path="/maps" element={<Maps/>}/>
                <Route path="/detalle">
                  <Route path=":id"  element={<InstrumentoIndividual/>}/>
                </Route>             
              </Routes>
        );
      }

}