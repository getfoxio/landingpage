/// <reference types="react" />
export interface LandingPageProps {
    username: any;
    apiKey: any;
    apiEndpoint: string;
}
declare const LandingPage: ({ username, apiKey, apiEndpoint }: LandingPageProps) => JSX.Element;
export default LandingPage;
