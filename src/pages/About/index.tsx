import { EnumExperienceType, about } from "../../data/about"
import { Container, PointTime, Profile, ProfileAuthor, ProfileContent, SectionTitle, Timeline } from "./styled"

export function About(){
    const {
        experiences,
        name,
        scientificName,
        imgProfile,
        description,
    } = about

    const academicExperiences = experiences.filter(experience => experience.experienceType === EnumExperienceType.ACADEMIC)
    const professionalExperiences = experiences.filter(experience => experience.experienceType === EnumExperienceType.PROFESSIONAL)

    return (
        <Container>
            <Profile>
                <ProfileAuthor>
                    <img src={imgProfile.url} alt={imgProfile.alt} />
                    <p>{name}</p>
                    <p>{scientificName}</p>
                </ProfileAuthor>
                <ProfileContent>
                    <h1>About Me</h1>
                    <p>{description}</p>
                </ProfileContent>
            </Profile>

            <SectionTitle>Academic Experience</SectionTitle>
            <Timeline>
                {academicExperiences.map(experience => (
                    <PointTime key={experience.content + experience.title}>
                        <h1>{experience.endYear}</h1>
                        <h2>{experience.title}</h2>
                        <p>{experience.content}</p>
                    </PointTime>
                ))}
            </Timeline>

            <SectionTitle>Professinal Experience</SectionTitle>
            <Timeline>
                {professionalExperiences.map(experience => (
                    <PointTime key={experience.content + experience.title}>
                        <h1>{experience.startYear}</h1>
                        <h2>{experience.title}</h2>
                        <p>{experience.content}</p>
                    </PointTime>
                ))}
            </Timeline>
        </Container>
    )
}