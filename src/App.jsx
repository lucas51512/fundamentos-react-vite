import './App.css'
import React from 'react'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametros'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import CondicionalComIf from "./components/basicos/CondicionalComIf"
import Condicional from "./components/basicos/Condicional"

export default (props) => (

    <div className='App'>
        <Card titulo=" #01 - Primeiro Componente">
            <Primeiro />
        </Card>

        <Card titulo="#02 - Componente com parametro">
            <ComParametro titulo="Esse é o titulo"
                subtitulo="Esse é o subtitulo" />
            <ComParametro titulo="Componente com parametro"
                subtitulo="Epa, um segundo teste!" />
        </Card>

        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Bárbara</li>
                    <li>Luiz</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#04 - Repetição">
            <Repeticao />
        </Card>

        <Card>
            <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>
        <Card>
            <Condicional  numero={11}></Condicional>
        </Card>

    </div>
);