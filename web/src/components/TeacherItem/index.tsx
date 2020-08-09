import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/1240701477460598784/wwQN5aH__400x400.jpg" alt="Vinicius Scavoni" />
                <div>
                    <strong>Vinicius Scavoni</strong>
                    <span>Sarcasmo</span>
                </div>
            </header>

            <p>
                Esse é o tal jogo que é melhor que o god of war 4 de usuário para ter uma ideia de como fazer um orçamento para limpar o nome da empresa para que eu possa fazer um novo anúncio
            </p>

            <footer>
                <p>
                    Preço/hora
                <strong>20,00R$</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato

            </button>
            </footer>
        </article>
    );
}


export default TeacherItem;