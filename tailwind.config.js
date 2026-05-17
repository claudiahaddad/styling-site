/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			warm: {
  				50: '#FAF7F2',
  				100: '#F3EDE4',
  				200: '#E8DFD2',
  				300: '#D4C7B5',
  				400: '#B8A68E',
  				500: '#9C8A72',
  				600: '#7A6B58',
  				700: '#584D3E',
  				800: '#3D352C',
  				900: '#2A241E',
  				950: '#1C1814',
  			}
  		},
  		fontFamily: {
  			sans: ['Inter', 'system-ui', 'sans-serif'],
  			serif: ['Cormorant Garamond', 'Georgia', 'serif'],
  		}
  	}
  },
  plugins: [import("tailwindcss-animate")],
}

