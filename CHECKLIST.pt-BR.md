# Checklist de testes em jogo

English: [CHECKLIST.md](CHECKLIST.md)

Não temos acesso aos arquivos do jogo: o planner só conhece o que a **base de itens pública** do servidor disponibiliza. Tudo abaixo não está publicado lá, então precisa ser medido no jogo. Escolha um item **em aberto**, teste e **[envie o resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml)** com um print da janela de Status (classe, level, atributos base e equipamento com refino). Informe o código do item (ex.: `r2`).

⚠️ Nunca poste login, senha, e-mail da conta ou qualquer dado pessoal.

**Progresso:** 36 de 58 itens confirmados.

## Refino

*Prioridade alta* · A ferramenta já soma o ATK/MATK do refino de armas nível 1 a 3. Ainda falta o refino de armas nível 4 e de armaduras.

**Em aberto (7)**

- [ ] `r4` **ATK por refino: arma nível 4**: Mesmo teste com uma arma de nível 4. Pista: +2 por refino. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r6` **DEF/MDEF por refino: armadura**: Anote DEF e MDEF com a armadura em +0, +2 e +4. Pista: +1 DEF a cada 2 refinos. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r7` **DEF/MDEF por refino: escudo**: Mesmo teste com um escudo. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r8` **DEF/MDEF por refino: capa**: Mesmo teste com uma capa. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r9` **DEF/MDEF por refino: calçado**: Mesmo teste com um calçado. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r10` **DEF/MDEF por refino: chapéu**: Mesmo teste com um chapéu de cima. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r11` **Refino de conjunto ("Per total set refine")**: Com um shadow set completo, mude o refino de uma peça e veja se o bônus do conjunto soma o refino de todas as peças. Pista: alguns bônus de refino de shadow só valem com o conjunto completo. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

<details>
<summary>Confirmados (4)</summary>

- [x] `r1` **ATK por refino: arma nível 1**: Confirmado: Knife (arma nível 1) dá +0,5 ATK e MATK por refino, arredondado para baixo (ATK +0: 5, +1: 5, +2: 6, +4: 7; MATK 0, 0, 1, 2).
- [x] `r2` **ATK por refino: arma nível 2**: Confirmado: Gemstone Knife (arma nível 2) dá +1 ATK e +1 MATK por refino (+0: 4/16, +1: 5/17, +2: 6/18, +4: 8/20). Bate com a pista de 0,5 × nível da arma por refino.
- [x] `r3` **ATK por refino: arma nível 3**: Confirmado: Cowardice Blade (arma nível 3) dá +1,5 ATK e MATK por refino, arredondado para baixo (ATK +0: 13, +1: 14, +2: 16, +4: 19).
- [x] `r5` **MATK por refino**: Confirmado: o refino sobe o MATK no mesmo ritmo do ATK (0,5 × nível da arma), inclusive em armas sem MATK base (Knife e Cowardice Blade).

</details>

## ASPD

*Prioridade alta* · Hoje a ferramenta só mostra o teto de ASPD, não o valor real. Pistas a confirmar: a AGI dá +1 ASPD a cada 10 pontos, e os bônus de ASPD % são proporcionais à AGI total.

**Em aberto (1)**

- [ ] `a3` **Tipo de arma**: Com a mesma AGI, troque o tipo de arma (adaga, espada, arco, cajado…) e anote o ASPD de cada. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
  - Resultado: Primeiro dado: a adaga (com Blade Mastery 10) fica de 6 a 0 abaixo de "sem arma" conforme a AGI sobe (ver a1). Falta comparar outros tipos de arma.

<details>
<summary>Confirmados (4)</summary>

- [x] `a1` **Curva de ASPD pela AGI**: Legend nível 105, sem itens, DEX 1, com Shadow Mastery 10 e Blade Mastery 10 (passivas de ASPD %). AGI 1/10/20/40/60/80/99 → sem arma: 148, 151, 155, 162, 169, 176, 182; com Gemstone Knife (adaga): 142, 146, 150, 158, 166, 175, 182. A curva inclui as passivas desse personagem.
- [x] `a2` **Efeito do DEX no ASPD**: Confirmado: o DEX não mexe no ASPD. Com AGI 99 e a adaga, DEX 1 e DEX 50 deram 182 (abaixo do teto de 185 desse Legend). O tooltip do DEX no jogo só fala em ATK/MATK.
- [x] `a4` **Classe**: Confirmado: o teto base é 180 para todas as classes. Só skills sobem o limite: Jester (Card Mastery e Sleight Mastery no máximo, +1 cada), Legend (Frenzy, +3 passivo; ativo fixa o ASPD em 193) e Dracomancer com espada (Weapon Quicken, +1).
- [x] `a5` **Teto máximo de ASPD**: Confirmado: o teto máximo do servidor é 190. Skills podem passar disso: o Legend chega a 193 com Frenzy.

</details>

## HP e SP máximos

*Prioridade média* · Hoje ficam fora do cálculo porque dependem da classe.

**Em aberto (2)**

- [ ] `h1` **HP e SP base por classe e level**: Para cada classe que vocês jogam, anote HP e SP máximos com VIT e INT em 1, em alguns levels (ex.: 1, 30, 60, 99). ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `h2` **VIT no HP**: Mude só o VIT (ex.: 1 → 50) e anote quanto o HP sobe. O Codex diz que é +1% do HP base por ponto. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

<details>
<summary>Confirmados (1)</summary>

- [x] `h3` **INT não muda o SP máximo**: Confirmado: INT não aumenta o SP máximo, só a regen de SP.

</details>

## Pontos de atributo

*Prioridade alta* · Resolvido e já na ferramenta: a calculadora mostra os pontos usados e livres pela tabela de pontos por nível do servidor. Custo: 1 até o 49, 2 do 49→50 até o 98 e 3 do 98→99.

*Nada em aberto nesta seção.*

<details>
<summary>Confirmados (6)</summary>

- [x] `p1` **Pontos livres no nível 1**: Confirmado: 18 pontos no nível 1.
- [x] `p2` **Pontos por level up comum**: Resolvido pela tabela do servidor: +3 por nível do 1 ao 9, +2 por nível até o 99, +4 do 101 ao 125, +1 a partir do 126 (trava em 447 no nível 144).
- [x] `p5` **Bônus nos níveis terminados em 0**: Resolvido pela tabela do servidor: os níveis terminados em 0 dão +10 no total (inclusive 110 e 120).
- [x] `p6` **Pontos gastos de outros personagens**: Tabela do servidor conferida com resets: nível 49 = 154 e nível 105 = 334 batem. Nível 85: o reset deu 259 e a tabela diz 258 (1 ponto de diferença, a reconferir).
- [x] `p3` **Custo do atributo**: Confirmado: custa 1 até o 49, 2 do 49→50 até o 97→98, e 3 do 98→99. Não há outro degrau.
- [x] `p4` **Limite do atributo base com o nível 150**: Confirmado: o atributo base continua limitado a 99, mesmo no nível 150.

</details>

## Fórmulas que a ferramenta já usa

*Prioridade média* · Vêm do Codex do site, que já errou uma vez (INT/SP). Como testar: sem equipamento, coloque na ferramenta o mesmo level e os mesmos atributos do personagem e compare cada número da janela de Status com a aba Status da ferramenta.

**Em aberto (4)**

- [ ] `f3` **Crítico**: Fórmula usada: 1 + LUK÷3 + 2 a cada 10 de LUK. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f6` **DEF e MDEF suaves**: É o número depois do "+" no DEF e no MDEF da janela de Status. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
  - Resultado: Corrigido: DEF suave = nível + VIT (+5 a cada 10 de VIT) e MDEF suave = nível÷4 + INT + DEX÷5 + VIT÷5; os dois bateram em dois prints. Falta um print com VIT diferente de 1 para confirmar a parte do VIT.
- [ ] `f7` **Troca STR → DEX com arma à distância**: Com arco ou revólver, veja se o ATK passa a vir do DEX em vez do STR. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f10` **Redução de dano pela DEF e MDEF**: O tooltip de Defenses diz: 100 de DEF reduz cerca de 18%, 275 reduz 1/3 e 500 reduz 50%; 50 de MDEF reduz cerca de 30% e 100 de MDEF cerca de 55%. A fórmula clássica bate com a DEF e com 50 de MDEF, mas daria 45% para 100 de MDEF. Se alguém souber testar (dano recebido de um mesmo ataque com MDEF diferente), confirme. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

<details>
<summary>Confirmados (6)</summary>

- [x] `f1` **HIT**: Corrigido: HIT = Level + 2×DEX + LUK÷5 + 200 (a ferramenta usava 175). Bateu em dois prints (307 e 405).
- [x] `f2` **FLEE**: Confirmado: a fórmula bate. Os +70 que sobravam eram Improve Dodge 10 (+40) e Shadow Mastery 10 (+30).
- [x] `f4` **Perfect Dodge**: Confirmado: 1 + (AGI + LUK)÷10 (1 com tudo em 1; 11 com AGI 99). É o número depois do "+" no FLEE.
- [x] `f5` **ATK e MATK de status**: Corrigido: ATK e MATK de status somam o nível base ÷ 4, e cada 10 de DEX dá +1 MATK. ATK = nível÷4 + STR + DEX÷5 + DEX÷20 + LUK÷3; MATK = nível÷4 + INT×1,5 + DEX÷5 + DEX÷10 + LUK÷3. Bateu em dois prints (27/27 e 39/45).
- [x] `f8` **Bônus a cada 10 pontos de atributo**: Confirmado pelos tooltips do jogo (a cada 10 do total do atributo): STR +1 ATK; AGI +1 FLEE e +1 ASPD; VIT +5 DEF e MDEF (fixos); INT +1 MATK; DEX +1 ATK e MATK; LUK +2 Critical e +1% de dano crítico.
- [x] `f9` **Conjuração e dano crítico**: Confirmado pelos tooltips do jogo: o crítico dá 1,2× de dano (+1% a cada 10 de LUK) e ignora FLEE. Cada DEX reduz 0,25% do cast variável e cada INT 0,125%; DEX×2 + INT = 400 zera o cast variável. O cast fixo só cai com equipamento. A ferramenta mostra os dois no Status.

</details>

## Bônus de equipamento

*Prioridade baixa* · Casos que a ferramenta deixa de fora por não ter certeza.

**Em aberto (2)**

- [ ] `e1` **Conjunto da Grand Peco Card**: Junto com a carta parceira (Peco Peco), o DEF+5 do conjunto aplica? A ferramenta não soma porque não achou a parceira na base. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `e2` **Bônus de escolha (Metal Boots)**: "STR, INT or DEX +2": qual atributo recebe o bônus? ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

<details>
<summary>Confirmados (1)</summary>

- [x] `e3` **"Piece Bonus" de shadow em +0**: Confirmado: o Piece Bonus vale com a peça sozinha, sem o conjunto completo.

</details>

## Habilidades passivas

*Prioridade média* · A ferramenta só soma a passiva com o tipo de arma que tem certeza. Compare o Status com e sem a skill (ou com nível 0 e nível máximo).

**Em aberto (4)**

- [ ] `s1` **Long Sword conta como espada?**: Com Long Sword equipada, veja se Blade Mastery / Advanced Blade Mastery somam o ATK e o HIT. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `s2` **Two-Handed Sword, Knight Sword e Bone Sword contam como espada?**: Mesmo teste com cada uma (ex.: Assassin ou Rogue com Blade Mastery). O Dark Knight agora usa a Blade Dominion, que só dá ATK com espada de uma mão. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `s3` **Heavy Bow conta como arco?**: Com Heavy Bow equipado, veja se Bow Mastery soma o DEX. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `s4` **Perfection Mastery (Ronin)**: Critical já confirmado (25 + 3/nível). Falta: o "+25 de MATK a mais no Lv 5" vale só no nível 5 ou do 5 em diante? Compare o MATK nos níveis 5 e 6. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
  - Resultado: Confirmado no jogo: com espada de uma mão, Critical +25 e +3 por nível, HIT -300, MATK +15 por nível (igual à descrição do site; a outra fórmula, 30 + 2/nível, estava desatualizada). · Falta: o "+25 more at Lv 5" do MATK vale só no nível 5 ou do 5 em diante? Comparar o MATK nos níveis 5 e 6.

<details>
<summary>Confirmados (1)</summary>

- [x] `s5` **Bônus de crítico/FLEE das masteries de foice e katar sem a arma**: Confirmado: Katar Mastery e as masteries de foice só dão os bônus com a arma equipada. No jogo, a maioria das masteries tem a linha "Requires a \[arma\] to take effect", mesmo quando a descrição do site não tem.

</details>

## Rotas confirmadas em jogo

*Quando passar pelos mapas* · Como chegar a cada ponto usando os teleportes do servidor. As rotas anotadas aqui aparecem na aba Farm da ferramenta.

*Nada em aberto nesta seção.*

<details>
<summary>Confirmados (13)</summary>

- [x] `t1` **Morroc's Guild**: Kafra Orfanato \> Morroc's Guild
- [x] `t2` **Geffen Cave**: Dungeon Caravan \> Geffen Cave
- [x] `t3` **Forest Maze**: Dungeon Caravan \> Forest Maze
- [x] `t4` **Judge Headquarters**: Kafra Orfanato \> Prontera (portal spot 8) \> Prontera Castle \> Judge Headquarters · ou · Dungeon Caravan \> Judge Headquarters (Judge Only)
- [x] `t5` **Airship Crash Site**: Dungeon Caravan \> Airship Crash Site
- [x] `t6` **Kiel Hyre Factory**: Dungeon Caravan \> Kafra Abandoned Warehouse \> yuno\_fild09 \> yuno\_fild08 (spot 4)
- [x] `t7` **Mora**: Kafra Orfanato \> Mora
- [x] `t8` **Dragon Nest**: Dungeon Caravan \> Dragon Nest
- [x] `t9` **Crystal Caves**: Kafra Orfanato \> Hugel (barco) \> Frozen Fields \> snow\_fild02 \> snow\_fild04 (spot 3)
- [x] `t10` **Frontier/Maroll**: Kafra Orfanato \> Frontier
- [x] `t11` **Nomad Village**: Kafra Orfanato \> Prontera (kafra) \> Nomad Village
- [x] `t12` **Abandoned Kafra Warehouse**: Dungeon Caravan \> Abandoned Kafra Warehouse
- [x] `t13` **Sky Garden**: Kafra Orfanato \> Umbala \> ygg\_dun01 \> ygg\_dun02 \> ygg\_fild01 \> ygg\_fild02 (portal spot 5)

</details>

## Teleportes do Orfanato

*Quando passar pelos mapas* · O site diz em que nível de investimento do Orfanato cada teleporte libera.

**Em aberto (2)**

- [ ] `o1` **Nível 60: Juperos, Crystal Caves, Thanatos Tower e Kiel Hyre**: Confirmar que esses destinos aparecem na Skia Nerius quando o Orfanato chega no nível 60. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `o2` **Nível 105: Abyss Lake e Sky Garden**: Confirmar que esses destinos liberam no nível 105. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

---

*Os resultados estão como os testadores anotaram.*
