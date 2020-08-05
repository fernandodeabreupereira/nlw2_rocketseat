import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/15267646?s=460&u=1db02f16b2c59f26940d917934e83f4c7609f491&v=4" alt="Fernando de Abreu Pereira" />
                <div>
                    <strong>Fernando de Abreu Pereira</strong>
                    <span>Desenvolvimento mobile</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias mobile.
                <br /><br />
                Apaixonado por desenvolvimento web e mobile. Apaixonado por desenvolvimento web e mobile. Apaixonado por desenvolvimento web e mobile. Apaixonado por desenvolvimento web e mobile.
            </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
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