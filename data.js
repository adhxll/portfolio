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
    new JobExperience(
        "2025 — Present", 
        "Technology Mentor", 
        "Apple Developer Academy @BINUS, Bali", 
        "I came back to the academy as a mentor after I graduated from it in 2021. I really love learning and tech, and that was one of the reasons why I decided to switch careers from an engineer to a mentor. Here, I spent most of my time planning curriculum & activities before and during the day-to-day execution. I also mentored teams to guide them through their project cycles to create an app. Although the products are usually apps, what mentors are trying to answer a lot is: how do we build critical thinking in learners that will result in quality products? Of course, we also struggled a lot with how AI interferes with learning by creating a false sense of competence when someone thinks they have learned something because they vibe-coded an app. That was a sore topic for me, so much so that I rage-wrote an article about it (backed by research, don't worry). On top of that, navigating through differences in the international culture here was really challenging, but I would not have it any other way. In fact, the international environment was also the reason why I applied.\nAside from the pedagogy & mentorship aspect, technically I also got exposed to more Apple frameworks and practices than ever before, such as the FoundationModel framework & designing with accessibility in mind. This exposure really led me to think about iOS development in a different light. I think the industry might not use native features to their fullest degree. Understandable though, since it's not just iOS that runs the whole mobile development industry. At least from my experience, the same feature usually gets proposed for both platforms with the same time allocation. Adding more native iOS features will need more resources to allocate, which usually is hard to justify. More native iOS features are not impossible though."),
    new JobExperience(
        "2022 — 2025", 
        "Software Engineer – iOS", "Traveloka", 
        "A 3-year experience that I will never forget as my first professional job. Traveloka was one of the leading OTA apps in Southeast Asia that was founded in 2012, so I had to really learn how to handle a large, messy, legacy-infested codebase here. Debugging weird racing conditions, memory leaks, migrating obj-c code, negotiating with stakeholders so that the engineers would have more time to develop a feature, stuff like that. Every team operates differently, and I had the unique experience of being shuffled through different teams during my first 6 months I worked there due to unfortunate timing for reorganisation (Xperience, Grocery, then Booking Platform). For the rest of my career here, I worked under the Booking Platform team, where I mostly focused on the post-booking flow. It was a really humbling yet fun experience. As a platform team, we really have to consider scalability to the max. Every product in Traveloka will pass through our platform. Remember what I said about different product teams operating differently? Yeah, well, that also means the code. Imagine trying to make a piece of code that can fit all of those products. I enjoy it a lot though, but not without some late-night debugging sessions."),
    new JobExperience(
        "2021", 
        "Junior iOS Developer", 
        "Apple Developer Academy @BINUS", 
        "This was where it all began. I can cite a lot of technical feats I did during my 10-month journey here, but you can always read that through my LinkedIn or CV (also on this website). What it won't reveal is how I grew as a confident person who is not afraid of failure anymore. I also found my love as a technical person here, simply because I tried a product management role that I disliked so much. Don't get me wrong, I can certainly do it with more experience, but I would rather lose some sleep debugging weird bugs. During this time, since it was also counted as an internship, I was also doing it in parallel with my research thesis. Talk about time management.")
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