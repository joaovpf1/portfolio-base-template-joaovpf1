import bannerImage from '../../../src/assets/banner-img.png';
import { username } from '../../data/user.js';
import styles from './bannerSection.module.css';

export const BannerSection = () => {
    return (
        <section className={styles.bannerSection}>
            <div>
                <span>{username}</span>
                <h1>Bem vindo ao
                    meu portfólio</h1>
                <p>José está à procura de uma oportunidade.</p>
                <button>Saiba mais</button>
            </div>
            <img src={bannerImage} alt="Banner imagem" />
        </section>
    )
}