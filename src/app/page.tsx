import { Discover } from "./components/home/Discover";
import { Testimonials } from "./components/home/Testimonials";
import { Innovative } from "./components/home/Innovative";
import { Properties } from "./components/home/Properties";
import { Simplify } from "./components/home/Simplify";
import { Faq } from "./components/home/Faq";
import { ProjectStart } from "./components/common/ProjectStart";
export default function Home() {
  return (
    <div >
      <Discover />
      <Simplify />
      <Innovative />
      <Properties />
      <Testimonials />
      <Faq />
      <ProjectStart />
    </div>
  );
}
