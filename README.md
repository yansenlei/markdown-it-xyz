# markdown-it-xyz

3dmol.js plugin for markdown-it.


## Installation

```
npm install markdown-it-xyz
```

## Demo
![png](https://i.loli.net/2018/12/14/5c130dbf94250.png)

## Usage

```js
import markdownIt from 'markdown-it'
import markdownItXyz from 'markdown-it-xyz'
const mdi = markdownIt()
mdi.use(markdownItXyz)
mdi.render(`\`\`\`xyz
59
AZD11
N     0.00000000     0.00000000     0.00000000
C     0.00000000     0.00000000     1.37708328
H     0.90470564     0.00000000    -0.45265955
C     1.02778731    -0.66478761     2.21167606
N     0.70150464    -0.54205218     3.43515932
N    -0.91032031     0.49925687     2.11771845
C    -0.58357483     0.22303406     3.56201213
C    -1.73550346    -0.53481147     4.31611748
C    -2.46419706    -1.54401708     3.40993584
C    -1.15143444    -1.27840063     5.54722586
C    -2.63688455     0.65620655     4.77924715
C    -0.46122775     1.52872246     4.31836532
C    -2.19816027    -2.12305468     6.29325786
C    -3.50911906    -2.38007870     4.16395470
C    -1.65955810     1.78895245     4.98802786
C    -2.89582865    -3.11661883     5.35368493
C     0.60214403     2.41979722     4.35427490
C    -1.79766601     2.97158932     5.71218525
C     0.47692313     3.61402240     5.08573782
C    -0.73302593     3.87330022     5.75627235
C     2.25300750    -1.37414503     1.72450138
H    -2.93300236    -1.01629720     2.57398263
H    -1.71603973    -2.21913814     2.96984229
H    -0.33835747    -1.92668788     5.20349351
H    -0.69178558    -0.56109395     6.23752462
H    -3.21817024     0.42583255     5.67804960
H    -3.35511613     0.91345409     3.98849818
H    -4.32001408    -1.74005008     4.53752226
H    -1.70435840    -2.65102926     7.11830925
H    -2.97175067    -1.49031811     6.74804365
H    -3.97233973    -3.10809625     3.48771348
H    -2.14674516    -3.83902748     4.97934404
H     1.51858876     2.20328381     3.81365464
H    -2.71637419     3.19022203     6.25127344
H    -0.82717818     4.78019328     6.34756100
H     2.91410752    -0.68951887     1.17609502
H     1.98507338    -2.18587571     1.03661758
H     2.80698266    -1.78896074     2.56895478
H    -0.66224344     0.64377643    -0.41606976
C     1.60268982     4.57755790     5.15289560
C     1.39703920     5.96088578     5.11316182
C     2.93381629     4.13724722     5.26111529
N     3.99472454     4.94896652     5.31398425
C     2.49192588     6.83677368     5.17590250
C     3.77550782     6.26333895     5.27063572
H     0.39452627     6.36516725     5.01142203
H     3.14575989     3.07157250     5.32678458
H     4.65080342     6.90828498     5.31196373
C     2.32460068     8.25354991     5.13122974
C     2.19217340     9.45800389     5.09394053
C     2.03330102    10.90783766     5.04939051
H     2.93821948    11.39429507     4.66576216
H     1.19833001    11.19635942     4.39937890
H     1.83379674    11.31767421     6.04741218
O    -3.95029282    -3.83228914     5.99241799
C    -3.52527063    -4.84617299     6.87792450
H    -4.42375488    -5.37322989     7.21155241
H    -3.00555312    -4.45006858     7.76324431
H    -2.85643691    -5.56707189     6.37932774
\`\`\``)
```

