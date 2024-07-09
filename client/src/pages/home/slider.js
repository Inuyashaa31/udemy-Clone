import React from 'react';

function Slider() {
  return (
    <div className="h-[60vh] flex flex-col gap-10 relative">
      <section className="slider">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >
        </div>
        <div className="flex flex-col absolute top-10 left-20 bg-white p-6 m-4 shadow-2xl sm:top-72 sm:left-5 sm:shadow-white sm:bg-cover z-10">
          <h1 className="gap-5 font-container text-4xl font-bold">Learning that gets you</h1>
          <p className="text-sm">Skills for your present (and your future).</p>
          <p className="text-sm">Get started with us.</p>
        </div>
      </section>
    </div>
  );
}

export default Slider;

