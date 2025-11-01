'use client';

import { useResumeStore } from '@/lib/store';
import { Mail, Phone, MapPin, Linkedin, Globe, Briefcase, GraduationCap, Award } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function ResumePreview() {
  const { resume } = useResumeStore();

  if (!resume) {
    return (
      <div className="h-full flex items-center justify-center bg-card rounded-xl shadow-lg border border-border">
        <p className="text-muted-foreground">No resume loaded</p>
      </div>
    );
  }

  const { personalInfo, summary, experience, education, skills, certifications } = resume;

  return (
    <div className="h-full overflow-y-auto bg-white rounded-xl shadow-lg border border-[var(--border)]">
      <div className="max-w-4xl mx-auto p-8 md:p-12" id="resume-content">
        {/* Header */}
        <div className="mb-8 pb-6 border-b-2 border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {personalInfo.email && (
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                {personalInfo.email}
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                {personalInfo.phone}
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {personalInfo.location}
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center">
                <Linkedin className="w-4 h-4 mr-1" />
                <a href={personalInfo.linkedin} className="text-blue-600 hover:underline">
                  LinkedIn
                </a>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                <a href={personalInfo.website} className="text-blue-600 hover:underline">
                  Website
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {summary && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <div className="w-1 h-6 bg-blue-600 mr-3"></div>
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-1 h-6 bg-blue-600 mr-3"></div>
              <Briefcase className="w-5 h-5 mr-2" />
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l-2 border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                      <p className="text-gray-700 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-1 h-6 bg-blue-600 mr-3"></div>
              <GraduationCap className="w-5 h-5 mr-2" />
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-4 border-l-2 border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                      <p className="text-gray-700">{edu.institution}</p>
                      {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                    </div>
                    <p className="text-sm text-gray-600">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <div className="w-1 h-6 bg-blue-600 mr-3"></div>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <div className="w-1 h-6 bg-blue-600 mr-3"></div>
              <Award className="w-5 h-5 mr-2" />
              Certifications
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
