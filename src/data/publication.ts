export interface PublicationProps {
    title: string
    conference: string
    publicationYear: number
    publisher: string
    abstract: string
    doi: string
    url: string
}

export const publications: PublicationProps[] = [
    {
        title: "Applying Scrum in Interdisciplinary Case Study Projects for Literacy in Fluency Analysis",
        conference: "International Conference on Information Technology-New Generations",
        publicationYear: 2023,
        publisher: "Springer International Publishing",
        abstract: "During the calendar year of 2021, at the Aeronautics Institute of Technology (ITA, Brazil), an Interdisciplinary Problem-Based Learning Case Study was performed. It was divided into two Projects: FAL-BD (33 grad and undergrad students – dealing with databases aspects) and FAL-RT (13 grad and undergrad students – dealing with real-time issues and the development of a hardware prototype), respectively for the first and second semesters of the Academic year of 2021. This Case Study comprised 46 students from seven Computer Science disciplines: three from the first and four from the second semester. In each Project/Semester, it was attempted to conceptualize, model and develop a part of a database distributed system (first semester) and to apply Real-Time to it (second semester). In the second semester, it was also developed a Personal Digital Assistant (PDA) prototype to collect audios. In order to achieve this goal, the following Technologies were employed: Data Systems, Artificial Intelligence, Internet of Things, Machine Learning and Real-Time Embedded Systems. The final system was based on a similar project, being developed by the Brazilian Ministry of Education. This Project intends to automatically analyze the reading fluency of Elementary School children. The two projects described in this paper deal with the creation of a database and the evaluation of its Real-Time aspects. The audios, collected via the locally developed PDA (may be offline mode), must be stored in a server, for later automatic analysis, using Machine Learning and Artificial Intelligence. Each of the two Projects was completed in 12 weeks, during its Academic semester. It applied the SCRUM framework for the two projects management. This paper’s major contribution was the use of the Agile Method (with SCRUM) for testing, managing and developing the Case Study, which resulted in a Literacy in Fluency Analysis system, including a working hardware prototype for audio collection.",
        doi: "https://doi.org/10.1007/978-3-031-28332-1_48",
        url: "https://link.springer.com/chapter/10.1007/978-3-031-28332-1_48",
    }
]