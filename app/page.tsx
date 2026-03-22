"use client";

import { content } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ArrowRight,
  Briefcase,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const {
    person,
    hero,
    about,
    skills,
    skillGroups,
    education,
    experience,
    projects,
    certifications,
    contact,
  } = content;

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081120]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="group">
            <div className="text-xl font-semibold tracking-wide text-white">
              {person.name}
            </div>
            <div className="text-xs text-slate-400 transition group-hover:text-slate-300">
              Digital Portfolio
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="rounded-full bg-violet-600 px-5 hover:bg-violet-700">
              <a href="#contact">Let&apos;s Connect</a>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="rounded-xl border border-white/10 p-2 text-slate-200 transition hover:bg-white/10">
                  <Menu size={20} />
                </button>
              </SheetTrigger>
              <SheetContent className="border-white/10 bg-[#0b1326] text-white">
                <div className="mt-10 flex flex-col gap-5">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-base text-slate-200 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.18),transparent_22%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.12),transparent_20%),radial-gradient(circle_at_70%_70%,rgba(124,58,237,0.08),transparent_24%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <Badge className="mb-6 rounded-full border border-violet-400/20 bg-violet-500/15 px-4 py-1 text-violet-200 hover:bg-violet-500/15">
              <Sparkles className="mr-2 h-4 w-4" />
              Open to internship opportunities
            </Badge>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              {hero.greeting}
            </h1>

            <p className="mt-5 max-w-3xl text-lg font-medium text-violet-300 md:text-2xl">
              {person.title}
            </p>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild className="rounded-full bg-violet-600 px-6 hover:bg-violet-700">
                <a href="#contact">
                  {hero.primaryButton}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-slate-500 bg-transparent px-6 text-white hover:bg-white/10"
              >
                <a href={person.resume} target="_blank" rel="noreferrer">
                  {hero.secondaryButton}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-slate-500 bg-transparent px-6 text-white hover:bg-white/10"
              >
                <a href={person.resume} download="Kapil_Poudel_Resume.pdf">
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>{person.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>{person.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{person.location}</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/3 p-3 text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={person.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/3 p-3 text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-[28px] border border-white/10 bg-white/3 p-4 shadow-2xl shadow-violet-950/20">
              <div className="rounded-3xl border border-white/10 bg-[#0c1630] p-6 md:p-8">
                <div className="mb-5 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="grid gap-5">
                  <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
                    <p className="text-sm text-slate-400">Profile snapshot</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      Master&apos;s IT student with growing strengths in data and AI
                    </h3>
                    <p className="mt-3 leading-7 text-slate-300">
                      Building practical skills in analytics, reporting, Python,
                      SQL, and machine learning through academic work,
                      certifications, and real client project exposure.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-violet-500/15 to-transparent p-5">
                      <p className="text-sm text-slate-400">Primary strengths</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-white/10 text-white">
                          Python
                        </Badge>
                        <Badge variant="secondary" className="bg-white/10 text-white">
                          Excel
                        </Badge>
                        <Badge variant="secondary" className="bg-white/10 text-white">
                          SQL
                        </Badge>
                        <Badge variant="secondary" className="bg-white/10 text-white">
                          Power BI
                        </Badge>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-blue-500/15 to-transparent p-5">
                      <p className="text-sm text-slate-400">Career direction</p>
                      <p className="mt-3 leading-7 text-slate-200">
                        Data Analyst Intern,
                        <br />
                        Machine Learning Intern,
                        <br />
                        AI Engineer Intern
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
                    <p className="text-sm text-slate-400">Quick highlights</p>
                    <div className="mt-3 grid gap-3 text-slate-200 sm:grid-cols-2">
                      <div className="rounded-xl bg-white/3 p-3">
                        UniSC Master&apos;s student
                      </div>
                      <div className="rounded-xl bg-white/3 p-3">
                        Sunshine Coast Council capstone exposure
                      </div>
                      <div className="rounded-xl bg-white/3 p-3">
                        Microsoft certified
                      </div>
                      <div className="rounded-xl bg-white/3 p-3">
                        Open to internships
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
              About
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">{about.title}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {about.description}
            </p>
          </div>

          <div className="grid gap-4">
            {about.highlights.map((item) => (
              <Card
                key={item}
                className="rounded-3xl border-white/10 bg-white/3 transition hover:border-violet-400/30 hover:bg-white/5"
              >
                <CardContent className="p-6 text-slate-200">{item}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
          Skills
        </p>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">Proficiency & Tools</h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/3 p-6 md:p-8">
            <div className="space-y-7">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-100 md:text-base">
                      {skill.name}
                    </span>
                    <span className="text-sm text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10">
                    <div
                      className="h-3 rounded-full bg-linear-to-r from-violet-400 to-blue-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <Card
                key={group.title}
                className="rounded-3xl border-white/10 bg-white/3 transition hover:border-blue-400/20 hover:bg-white/5"
              >
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="bg-white/10 text-slate-100"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
          Education
        </p>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">Academic Background</h2>

        <div className="mt-12 space-y-5">
          {education.map((item) => (
            <Card
              key={item.institution}
              className="rounded-3xl border-white/10 bg-white/3"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="rounded-2xl bg-violet-500/15 p-3">
                    <GraduationCap className="text-violet-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{item.institution}</h3>
                    <p className="mt-1 text-lg text-slate-200">{item.degree}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.period}</p>
                    <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
          Experience
        </p>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">Work & Project Experience</h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {experience.map((item) => (
            <Card
              key={`${item.company}-${item.role}`}
              className="rounded-3xl border-white/10 bg-white/3 transition hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/5"
            >
              <CardContent className="p-6">
                <div className="mb-5 inline-flex rounded-2xl bg-violet-500/15 p-3">
                  <Briefcase className="text-violet-300" />
                </div>
                <h3 className="text-xl font-semibold leading-snug">{item.role}</h3>
                <p className="mt-2 text-slate-200">{item.company}</p>
                <p className="mt-2 text-sm text-slate-400">{item.period}</p>
                <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
          Projects
        </p>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">Selected Work</h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="rounded-3xl border-white/10 bg-white/3 transition hover:border-blue-400/20 hover:bg-white/5"
            >
              <CardContent className="p-6 md:p-8">
                <div className="rounded-2xl border border-white/10 bg-[#0d1730] p-5">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="bg-white/10 text-slate-100"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="mt-6 inline-flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200"
                  >
                    View project <ExternalLink size={16} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
          Certifications
        </p>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
          Achievements & Certifications
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item) => (
            <Card
              key={item.title}
              className="rounded-3xl border-white/10 bg-white/3 transition hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/5"
            >
              <CardContent className="p-6">
                <div className="mb-5 inline-flex rounded-2xl bg-blue-500/15 px-3 py-2 text-sm font-medium text-blue-200">
                  Credential
                </div>
                <h3 className="text-xl font-semibold leading-snug">{item.title}</h3>
                <p className="mt-4 text-slate-300">{item.issuer}</p>
                <p className="mt-2 text-sm text-slate-400">{item.date}</p>
                <a
                  href={item.link}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200"
                >
                  View credential <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <Card className="overflow-hidden rounded-4xl border-white/10 bg-linear-to-r from-violet-600/20 via-blue-500/10 to-violet-500/20">
          <CardContent className="p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-violet-200">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                  {contact.title}
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                  {contact.description}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/10 p-5">
                <p className="text-sm text-slate-300">Availability</p>
                <p className="mt-2 text-lg font-medium text-white">
                  {contact.availability}
                </p>
              </div>
            </div>

            <Separator className="my-8 bg-white/10" />

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3 text-slate-200">
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  {person.email}
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span>{" "}
                  {person.phone}
                </p>
                <p>
                  <span className="font-semibold text-white">Location:</span>{" "}
                  {person.location}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 md:justify-end">
                <Button asChild className="rounded-full bg-violet-600 px-6 hover:bg-violet-700">
                  <a href={`mailto:${person.email}`}>Email Me</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-slate-500 bg-transparent px-6 text-white hover:bg-white/10"
                >
                  <a href={person.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-slate-500 bg-transparent px-6 text-white hover:bg-white/10"
                >
                  <a href={person.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}