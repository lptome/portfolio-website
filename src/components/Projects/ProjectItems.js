import shattered from "../../assets/images/Shattered.png";
import personalWebsite from "../../assets/images/PersonalWebsite.png";
import ohmygacha from "../../assets/images/ohmygacha.png";
import storyagora from "../../assets/images/storyagora.png";

export const ProjectItems = [
  {
    id: 0,
    title: "Story Agora",
    subtitle:
      "A website where users can read and share their own short stories.",
    img: storyagora,
    tech: ["Spring Boot", "Bootstrap 4", "HTML", "CSS", "AWS", "MySQL"],
    github: "https://github.com/lptome/portfolio-website",
    live: "https://storyagora.luistome.net",
  },
  {
    id: 1,
    title: "Oh My Gacha!",
    subtitle:
      "A web tool inspired by lootbox-based game systems that calculates how much money could potentially be needed to chase after a rare item.",
    img: ohmygacha,
    tech: ["Spring Boot", "Bootstrap 4", "HTML", "CSS", "Java", "AWS"],
    github: "https://github.com/lptome/oh-my-gacha",
    live: "https://ohmygacha.luistome.net/",
  },
  {
    id: 2,
    title: "Personal Website",
    subtitle: "The website you are currently using, created with React.",
    img: personalWebsite,
    tech: ["React", "Node.js", "HTML", "CSS", "JavaScript"],
    live: "https://luistome.net/",
  },
  {
    id: 3,
    title: "Shattered",
    subtitle:
      "A First-Person Escape Room Game developed as part of my final year University Project.",
    img: shattered,
    tech: ["C#", "Unity3D", "Blender", "Aseprite"],
    github: "https://github.com/lptome/Shattered",
    live: "https://lptome.itch.io/shattered-escape-room-game",
  },
];
