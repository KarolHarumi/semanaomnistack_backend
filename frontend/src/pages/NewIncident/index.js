import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return(
        <div className="new-incident-container">
            <div className='content'>
                <section>
                    <img src={logoImg} alt="Be the Hero" />

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={18} color={'#e02041'} />
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}