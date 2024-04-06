// firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

/* Router & Navigation*/
import { RouterProvider} from "react-router-dom"
import router from "./router.jsx"

// tell react app we're lazy loading router components
import { Suspense } from "react";

// config firebase
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_API_KEY,
//   authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_APP_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_APP_ID,
//   measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
// }

// // init firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {

  return (
    <Suspense fallback={<p>Loading...</p>}>  
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
