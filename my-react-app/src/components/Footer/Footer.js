import './footer.scss';
import 'font-awesome/css/font-awesome.min.css';


function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__content">
                    <h2 className="footer__content-title">Casa central</h2>
                    <p className='footer__content-text'>Lavalle 529</p>
                    <p className='footer__content-text'>Tel. 4328-6852 </p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0815594384994!2d-58.37687902417281!3d-34.60209907295487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaccf6f2986b%3A0x7872cde71cfbcc79!2sLavalle%20529%2C%20C1047AAK%20CABA!5e0!3m2!1ses-419!2sar!4v1694151916816!5m2!1ses-419!2sar"
                    width="300"
                    height="160"
                    style={{ border: '0' }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="footer__content2">
                    <h2 className='footer__content2-title'>Nuestras redes sociales</h2>
                    <div className='footer__content2-social'>
                        <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer">Instagram
                            <i className='footer__content2-social-icon fa fa-instagram'></i>
                        </a>
                        <a href="https://www.facebook.com/tucuenta" target="_blank" rel="noopener noreferrer">Facebook
                            <i className='footer__content2-social-icon fa fa-facebook'></i>
                        </a>
                        <a href="https://www.youtube.com/tucuenta" target="_blank" rel="noopener noreferrer">Youtube
                            <i className='footer__content2-social-icon fa fa-youtube'></i>
                        </a>
                        <a href="https://www.twitter.com/tucuenta" target="_blank" rel="noopener noreferrer">Twitter
                            <i className='footer__content2-social-icon fa fa-twitter'></i>
                        </a>
                    </div>
                </div>
            </footer >
            <p className='footer__copyright'>&copy; 2023 Matías Agustín Campos. All rights reserved.</p>
        </>
    )
}

export default Footer;