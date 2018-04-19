import assert from 'assert'
import markdownIt from 'markdown-it'
import markdownItXyz from '../dist/index'

const mdi = markdownIt()
mdi.use(markdownItXyz)

assert(mdi.render('# Hello world').trim() === '<h1>Hello world</h1>', '# Hello world')
assert(mdi.render('Hello world').trim() === '<p>Hello world</p>', 'Hello world')

console.log(mdi.render(`\`\`\`xyz
59
AZD11
N     0.00000000     0.00000000     0.00000000
C     0.00000000     0.00000000     1.37708328
H     0.90470564     0.00000000    -0.45265955
C     1.02778731    -0.66478761     2.21167606
N     0.70150464    -0.54205218     3.43515932
N    -0.91032031     0.49925687     2.11771845
C    -0.58357483     0.22303406     3.56201213
\`\`\``))

assert(mdi.render(`\`\`\`xyz
{
  "type": "pie",
  "data": {
    "labels": [
      "Red",
      "Blue",
      "Yellow"
    ],
    "datasets": [
      {
        "data": [
          300,
          50,
          100
        ],
        "backgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        "hoverBackgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }
    ]
  },
  "options": {}
}
\`\`\``).indexOf('class="xyz-block"') > -1)
