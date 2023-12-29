export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_OPENAI_Authorization
    }
  };

  export const SUPPORTED_LANG = {
    en:{
      lang: "English",
      Search: "Search",
      placeholder:'What would want to watch today?'
    },
    Hindi:{
      lang: "Hindi",
      Search: "खोज",
      placeholder: "आज क्या देखना चाहेंगे?"
    },
    Spanish:{
      lang: "Spanish",
      Search: "Buscar",
      placeholder: "¿Qué querrías ver hoy?"
    },
  }

  export const languageKeys = [
    {identifier:'en', name: 'English'},
    {identifier:'Hindi', name: 'Hindi'},
    {identifier:'Spanish', name: 'Spanish'},
  ]

  export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY