import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExperienceSection from './experience';

const mockExperiences = [
  {
    company: "Tech Corp",
    jobTitle: "Software Engineer",
    startDate: "January 2020",
    endDate: "Present",
    location: "San Francisco, CA",
    bullets: [
      "Developed new features for the main product",
      "Collaborated with cross-functional teams",
      "Implemented best practices for code quality"
    ]
  },
  {
    company: "Web Solutions",
    jobTitle: "Frontend Developer",
    startDate: "June 2017",
    endDate: "December 2019",
    location: "New York, NY",
    bullets: [
      "Designed and implemented user interfaces",
      "Worked closely with the UX/UI team",
      "Optimized applications for maximum speed"
    ]
  }
];

test('renders experience information correctly', () => {
  render(<ExperienceSection experiences={mockExperiences} />);

  // Verifica que los nombres de las compañías estén en el documento
  expect(screen.getByText('Tech Corp')).toBeInTheDocument();
  expect(screen.getByText('Web Solutions')).toBeInTheDocument();

  // Verifica que los títulos de trabajo estén en el documento
  expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  expect(screen.getByText('Frontend Developer')).toBeInTheDocument();

  // Verifica que las fechas de trabajo estén en el documento
  expect(screen.getByText('January 2020 — Present')).toBeInTheDocument();
  expect(screen.getByText('June 2017 — December 2019')).toBeInTheDocument();

  // Verifica que las ubicaciones estén en el documento
  expect(screen.getByText('San Francisco, CA')).toBeInTheDocument();
  expect(screen.getByText('New York, NY')).toBeInTheDocument();

  // Verifica que los bullets de experiencia estén en el documento
  expect(screen.getByText('Developed new features for the main product')).toBeInTheDocument();
  expect(screen.getByText('Collaborated with cross-functional teams')).toBeInTheDocument();
  expect(screen.getByText('Implemented best practices for code quality')).toBeInTheDocument();
  expect(screen.getByText('Designed and implemented user interfaces')).toBeInTheDocument();
  expect(screen.getByText('Worked closely with the UX/UI team')).toBeInTheDocument();
  expect(screen.getByText('Optimized applications for maximum speed')).toBeInTheDocument();
});
