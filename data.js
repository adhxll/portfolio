const mySkills = [
    'iOS Development', 
    'Swift', 
    'SwiftUI', 
    'UIKit',
    'Objective-C', 
    'Python', 
    'NLP',
    'Transformer Architecture', 
    'Research',
    'Mentorship',
];


class JobExperience {
    constructor(year, role, org, desc) {
        this.year = year;
        this.role = role;
        this.org = org;
        this.desc = desc;
    }
};

const myExperiences = [
    new JobExperience("2025 — Present", "Technology Mentor", "Apple Developer Academy @BINUS, Bali", "Mentoring Swift/iOS learners at the only international Apple Developer Academy in Indonesia. Leading program-wide events, contributing to curriculum planning, and integrating ethical AI frameworks into learning materials."),
    new JobExperience("2022 — 2025", "Software Engineer – iOS", "Traveloka", "Built and maintained scalable consumer-facing features in Swift and Objective-C across Experience, Grocery, and Platform verticals. Authored design documents and conducted code reviews across a large iOS codebase."),
    new JobExperience("2021", "Junior iOS Developer", "Apple Developer Academy @BINUS", "Selected from 3,584 applicants (5.6% acceptance). Held roles as iOS Engineer, Project Manager, and Technical Lead across five cross-functional project teams.")
];

const myAwards = [
    "Best Paper Award — MIWAI 2023 · Book Recommendation Using Double-Stack BERT",
    "Next Generation Women Leaders APAC — McKinsey &amp; Company, 2023",
    "PPA Government Scholarship Awardee — Indonesian Government, 2019",
    "2nd Best Exemplary Student — Santa Patricia High School, 2018",
    "3rd Place &amp; Top-10 Individual Speaker — English Debate, UNITY @ UMN, 2017"
];

class Project {
    constructor(link,year,title, desc, tech) {
        this.link = link;
        this.year = year;
        this.title = title;
        this.desc = desc;
        this.tech = tech;
    }
};

const myProjects = [
    new Project(
        "https://github.com/adhxll/DoubleStackBERT",
        "2021-2022","Double-Stack BERT",
        "A novel document-embedding architecture for content-based book recommendation, outperforming five state-of-the-art baselines across three datasets. Awarded Best Paper — MIWAI 2023.",
        ["NLP Research","Python", "Transformer architecture", "Hugging Face", "Recommendation System"]),
    new Project(
        "https://github.com/adhxll/Pollo",
        "2021",
        "Polo: The Ear Training Game",
        "A team game project about training your ear for musical endeavors",
        ["Unity", "C#"]),
    new Project(
        "https://uncovered-spark-fa5.notion.site/Sicara-4fe0a49802b04739adceb9f7212ce0e9",
        "2021",
        "Sicara",
        "A team project about an iOS app that helps SMK students to improve their communication skill for job interview preparation by simulating video interview by prompting questions that will be evaluated using feedbacks from ML models.",
        ["CoreML", "Swift", "UIKit", "Machine Learning", "Vision"]),
    new Project(
        "https://uncovered-spark-fa5.notion.site/Gitra-56586db088ea42038ca97bba251e3d8c",
        "2021",
        "Gitra",
        "A team project about an iOS app that will serve as a complementary guitar learning tools that the people who are blind can use",
        ["Swift", "UIKit"]),
    new Project(
        "https://uncovered-spark-fa5.notion.site/Capundi-528c3e6e44a44fbab7fc0d2d4c1d2996",
        "2021",
        "Capundi",
        "An individual project about an iOS app where you can have a virtual cup of coffee. Although it's not possible for you to drink or taste it, you can interact with it.",
        ["Design Process", "SpriteKit", "Swift"]),
    new Project(
        "https://uncovered-spark-fa5.notion.site/JurnalKamu-02c0fc54d09c43f483a18e1db96c9d1b",
        "2021",
        "JurnalKamu",
        "A team project about an iOS journaling app for Indonesian early adults with several guiding questions that helps to maintain their mental health.",
        ["CoreData", "Swift", "UIKit"])
];