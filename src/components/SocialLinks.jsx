import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/robson-muniz", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/robsonmuniz/", label: "LinkedIn" },
    { icon: <FaXTwitter />, href: "https://x.com/WebDevMadeEasy", label: "X" }
];

const SocialLinks = () => (
    <div className="flex justify-center gap-6 mt-10">
        {socialLinks.map(link => (
            <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors text-slate-400 text-2xl"
            >
                {link.icon}
            </a>
        ))}
    </div>
);

export default SocialLinks;
