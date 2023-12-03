/** @type {import('tailwindcss').Config} */
export default {
    content: [ './src/**/*.{html,js,svelte,ts}' ],
    theme: {
        extend: {
            fontFamily: {
                pixelSans: [ 'Pixel Sans Serif' ],
                alagard: [ 'alagard' ]
            },
            colors: {
                nearby: {
                    '1': 'cyan',
                    '2': 'lime',
                    '3': 'hotpink',
                    '4': 'dodgerblue',
                    '5': 'red',
                    '6': 'teal',
                    '7': 'white',
                    '8': 'black'
                }
            }
        }
    },
    plugins: [],
}

