import Container from "./Container";
import SectionHeader from "./SectionHeader";
import certificateImg from "../assets/certificate-img.png";

const AchievementsSection = () => {
  return (
    <Container>
      <SectionHeader title="Achievements" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 mt-10">
        <div className="relative group overflow-hidden rounded-xl shadow-xl border border-gray-600 hover:shadow-black transition-all duration-500 hover:scale-105 cursor-pointer w-full">
          <a href={certificateImg} target="_blank" >
            <img
              src={certificateImg}
              alt="Certificate"
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>

        <p className="text-center text-gray-300 text-sm">
          Click to view full certificate in a new tab.
        </p>
      </div>
    </Container>
  );
};

export default AchievementsSection;
