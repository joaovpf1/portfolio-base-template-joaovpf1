import { projects } from '../../data/projects.js';
import ProjectList from './projectList/projectList.jsx';
import styles from './projectsSection.module.css';


const ProjectsSection = () => {
    return (
        <section className={styles.projectsSection}>
            <h1>Projetos</h1>
            <ul>
                {projects.map((project) => {
                    return (
                        <ProjectList key={project.name} name={project.name} description={project.description} />
                    )
                })}
            </ul>
        </section>
    )
}

export default ProjectsSection