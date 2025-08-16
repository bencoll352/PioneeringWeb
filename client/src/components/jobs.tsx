import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, PoundSterling, Clock } from "lucide-react";
import type { Job } from "@shared/schema";

export default function Jobs() {
  const { data: jobs, isLoading } = useQuery<Job[]>({
    queryKey: ["/api/jobs"],
  });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "permanent":
        return "bg-brand-orange";
      case "contract":
        return "bg-green-500";
      case "executive":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const formatPostedDate = (date: Date | string) => {
    const now = new Date();
    const postedDate = new Date(date);
    const diffTime = Math.abs(now.getTime() - postedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Posted 1 day ago";
    if (diffDays < 7) return `Posted ${diffDays} days ago`;
    if (diffDays < 14) return "Posted 1 week ago";
    return `Posted ${Math.ceil(diffDays / 7)} weeks ago`;
  };

  if (isLoading) {
    return (
      <section id="jobs" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-gray mb-4">Current Opportunities</h2>
            <p className="text-xl text-brand-gray">Exclusive roles with leading builders merchants</p>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-2/3"></div>
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="jobs" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Current Opportunities</h2>
          <p className="text-xl text-brand-gray">Exclusive roles with leading builders merchants</p>
        </div>

        <div className="space-y-6">
          {jobs?.map((job) => (
            <div
              key={job.id}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-brand-orange transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-xl font-bold text-dark-gray">{job.title}</h3>
                    <Badge className={`${getTypeColor(job.type)} text-white`}>
                      {job.type}
                    </Badge>
                  </div>
                  <p className="text-brand-gray mb-2">{job.company}</p>
                  <p className="text-brand-gray text-sm mb-4">{job.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-brand-gray">
                    <span className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <PoundSterling className="mr-1 h-4 w-4" />
                      {job.salary}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {formatPostedDate(job.postedAt)}
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                  <Button
                    onClick={scrollToContact}
                    className="bg-brand-orange hover:bg-red-600 text-white"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={scrollToContact}
            className="bg-brand-orange hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold"
            size="lg"
          >
            View All Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
