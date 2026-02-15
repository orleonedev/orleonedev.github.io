import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { experiences } from '../data/experience';
import { skillCategories } from '../data/skills';
import { education } from '../data/education';
import { awards } from '../data/awards';
import { aboutHighlightedText, aboutText } from '../data/about';
import { MultilineHighlightedTypography } from './MultilineHighlightedTypography';

const About: React.FC = () => {
  return (
    <div id="about" className="p-8 my-10">
      <h2 className="text-4xl font-bold text-center mb-16">
        About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-4 flex justify-center">
          <img
            alt="Oreste Leone"
            src="/oldPortfolioFiles/assets/img/ProfileSquaredMedium.png"
            className="w-80 h-80 rounded-full object-cover border-4 border-[#D49D3A]/20"
          />
        </div>
        
        <div className="md:col-span-8">
          <Tabs.Root defaultValue="about" className="flex flex-col">
            <Tabs.List className="flex justify-center border-b border-gray-700 mb-6 overflow-x-auto">
              {['About', 'Experience', 'Skills', 'Education', 'Awards'].map((tab) => (
                <Tabs.Trigger
                  key={tab}
                  value={tab.toLowerCase()}
                  className="px-4 py-2 text-gray-400 hover:text-[#D49D3A] data-[state=active]:text-[#D49D3A] data-[state=active]:border-b-2 data-[state=active]:border-[#D49D3A] transition-all whitespace-nowrap"
                >
                  {tab}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <div className="p-6 h-[512px] overflow-y-auto">
              <Tabs.Content value="about">
                <MultilineHighlightedTypography
                  text={aboutText}
                  highlightPhrases={aboutHighlightedText}
                  highlightColor="#D49D3A"
                  className="text-lg text-gray-300 leading-relaxed"
                />
              </Tabs.Content>

              <Tabs.Content value="experience">
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-xl font-semibold text-[#D49D3A]">{exp.role} @ {exp.company}</h3>
                      <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </Tabs.Content>

              <Tabs.Content value="skills">
                <div className="space-y-8">
                  {skillCategories.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-bold text-[#D49D3A] mb-3">{category.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Tabs.Content>

              <Tabs.Content value="education">
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-xl font-semibold text-[#D49D3A]">{edu.role} @ {edu.company}</h3>
                      <p className="text-sm text-gray-400 mb-2">{edu.duration}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </Tabs.Content>

              <Tabs.Content value="awards">
                <div className="space-y-6">
                  {awards.map((award, index) => (
                    <div key={index} className="mb-4">
                      {award.link ? (
                        <h3 className="text-xl font-semibold text-[#D49D3A]">
                          <a href={award.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#D49D3A]/80 transition-colors">
                            {award.title}
                          </a>
                        </h3>
                      ) : (
                        <h3 className="text-xl font-semibold text-gray-200">{award.title}</h3>
                      )}
                      <p className="text-sm text-gray-400">{award.date}</p>
                    </div>
                  ))}
                </div>
              </Tabs.Content>
            </div>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
};

export default About;
