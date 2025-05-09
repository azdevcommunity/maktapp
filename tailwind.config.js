/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			'green': '#34C759',
			'warning': {
				'200': '#FEDF89',
				'100': '#FEF0C7',
				'50': '#FFF6DC',
			},
			'error': {
				'500': '#F04438',
				'100': '#FEE4E2',
			},
			'blue': {
				'100': '#B9DAFF',
				'50': '#E1F1FF',
			},
  			'brand': {
  				'900': '#044342',
  				'800': '#065C5A',
  				'700': '#087571',
  				'600': '#098D88',
  				'500': '#0AA89E',
  				'400': '#47C2B7',
  				'300': '#8DDAD5',
  				'200': '#B3E7E3',
  				'100': '#D9F3F1'
  			},
			"success": {
				'500': '#17B26A',
				'100': '#DCFAE6',
			},
			"chart-dot": {
				"green": "#00BC55",
				"red": "#FF3A3A"
			},
  			'gray': {
  				'900': '#161B26',
				'800': '#1F242F',
  				'700': '#333741',
				'200': '#E7E8EA',
				'100': '#F3F4F6',
				'50': '#F9FAFB'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}