import gitIcon from '../../../assets/git-icon.png';

const ProjectList = ({ name, description }) => {
    return (
        <li>
            <div>
                <h3>{name}</h3>
                <img src={gitIcon} alt="Ícone git" />
            </div>
            <p>{description}</p>
            <span>Saiba mais</span>
        </li>
    )
}

export default ProjectList