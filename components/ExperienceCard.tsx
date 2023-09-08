import Image from "next/image"

const img_url = "/Images/dp.jpg";
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <div className="min-w-full justify-center items-center">
      <img src = "./Images/clglogo.svg" alt = "institute_logo" />
    </div>
  );
}

export default ExperienceCard