import { technologies } from '../../data/technologies.js';
import TechnologiesType from './technologiesType/technologiesType.jsx';
import styles from './techSection.module.css';

const TechSection = () => {
    return (
        <section className={styles.techSection}>
            <h1>Tecnologias</h1>
            <ul>
                {technologies.map((tech) => {
                    return (
                        <TechnologiesType key={tech.name} name={tech.name} img={tech.img} />
                    )
                })}

            </ul>
        </section>
    )
}

export default TechSection