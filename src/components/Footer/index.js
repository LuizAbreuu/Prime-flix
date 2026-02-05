
import './footer.css';

function Footer(){
    const anoAtual = new Date().getFullYear();

    return(
        <footer className='footer'>
            <p> &copy; {anoAtual} Prime-flix. Desenvolvido por <a href="https://www.linkedin.com/in/luizmullercostadeabreu/" target="_blank" rel="noopener noreferrer">Luiz Abreu/Desenvolvedor fullstack</a></p>
        </footer>       
    )
}


export default Footer;