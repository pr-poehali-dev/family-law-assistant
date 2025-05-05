
import React from "react";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  text: string;
  author: string;
  stars?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, stars = 5 }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          {[...Array(stars)].map((_, i) => (
            <Icon key={i} name="Star" className="text-yellow-400" />
          ))}
        </div>
        <p className="italic mb-4">{text}</p>
        <div className="font-medium">{author}</div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
