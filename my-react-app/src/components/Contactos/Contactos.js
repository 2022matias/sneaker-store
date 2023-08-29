import './contactos.scss';
import iconoEmail from '../../images/iconoEmail.jpg'

function Contactos() {

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Enviando...");
    }

    return (
        <div className='contacts'>
            <h2>Contactos</h2>
            <form onSubmit={handleSubmit} className="contacts__form">
                <img src={iconoEmail} alt="Icono Email" className="contacts__iconoEmail" />
                <div className="contacts__separator">
                    <input type="text" placeholder="Nombre" className="contacts__name" />
                    <input type="email" placeholder="Email" className="contacts__email" />
                    <textarea type="text" placeholder="Dejenos su consulta" className="contacts__message"></textarea>
                    <button>Enviar</button>
                </div>
            </form>
        </div>
    )
}
{/* <div class="flex__container">
		<form class="form">
		<div class="form__section">
			<input type="text" class="form__input" placeholder="Nombre">
		</div>
		<div class="form__section">
			<input type="email" class="form__input" placeholder="Email">
		</div>
		<div class="form__section">
			<textarea class="form__input" placeholder="Escriba su mensaje"></textarea>
		</div>
		<div class="form__section">
			<input type="submit" class="form__input">
		</div>
	</form>
	<div class="form__img">
		<img src="https://fundeu.do/wp-content/uploads/2018/07/email-650x330.png">
	</div>

	</div> */}

export default Contactos;