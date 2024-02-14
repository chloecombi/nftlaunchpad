import Step from "@/components/Step";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-shrink-0 rounded-lg lg:px-8 pt-10 lg:justify-between">
      <Step stepNumber={1}  sectionTitle="Details" />
      <Step stepNumber={2}  sectionTitle="Phases" />
      <Step stepNumber={3}  sectionTitle="Upload" />
      <Step stepNumber={4}  sectionTitle="Deploy" />
      <Step stepNumber={5}  sectionTitle="Success" />
    </aside>
  );
}