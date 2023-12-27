import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-CWFK9LPJWP');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};