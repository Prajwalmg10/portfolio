import React from 'react';

const Education = () => {
  return (
    <section id="education" className="min-h-screen py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Education</h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Bachelor of Engineering in MechanicalEngineering</h3>
            <h4 className="text-sm text-muted-foreground">Malnad College of Engineering, Hassan</h4>
            <p className="text-xs text-muted-foreground mt-1">August 2018 - August 2022</p>
          </div>
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Intermediate</h3>
            <h4 className="text-sm text-muted-foreground">Ambika Pre-University College, Puttur</h4>
            <p className="text-xs text-muted-foreground mt-1">June 2016 - April 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;