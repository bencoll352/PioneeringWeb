import { 
  jobs, 
  contactInquiries, 
  testimonials,
  type Job, 
  type InsertJob,
  type ContactInquiry,
  type InsertContactInquiry,
  type Testimonial,
  type InsertTestimonial
} from "@shared/schema";

export interface IStorage {
  // Jobs
  getJobs(): Promise<Job[]>;
  getActiveJobs(): Promise<Job[]>;
  getJob(id: number): Promise<Job | undefined>;
  createJob(job: InsertJob): Promise<Job>;
  
  // Contact Inquiries
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  
  // Testimonials
  getActiveTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private jobs: Map<number, Job>;
  private contactInquiries: Map<number, ContactInquiry>;
  private testimonials: Map<number, Testimonial>;
  private currentJobId: number;
  private currentInquiryId: number;
  private currentTestimonialId: number;

  constructor() {
    this.jobs = new Map();
    this.contactInquiries = new Map();
    this.testimonials = new Map();
    this.currentJobId = 1;
    this.currentInquiryId = 1;
    this.currentTestimonialId = 1;
    this.seedData();
  }

  private seedData() {
    // Seed testimonials
    const testimonialData: InsertTestimonial[] = [
      {
        name: "Sarah Mitchell",
        role: "Operations Director",
        company: "Regional Builders Merchant",
        content: "Pioneering Recruitment found us the perfect Branch Manager within 3 weeks. Their understanding of our industry and candidate quality is exceptional.",
        rating: 5,
        isActive: true
      },
      {
        name: "James Thompson",
        role: "Managing Director",
        company: "Independent Timber Merchant",
        content: "We've used PR for multiple senior hires. Their sector knowledge and professional approach makes them our go-to recruitment partner.",
        rating: 5,
        isActive: true
      },
      {
        name: "Emma Richards",
        role: "HR Director",
        company: "National Builders Merchant Chain",
        content: "Outstanding service from initial brief to final placement. They truly understand the challenges facing our industry.",
        rating: 5,
        isActive: true
      }
    ];

    testimonialData.forEach(t => this.createTestimonial(t));

    // Seed jobs
    const jobData: InsertJob[] = [
      {
        title: "Operations Director",
        company: "Leading Timber & Building Supplies Merchant - West Midlands",
        location: "Birmingham",
        salary: "£70,000 - £85,000",
        type: "Permanent",
        description: "Exciting opportunity to lead operations for a well-established regional merchant. Experience in timber/building materials essential.",
        requirements: "Proven operations management experience in builders merchant sector, P&L responsibility, team leadership skills",
        benefits: "Company car, private healthcare, pension scheme, performance bonus",
        isActive: true
      },
      {
        title: "Branch Manager",
        company: "National Plumbing & Heating Supplies - Multiple Locations",
        location: "London & South East",
        salary: "£45,000 - £55,000",
        type: "Permanent",
        description: "Manage high-performing branch teams. Strong trade counter and commercial sales background required.",
        requirements: "Branch management experience, trade counter sales, customer service excellence, commercial awareness",
        benefits: "Competitive salary, bonus scheme, career progression opportunities",
        isActive: true
      },
      {
        title: "Sales Director",
        company: "Growing Independent Builders Merchant - Yorkshire",
        location: "Leeds",
        salary: "£65,000 - £80,000 + bonus",
        type: "Executive",
        description: "Lead sales strategy and team development. Experience with contractor accounts and trade customers essential.",
        requirements: "Senior sales management experience, builders merchant background, strategic planning skills",
        benefits: "Excellent package including equity participation, company car, private healthcare",
        isActive: true
      }
    ];

    jobData.forEach(j => this.createJob(j));
  }

  async getJobs(): Promise<Job[]> {
    return Array.from(this.jobs.values());
  }

  async getActiveJobs(): Promise<Job[]> {
    return Array.from(this.jobs.values()).filter(job => job.isActive);
  }

  async getJob(id: number): Promise<Job | undefined> {
    return this.jobs.get(id);
  }

  async createJob(insertJob: InsertJob): Promise<Job> {
    const id = this.currentJobId++;
    const job: Job = { 
      ...insertJob, 
      id, 
      postedAt: new Date(),
      benefits: insertJob.benefits || null,
      isActive: insertJob.isActive ?? true
    };
    this.jobs.set(id, job);
    return job;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentInquiryId++;
    const inquiry: ContactInquiry = { 
      ...insertInquiry, 
      id, 
      createdAt: new Date(),
      company: insertInquiry.company || null,
      phone: insertInquiry.phone || null
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async getActiveTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(t => t.isActive);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      isActive: insertTestimonial.isActive ?? true,
      rating: insertTestimonial.rating ?? 5
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
