import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import {
  SiBootstrap,
  SiCss3,
  SiLaravel,
  SiNextdotjs,
  SiPhp,
  SiTypescript,
} from "react-icons/si";

const ProjectCard = () => {
  return (
    <>
      <Link href={``}>
        <Card className="rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md relative cursor-pointer border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%] ">
          <div className="overflow-hidden">
            <Image
              src="/portfolio.png"
              width={500}
              height={200}
              alt=""
              className="h-52 rounded-t-xl object-cover md:w-[100%]"
            />
          </div>
          <div className="space-y-2 p-5">
            <div className="font-sora cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:hover:text-teal-400 lg:hover:text-teal-800">
              Portfolio
            </div>
            <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400">
              Personal websites, portfolios and blogs built with Next Js, CSS
              and TypeScript
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <SiNextdotjs size={27} />
              <SiCss3 size={27} className="text-blue-500" />
              <SiTypescript size={27} className="text-blue-400" />
            </div>
          </div>
        </Card>
      </Link>
      <Link href={``}>
        <Card className="rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md relative cursor-pointer border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%] ">
          <div className="overflow-hidden">
            <Image
              src="/javaonetop.png"
              width={500}
              height={200}
              alt=""
              className="duration-700 ease-in-out scale-100 blur-0 grayscale-0 h-52 rounded-t-xl object-cover object-left"
            />
          </div>
          <div className="space-y-2 p-5">
            <div className="font-sora cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:hover:text-teal-400 lg:hover:text-teal-800">
              Football School
            </div>
            <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400">
              JavaOneTop football school website to register online and view
              detailed information about the JavaOneTop football school created
              with PHP, Bootstrap
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <SiPhp size={27} className="text-blue-500" />
              <SiBootstrap size={27} className="text-purple-500" />
            </div>
          </div>
        </Card>
      </Link>
      <Link href={``}>
        <Card className="rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md relative cursor-pointer border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%] ">
          <div className="overflow-hidden">
            <Image
              src="/apkasir.png"
              width={400}
              height={200}
              alt=""
              className="duration-700 ease-in-out scale-100 blur-0 grayscale-0 h-52 rounded-t-xl object-cover object-left"
            />
          </div>
          <div className="space-y-2 p-5">
            <div className="font-sora cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:hover:text-teal-400 lg:hover:text-teal-800">
              Cashier Application
            </div>
            <p className="text-[15px] leading-relaxed text-neutral-400">
              The school's final result of Ujikom's cashier web application was
              made with Laravel and Bootstrap
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <SiLaravel size={27} className="text-red-500" />
              <SiBootstrap size={27} className="text-purple-500" />
            </div>
          </div>
        </Card>
      </Link>
      <Link href={``}>
        <Card className="rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md relative cursor-pointer border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%] ">
          <div className="overflow-hidden">
            <Image
              src="/spotify-api.png"
              width={400}
              height={200}
              alt=""
              className="duration-700 ease-in-out scale-100 blur-0 grayscale-0 h-52 rounded-t-xl object-cover object-left"
            />
          </div>
          <div className="space-y-2 p-5">
            <div className="font-sora cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:hover:text-teal-400 lg:hover:text-teal-800">
              Spotify API
            </div>
            <p className="text-[15px] leading-relaxed text-neutral-400">
              Spotify API website built with Next Js, TailwindCSS, and Next Auth
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <SiNextdotjs size={27} />
              <SiTypescript size={27} className="text-blue-400" />
            </div>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default ProjectCard;
