  import flowbite from 'flowbite'; // Asegúrate de que esta sea la forma correcta de importar flowbite

  /** @type {import('tailwindcss').Config} */
  export default {
    
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js','./src/*.{js,ts,jsx,tsx}'],
    theme: {  
      extend: {},
    },
    plugins: [],
    
  };
