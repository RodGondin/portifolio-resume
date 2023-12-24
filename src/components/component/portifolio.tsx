import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Portifolio() {
  return (
    <div key="1" className="w-full bg-[#f0f0f0]">
      <header className="flex h-12 bg-white items-center px-4 border-b border-gray-300 justify-between">
        <div className="flex items-center gap-2 rounded-full">
          <Button className="w-4 h-4 bg-red-500 rounded-full" size="icon" variant="outline" />
          <Button className="w-4 h-4 bg-yellow-500 rounded-full" size="icon" variant="outline" />
          <Button className="w-4 h-4 bg-green-500 rounded-full" size="icon" variant="outline" />
        </div>
        <div className="mx-auto h-full p-2 flex-grow max-w-[500px] flex items-center justify-center">
          <ShieldIcon className="w-4 h-4" />
          <input
            className="ml-1 outline-none flex-grow bg-gray-100 pl-4 rounded-md"
            placeholder="www.myportfolio.com"
            style={{
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              paddingLeft: "25px",
            }}
            type="text"
            disabled
          />
        </div>
        <div className="flex items-center gap-4">
          <Button className="w-4 h-4 border-transparent" size="icon" variant="outline">
            <ShareIcon className="w-4 h-4" />
          </Button>
          <Button className="w-4 h-4 border-transparent" size="icon" variant="outline">
            <PlusIcon className="w-4 h-4" />
          </Button>
          <Button className="w-4 h-4 border-transparent" size="icon" variant="outline">
            <SquareIcon className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <main className="flex h-[calc(100%-3rem)]">
        <nav className="w-[200px] border-r border-gray-300 p-4 lg:block hidden">
          <ul>
            <li>
              <Link className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200" href="#introduction">
                Introduction
              </Link>
            </li>
            <li>
              <Link className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200" href="#career">
                Career
              </Link>
            </li>
            <li>
              <Link className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200" href="#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200" href="#skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200" href="#curriculum">
                Curriculum
              </Link>
            </li>
            <li>
              <Link className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200" href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-8 h-8" size="icon" variant="outline">
                <MenuIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200" href="#introduction">
                  Introduction
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200" href="#career">
                  Career
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200" href="#projects">
                  Projects
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200" href="#skills">
                  Skills
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200" href="#curriculum">
                  Curriculum
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200" href="#contact">
                  Contact
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex-1 p-4 overflow-auto space-y-16">
          <section className="mb-12 p-6 rounded-lg shadow-lg flex flex-col justify-between items-center h-auto bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1473864803180-ca1b3d93c9a0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }} id="introduction">
            <div className="grid grid-cols-[8fr_2fr] gap-4">
              <div className="col-span-full sm:col-span-1">
                <h2 className="text-3xl font-semibold text-black mb-3">Welcome to my portfolio!</h2>
                <p className="text-white lg:text-black text-lg w-[95%] font-semibold lg:text-shadow-custom-white text-shadow-custom-black">
                  Experienced Front-end Developer proficient in JavaScript and React, with 3 years of experience in large-scale projects.
                  <br />
                  Graduated in Information Systems, my passion for web development drives me to create efficient solutions that enhance the user experience.
                  <br />
                  Feel free to browse through my projects and don't hesitate to reach out if you have any questions or if you're interested in working together.
                </p>
              </div>
              <div className="col-span-1 mx-auto hidden sm:flex items-center">
                <Avatar className="h-36 w-36 rounded-full mt-4 ml-[-20px]">
                  <AvatarImage alt="User Avatar" src="https://github.com/rodgondin.png" />
                </Avatar>
              </div>
            </div>
          </section>

          <section className="mb-8" id="career">
            <h2 className="text-2xl font-semibold mb-4">Career</h2>
            <div className="space-y-4 relative pl-8">
              <div
                className="absolute h-full border-l-2 border-gray-300 left-0"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <div>
                <h3 className="font-bold">Nov 2021 - Present</h3>
                <p>Developer - Livelo ✈️</p>
                <p>As a web developer on the travel team, I am responsible for airfare, hotel accommodations, car rentals, and point transfers between partners at <Link className="text-sky-600" href="https://www.livelo.com.br/">Livelo</Link>, the largest rewards program in Brazil. I work to develop and enhance the entire travel flow of the website. My responsibilities include working with legacy code, developing new layouts, realizing code reviews, refining new features, leading daily meetings and ceremonies, as well as being in charge of production deployments, teaching other developers and utilizing pipelines in a highly professional and complex environment. I use technologies such as HTML, LESS, and JavaScript, along with libraries like Knockout.js. Additionally, I primarily operate on an Oracle Commerce Cloud CRM.
                </p>
              </div>
              <div>
                <h3 className="font-bold">Sep 2021 - Nov 2021 · 3 months</h3>
                <p>Junior Developer - Livelo Marketing ✉</p>
                <p>I was involved in email development within <Link className="text-sky-600" href="https://www.livelo.com.br/">Livelo's</Link> marketing team, creating advertisements for the company and its partners using technologies such as HTML, CSS, and Javascript. Additionally, I utilized libraries like GULP.JS to enhance the development process and optimize the performance of emails. Deployment of images and emails on AWS servers was also employed to ensure secure and efficient delivery to recipients.</p>
              </div>
              <div>
                <h3 className="font-bold">Feb 2021 - Aug 2021 · 7 months</h3>
                <p>Junior Developer - SaveLivez Startup 🩸</p>
                <p>Web development of dynamic and responsive pages using the latest technologies such as Javascript, React, Next.js, and Chakra UI in the social project <Link className="text-sky-600" href="https://savelivez.com/en/">SaveLivez</Link>, which combines technology and social engagement to combat blood shortages in Brazil. Through this project, I was able to develop my programming skills and contribute to an important cause simultaneously.</p>
              </div>
              <div>
                <h3 className="font-bold">Nov 2020 - Feb 2021 · 4 months</h3>
                <p>Internship - Front-end at Compass UOL</p>
                <p>I participated in a Internship program/study track at <Link className="text-sky-600" href="https://compass.uol/en/home/">Compass UOL</Link> that offered practical tests and complete projects using the most relevant technologies in the market. Throughout the process, I had the opportunity to apply the knowledge acquired and enhance my skills in technologies such as HTML, Javascript, React, Next.js, Docker, among others.</p>
              </div>
            </div>
          </section>

          <section className="mb-8" id="projects">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <Link href="https://github.com/RodGondin/Pokemon-arena">
                <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Pokemon Arena V1</h3>
                  </CardHeader>
                  <CardContent>
                    <p>Built a pokemon arena using pokeAPI, currently only V1 which contains homepage, pagination, modal details of the selected pokemon and its status 🕹</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://github.com/RodGondin/Move.it_React-Next.js">
                <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Move.it</h3>
                  </CardHeader>
                  <CardContent>
                    <p>A platform for focusing on your main tasks, leveling up XP for completing physical activities, and fostering good habits 💪🏻.</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://github.com/RodGondin/Projeto-Compass-E-commerce">
                <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">NFT E-commerce</h3>
                  </CardHeader>
                  <CardContent>
                    <p>Built an e-commerce platform for the sale of NFTs with integration to Stripe to handle and manage the purchase of products.</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://github.com/RodGondin/Github-Search">
                <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Github Search</h3>
                  </CardHeader>
                  <CardContent>
                    <p>The project main functionality is to search for GitHub users and retrieve their data via the API response.</p>
                  </CardContent>
                </Card>
              </Link>

            </div>
          </section>

          <section className="mb-8" id="skills">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
              <Badge>JavaScript</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>KnockoutJS</Badge>
              <Badge>Less</Badge>
              <Badge>Sass</Badge>
              <Badge>Java</Badge>
              <Badge>Docker</Badge>
              <Badge>Oracle Commerce Cloud</Badge>
              <Badge>Git</Badge>
              <Badge>GitLab</Badge>
              <Badge>Git Bash</Badge>
              <Badge>BitBucket</Badge>
              <Badge>Jenkins</Badge>
              <Badge>Cypress</Badge>
              <Badge>Jest.js</Badge>
            </div>
          </section>

          <section className="mb-8" id="curriculum">
            <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
            <p className="mb-4">
              Download my full curriculum vitae for more detailed information about my career and skills.
            </p>
            <a href="/CV.pdf" download="CV.pdf">
              <Button className="text-xl border-dashed border-2 w-1/2 bg-[#f0f0f0] p-6" variant="outline">
                Download CV
              </Button>
            </a>
          </section>

          <section className="pb-4">
            <h2 className="text-2xl font-semibold mb-4" id="contact">Contact</h2>
            <p>You can reach me at:</p>
            <p>
              Email: gondinrodrigo@gmail.com
            </p>
            <p>
              Phone: +55 48 996089909
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="https://github.com/RodGondin">
                <GithubIcon className="w-6 h-6 hover:text-blue-600" />
              </Link>
              <Link href="https://twitter.com/rodgondin">
                <TwitterIcon className="w-6 h-6 hover:text-blue-400" />
              </Link>
              <Link href="https://www.linkedin.com/in/rodgondin/">
                <LinkedinIcon className="w-6 h-6 hover:text-blue-800" />
              </Link>
              <Link href="https://www.instagram.com/rodgondin">
                <InstagramIcon className="w-6 h-6 hover:text-pink-500" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function ShieldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}


function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

function ShareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}

function SquareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}