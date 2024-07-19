export interface PublicationProps {
  title: string;
  conference: string;
  publicationYear: number;
  publisher: string;
  abstract: string;
  doi: string;
  url: string;
}

export const publications: PublicationProps[] = [
  {
    title:
      'Applying Scrum in Interdisciplinary Case Study Projects for Literacy in Fluency Analysis',
    conference:
      'International Conference on Information Technology-New Generations',
    publicationYear: 2023,
    publisher: 'Springer International Publishing',
    abstract:
      'During the calendar year of 2021, at the Aeronautics Institute of Technology (ITA, Brazil), an Interdisciplinary Problem-Based Learning Case Study was performed. It was divided into two Projects: FAL-BD (33 grad and undergrad students – dealing with databases aspects) and FAL-RT (13 grad and undergrad students – dealing with real-time issues and the development of a hardware prototype), respectively for the first and second semesters of the Academic year of 2021. This Case Study comprised 46 students from seven Computer Science disciplines: three from the first and four from the second semester. In each Project/Semester, it was attempted to conceptualize, model and develop a part of a database distributed system (first semester) and to apply Real-Time to it (second semester). In the second semester, it was also developed a Personal Digital Assistant (PDA) prototype to collect audios. In order to achieve this goal, the following Technologies were employed: Data Systems, Artificial Intelligence, Internet of Things, Machine Learning and Real-Time Embedded Systems. The final system was based on a similar project, being developed by the Brazilian Ministry of Education. This Project intends to automatically analyze the reading fluency of Elementary School children. The two projects described in this paper deal with the creation of a database and the evaluation of its Real-Time aspects. The audios, collected via the locally developed PDA (may be offline mode), must be stored in a server, for later automatic analysis, using Machine Learning and Artificial Intelligence. Each of the two Projects was completed in 12 weeks, during its Academic semester. It applied the SCRUM framework for the two projects management. This paper’s major contribution was the use of the Agile Method (with SCRUM) for testing, managing and developing the Case Study, which resulted in a Literacy in Fluency Analysis system, including a working hardware prototype for audio collection.',
    doi: 'https://doi.org/10.1007/978-3-031-28332-1_48',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-28332-1_48',
  },
  {
    title:
      'Case Study of an Interdisciplinary Academic Project for Reading Fluency Analysis',
    conference:
      'International Conference on Information Technology-New Generations ',
    publicationYear: 2024,
    publisher: 'Springer International Publishing',
    abstract:
      'During the first semester of 2023, at the Aeronautics Institute of Technology (ITA, Brazil), an Interdisciplinary Problem-Based Learning (IPBL) Case Study was conducted. This case study involved 14 undergraduate and graduate students, distributed across 3 disciplines of Electronic and Computer Engineering graduate course at ITA. The project aimed to conceptualize, model, and develop a portion of a distributed database system. During this period, it was possible to develop a prototype for audio collection using the following technologies: Database System, Artificial Intelligence, Machine Learning, Blockchain and Kubernetes. The final system was based on a similar project developed for the Brazilian Ministry of Education. This project aims to automatically analyze the reading fluency of elementary school children. The project described in this article focuses on creating a computational infrastructure for real-time audio collection. The audio, collected through the locally developed interface, should be stored on a server for subsequent automatic analysis using a Machine Learning and Artificial Intelligence model. The project was completed in 16 weeks, during an academic semester, and the SCRUM Framework was applied for project management. The primary contribution of this work was the joint utilization of the Agile Method (with SCRUM) and other mentioned technologies to test, manage, and develop the case study, resulting in a Literacy Fluency Analysis system, including a functional software prototype for audio acquisition.',
    doi: 'https://doi.org/10.1007/978-3-031-56599-1_28',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-56599-1_28',
  },
];
