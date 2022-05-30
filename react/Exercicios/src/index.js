import React from 'react';
import ReactDOM from 'react-dom';

import Pai from './componentes/Pai';
import Filho from './componentes/Filho';
import Neto from './componentes/Neto';

ReactDOM.render( < div >
                    <Pai nome = 'Maikel' sobrenome = 'Silva' >
                        <Filho nome = 'João' >
                            <Neto nome='Pedrinho'/>
                            <Neto nome='Zézinho'/>
                            <Neto nome='Jeanzinho'/>
                        </Filho>
                        <Filho nome = 'Joana' >
                            <Neto nome='Mirelinha'/>
                        </Filho>
                        <Filho nome = 'Carla' >
                            <Neto nome='Maria'/>
                        </Filho>
                    </Pai> 
                </div > , document.getElementById('root'));