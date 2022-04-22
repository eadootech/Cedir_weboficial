import React from 'react';
import './styled.scss';

import logo from '../../assets/logo_header.svg';
import search from '../../assets/Search.svg';
import Message from '../../assets/Message.svg';
import Bell from '../../assets/Bell.svg';
import User from '../../assets/User.svg';
import { Navigation } from '../../Components/Navigation';
import { Switch } from '../../Components/switch';
import { Chats } from '../../Components/Chats';
import { PatientDetail } from '../../Components/patientDetail';

import person_one_jpg from '../../assets/Person/person1.png';


const dataUser = [
    {
        name:'Jonanthan da Silva',
        age:'27',
        contact:'(99) 9999 - 9999',
        order:'0983281',
        img:person_one_jpg
    },
    {
        name:'Jonanthan da Silva',
        age:'27',
        contact:'(99) 9999 - 9999',
        order:'0983281',
        img:person_one_jpg
    },
    {
        name:'Jonanthan da Silva',
        age:'27',
        contact:'(99) 9999 - 9999',
        order:'0983281',
        img:person_one_jpg
    },
    {
        name:'Jonanthan da Silva',
        age:'27',
        contact:'(99) 9999 - 9999',
        order:'0983281',
        img:person_one_jpg
    },
    {
        name:'Jonanthan da Silva',
        age:'27',
        contact:'(99) 9999 - 9999',
        order:'0983281',
        img:person_one_jpg
    },
    {
        name:'Jonanthan da Silva',
        age:'27',
        contact:'(99) 9999 - 9999',
        order:'0983281',
        img:person_one_jpg
    },
    {
        name:'Jonanthan da Silva',
        age:'27',
        contact:'(99) 9999 - 9999',
        order:'0983281',
        img:person_one_jpg
    },
    {
        name:'Jonanthan da Silva',
        age:'27',
        contact:'(99) 9999 - 9999',
        order:'0983281',
        img:person_one_jpg
    },
    {
        name:'Jonanthan da Silva',
        age:'27',
        contact:'(99) 9999 - 9999',
        order:'0983281',
        img:person_one_jpg
    },
    {
        name:'Jonanthan da Silva',
        age:'27',
        contact:'(99) 9999 - 9999',
        order:'0983281',
        img:person_one_jpg
    },
]

export function Home(){
    return(
        <>
            <div className="header">
                <div className="image_header">
                    <img
                        src={logo}
                    />
                </div>

                <div className="header_content">

                <form className="forms">
                    <input
                    type="text"
                    >   
                    </input>
                    <img
                        src={search}
                    />
                </form>

                    <div className="itens_header">

                        <div className="compoents">
                            <button>
                                <img
                                src={Message}
                                />
                            </button>

                            <button>
                                <img
                                src={Bell}
                                />
                            </button>

                        </div>

                        <div className="user_elements">
                            <p>
                            Xica da Silva
                            </p>

                            <img
                                src={User}
                            />

                            </div>
                        </div>


                </div>
                </div>
    
         <main className="content">
            <section>
            <Navigation/>
            </section>

            <section className="switch_container">
                <div className="button_switch_container">
                    <Switch/>
                </div>

                
                <div className='Title'>
                    <div className='Title_one'>
                        <p>Nome</p>
                    </div>

                    <div className='Title_two'>
                        <p>Idade</p>
                    </div>

                    <div className='Title_there'>
                        <p>OS</p>
                    </div>

                    <div className='Title_for'>
                        <p>Contato</p>
                    </div>
                </div>

                <div className="table">
                    {
                        dataUser.map((item,index) => 
                            <PatientDetail
                                name={item.name}
                                age={item.age}
                                contact={item.contact}
                                orderWorking={item.order}
                                userImg={item.img}
                                key={index}
                            />
                        )
                    }
                </div>
            </section>

            <section>
                <Chats/>
            </section>
        </main>
        </>
    );
}