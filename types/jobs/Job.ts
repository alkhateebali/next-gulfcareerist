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
export interface FetchJobsResponse {
  jobs: Job[];
}
export const GetJobSlug = (url: String) => {
  const start = url.indexOf("job-") + 4;
  const end1 = url.indexOf("/", start);
  const end2 = url.indexOf(".html", end1);
  const id = url.slice(start, end1);
  const page = url.slice(end1 + 1, end2 + 5);
  return { id, page };
};

export const SetJobSlug = (id: string, page: string) => {
  const affid = process.env.AFF_ID;
  const url = `https://jobviewtrack.com/en-gb/job-${id}/${page}?affid=${affid}`;
  return url;
};
