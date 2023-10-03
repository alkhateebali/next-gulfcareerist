export interface Search {
  keywords: string;
  location: string;
  page: number;
}

export interface Job {
  salary_min: string;
  locations: string;
  salary_type: string;
  date: string;
  description: string;
  salary_currency_code: string;
  salary: string;
  site: string;
  url: string;
  title: string;
  salary_max: string;
  company: string;
  company_logo: string;
  job_description: string;
}

export const getId = (url: string) => {
    
  const match = url.match(/\/([^/]+)\.html/);

  if (match && match[1]) return match[1];
  else return "Value not found in the URL";
};
export interface FetchJobssResponse {
  jobs: Job[];
}
