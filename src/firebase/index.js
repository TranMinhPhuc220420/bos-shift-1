import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { config } from "./config";

const firebaseApp = initializeApp(config);
// const analytics = getAnalytics(app);

export default firebaseApp;
// export { analytics }; 