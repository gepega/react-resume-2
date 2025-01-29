import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EducationSection from './education';

const mockEducation = [
  {
    institute: "University of Example",
    degree: "Bachelor of Science",
    subDegree: "Computer Science",
    graduationDate: "May 2023",
    overallGpa: "3.8",
    majorGpa: "4.0",
    coursework: ["Data Structures", "Algorithms", "Artificial Intelligence"]
  },
  {
    institute: "Example High School",
    degree: "High School Diploma",
    subDegree: "",
    graduationDate: "June 2019",
    overallGpa: "3.9",
    majorGpa: "",
    coursework: ["Mathematics", "Physics", "Chemistry"]
  }
];

test('renders education information correctly', () => {
  render(<EducationSection education={mockEducation} />);

  // Verifica que los nombres de las instituciones estén en el documento
  expect(screen.getByText('University of Example')).toBeInTheDocument();
  expect(screen.getByText('Example High School')).toBeInTheDocument();

  // Verifica que los grados y subgrados estén en el documento
  expect(screen.getByText('Bachelor of Science')).toBeInTheDocument();
  expect(screen.getByText('Computer Science')).toBeInTheDocument();
  expect(screen.getByText('High School Diploma')).toBeInTheDocument();

  // Verifica que las fechas de graduación estén en el documento
  expect(screen.getByText('May 2023')).toBeInTheDocument();
  expect(screen.getByText('June 2019')).toBeInTheDocument();

  // Verifica que las GPA estén en el documento
  expect(screen.getByText('GPA: 3.8')).toBeInTheDocument();
  expect(screen.getByText('Major GPA: 4.0')).toBeInTheDocument();
  expect(screen.getByText('GPA: 3.9')).toBeInTheDocument();


});
