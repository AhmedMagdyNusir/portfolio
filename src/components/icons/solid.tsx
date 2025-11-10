import { FaCheck } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { TiLocationArrow } from "react-icons/ti";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface LightShapeProps {
  className?: string;
  size?: number;
  spin?: boolean;
  rotations: number[];
}

function LightShape({ className = "", size = 20, spin = false, rotations }: LightShapeProps) {
  return (
    <div className={`${className}`}>
      <div
        className={`opacity-25 ${spin ? "animate-spin" : ""}`}
        style={{ animationDuration: "7.5s", height: size, width: size }}
      >
        {rotations.map((rotation, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 h-full w-[1.5px] rounded bg-white"
            style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
          />
        ))}
      </div>
    </div>
  );
}

export function LightPlus({
  className = "",
  size = 20,
  spin = false,
}: {
  className?: string;
  size?: number;
  spin?: boolean;
}) {
  return <LightShape className={className} size={size} spin={spin} rotations={[0, 90]} />;
}

export function LightStar({
  className = "",
  size = 20,
  spin = false,
}: {
  className?: string;
  size?: number;
  spin?: boolean;
}) {
  return <LightShape className={className} size={size} spin={spin} rotations={[0, 45, 90, 135]} />;
}

const solidIcons = {
  Check: FaCheck,
  Download: FiDownload,
  ExternalLink: FiExternalLink,
  LocationArrow: TiLocationArrow,
  Github: FaGithub,
  Linkedin: FaLinkedin,
  LightPlus: LightPlus,
  LightStar: LightStar,
};

export default solidIcons;
