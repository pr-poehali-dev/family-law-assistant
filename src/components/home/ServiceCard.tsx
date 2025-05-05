
import React from "react";
import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconName }) => {
  return (
    <Card className="hover-scale">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Icon name={iconName} className="text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
