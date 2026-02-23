import Home from './components/home.jsx'
import './index.css'

import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: import.meta.env.VITE_VOICEFLOW_PROJECT_ID },
        url: "wss://general-runtime.voiceflow.com",
        versionID: "production"
      });

      console.log(import.meta.env.VITE_VOICEFLOW_PROJECT_ID);
    };

    document.body.appendChild(script);
  }, []);

  return <div><Home /></div>;
}

export default App;
