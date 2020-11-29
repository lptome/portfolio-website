import shattered from "../../assets/images/Shattered.png";
import personalWebsite from "../../assets/images/PersonalWebsite.png";
import gachatool from "../../assets/images/gachatool.png";
import storyagora from "../../assets/images/storyagora.png";

export const ProjectItems = [
  {
    id: 0,
    type: "< Web Application />",
    title: "Story Agora",
    subtitle: "Web Applications for users to read and share short stories.",
    img: storyagora,
    tech: [
      "Spring",
      "Java",
      "Hibernate",
      "Bootstrap 4",
      "HTML",
      "CSS",
      "AWS",
      "MySQL",
    ],
    github: "https://github.com/lptome/portfolio-website",
    live: "https://storyagora.luistome.net",
  },
  {
    id: 1,
    type: "< Web Application />",
    title: "Oh My Gacha!",
    subtitle:
      "A web tool inspired by lootbox-based game systems that calculates how much money could potentially be needed to chase after a rare item.",
    img: gachatool,
    tech: ["Spring", "Java", "Bootstrap 4", "HTML", "CSS", "Java", "AWS"],
    github: "https://github.com/lptome/oh-my-gacha",
    live: "https://ohmygacha.luistome.net/",
  },
  {
    id: 2,
    type: "< Website />",
    title: "Personal Website",
    subtitle: "The website you are currently using, created with React.",
    img: personalWebsite,
    tech: ["React", "Node.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/lptome/portfolio-website",
  },
  {
    id: 3,
    type: "< Video Game />",
    title: "Shattered",
    subtitle:
      "A First-Person Puzzle Game inspired by Escape Rooms, made with Unity.",
    img: shattered,
    tech: ["C#", "Unity3D", "Blender", "Aseprite"],
    github: "https://github.com/lptome/Shattered",
    live: "https://lptome.itch.io/shattered-escape-room-game",
  },
];
