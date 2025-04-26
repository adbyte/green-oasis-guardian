
import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "GreenThumb has transformed how I care for my garden. The reminders ensure I never forget to water my plants!",
    name: "Sarah Johnson",
    title: "Home Gardener",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    quote: "As a professional landscaper, this app helps me track multiple client gardens effortlessly. It's a game-changer!",
    name: "Michael Chen",
    title: "Professional Landscaper",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    quote: "I've tripled my plant collection since using GreenThumb. The care guides are incredibly helpful for a beginner like me.",
    name: "Emily Rodriguez",
    title: "Plant Enthusiast",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => (
  <div className="garden-card p-6 h-full flex flex-col">
    <div className="flex-1">
      <p className="text-garden-brown-dark mb-6 italic">"{testimonial.quote}"</p>
    </div>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-semibold text-garden-brown-dark">{testimonial.name}</h4>
        <p className="text-sm text-garden-brown">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 bg-garden-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-garden-brown-dark mb-4">
            What Our Users Say
          </h2>
          <p className="max-w-2xl mx-auto text-garden-brown">
            Discover how GreenThumb has helped garden enthusiasts manage their plants more effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
