import portfolio from '../../../src/assets/portfolio.png';
import styles from './header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <section>
                <img src={portfolio} alt="Logo Portfólio" />
                <div>
                    <p>Sobre</p>
                    <p>Stack</p>
                    <p>Projetos</p>
                </div>
                <button>Contato</button>

            </section>
        </header>
    )
}