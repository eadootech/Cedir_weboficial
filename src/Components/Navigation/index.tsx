import React, {useState} from 'react';
import './styled.scss';

import Car from '../../assets/Car.png';
import Stat from '../../assets/Stat.svg';
import User from '../../assets/User.svg';
import Add from '../../assets/Add.svg';
import Gear from '../../assets/Gear.svg';
import Out from '../../assets/out.svg'
import { Info } from '../icons/Info';


export function Navigation(){

    const[activeSvg, setactiveSvg] = useState('');

    function handleActiveItem(){
    
        switch(activeSvg){
            case 'lista':
                setactiveSvg('lista');
            break

            case 'dash':
                setactiveSvg('dash');
            break

            case 'drive':
                setactiveSvg('drive');
            break

            case 'paciente':
                setactiveSvg('paciente');
            break
        }
    }


    return(
        <div className="container" >

            <div className="elements">
                <button>
                    <div className="btn-elements">
                        <img
                            src={User}
                        />
                        

                        <div className='title'>
                            <p>Pacientes</p>
                        </div>
                    </div>
                </button>


                <button>            
                    <div className="btn-elements">
                        <img
                            src={Stat}
                        />
                        <div className='title'>
                            <p>Dashboard</p>
                        </div>

                    </div>
                </button>

                <button>
                    <div className="btn-elements">
                        <img
                            src={Car}
                            style={{color:'black'}}
                        />


                        <div className='title'>
                        <p>Drive Thru</p>
                        </div>

                    </div>
                </button>

                <button
                    onClick={handleActiveItem}
                >
                    <div className="btn-elements">
                        <Info
                            stroke={activeSvg ? '#5ACC86' : '#8D8D8D'}
                        />

                        <div className='title'>
                            <p>Lista de Serviço</p>
                        </div>

                    </div>
                </button>


                <button className="btn-add">

                    <div className="btn-elements_addButton">
                        <img
                            src={Add}
                        />

                        <div className='title'>
                            <p>
                            Adicionar<br/>
                            Paciente
                            </p>
                        </div>

                    </div>
                </button>
            </div>


            <div className="btn-container">
                <button>
                        <div className="btn-elements">
                            <img
                                src={Gear}
                            />

                            <p>Configurações</p>
                        </div>
                    </button>

                    <button>
                        <div className="btn-elements">
                            <img
                                src={Out}
                            />

                            <p
                                className='p_out'
                            >Sair</p>
                        </div>
                    </button>
            </div>
        </div>
    );
}