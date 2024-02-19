import wappIcon from '../../assets/whatsapp-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import githubIcon from '../../assets/github-icon.png';
import styles from  './footer.module.css';

export const Footer = ()=>{
    return(
        <footer className={styles.footer}>
            <section>
            <div>
                <h1>Contato</h1>
                <div>
                    <img src={wappIcon} alt="WhatsApp Ícone" />
                    <img src={linkedinIcon} alt="LinkedIn Ícone" />
                    <img src={githubIcon} alt="GitHub Ícone" />
                </div>
            </div>
            <p>Todos os direitos reservados - José da Silva</p>
            </section>
        </footer>
    )
}