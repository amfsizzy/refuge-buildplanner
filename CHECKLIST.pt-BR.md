# Checklist de testes em jogo

English: [CHECKLIST.md](CHECKLIST.md)

Não temos acesso aos arquivos do jogo: o planner só conhece o que a **base de itens pública** do servidor disponibiliza. Tudo abaixo não está publicado lá, então precisa ser medido no jogo. Escolha um item **em aberto**, teste e **[envie o resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml)** com um print da janela de Status (classe, level, atributos base e equipamento com refino). Informe o código do item (ex.: `r2`).

⚠️ Nunca poste login, senha, e-mail da conta ou qualquer dado pessoal.

**Progresso:** 17 de 52 itens confirmados.

## Refino

*Prioridade alta* · Hoje a ferramenta não soma o ATK/DEF que o refino dá, só os bônus escritos no tooltip.

**Em aberto (11)**

- [ ] `r1` **ATK por refino: arma nível 1**: Anote o ATK no Status com a arma em +0 e em dois outros refinos (ex.: +4 e +7). Mostra se o ganho é fixo por refino ou muda a partir de algum ponto. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r2` **ATK por refino: arma nível 2**: Mesmo teste com uma arma de nível 2 (o nível aparece no detalhe do item). ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r3` **ATK por refino: arma nível 3**: Mesmo teste com uma arma de nível 3. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r4` **ATK por refino: arma nível 4**: Mesmo teste com uma arma de nível 4. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r5` **MATK por refino**: Com uma arma mágica (cajado, livro…), veja se o MATK sobe ao refinar, e quanto. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r6` **DEF/MDEF por refino: armadura**: Anote DEF e MDEF com a armadura em +0 e em +N. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r7` **DEF/MDEF por refino: escudo**: Mesmo teste com um escudo. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r8` **DEF/MDEF por refino: capa**: Mesmo teste com uma capa. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r9` **DEF/MDEF por refino: calçado**: Mesmo teste com um calçado. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r10` **DEF/MDEF por refino: chapéu**: Mesmo teste com um chapéu de cima. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r11` **Refino de conjunto ("Per total set refine")**: Com um shadow set completo, mude o refino de uma peça e veja se o bônus do conjunto soma o refino de todas as peças. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

## ASPD

*Prioridade alta* · Hoje a ferramenta só mostra o teto de ASPD, não o valor real.

**Em aberto (4)**

- [ ] `a1` **Curva de ASPD pela AGI**: Com a mesma arma e o mesmo DEX, anote o ASPD com AGI em 1, 20, 40, 60, 80 e 99. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `a2` **Efeito do DEX no ASPD**: Com a mesma arma e a mesma AGI, troque só o DEX (ex.: 1 e 60) e veja se o ASPD muda. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `a3` **Tipo de arma**: Com a mesma AGI, troque o tipo de arma (adaga, espada, arco, cajado…) e anote o ASPD de cada. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `a4` **Classe**: Duas classes diferentes, com a mesma AGI e a mesma arma. O site diz que o teto é igual para todas; falta saber se a curva até o teto também é. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

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

*Prioridade alta* · Ainda fora da ferramenta. Regra provisória: 10 pontos no nível 1, +2 por nível, +10 a cada 10 níveis; subir um atributo custa 1 ponto até 49 e 2 do 50 em diante.

**Em aberto (2)**

- [ ] `p1` **Pontos livres no nível 1**: Num personagem novo, nível 1, quantos pontos de atributo aparecem para distribuir? A regra provisória usa 10. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `p2` **Total de pontos no nível 100**: Pela regra atual daria 308. Some os pontos já gastos (o custo de cada atributo desde 1) com os que ainda estão livres num personagem nível 100. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

<details>
<summary>Confirmados (2)</summary>

- [x] `p3` **Custo do atributo acima de 50**: Confirmado: o custo não sobe mais. Do 49 para o 50 passa a custar 2 e fica em 2 até o máximo.
- [x] `p4` **Limite do atributo base com o nível 150**: Confirmado: o atributo base continua limitado a 99, mesmo no nível 150.

</details>

## Fórmulas que a ferramenta já usa

*Prioridade média* · Vêm do Codex do site, que já errou uma vez (INT/SP). Sem equipamento, compare a janela de Status com a aba Status da ferramenta.

**Em aberto (7)**

- [ ] `f1` **HIT**: Fórmula usada: Level + 2×DEX + LUK÷5 + 175. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f2` **FLEE**: Fórmula usada: Level + AGI + AGI÷10 + LUK÷5 + 100. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f3` **Crítico**: Fórmula usada: 1 + LUK÷3 + 2 a cada 10 de LUK. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f4` **Perfect Dodge**: Fórmula usada: 1 + (AGI + LUK)÷10, até 100. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f5` **ATK e MATK de status**: Compare o ATK e o MATK (mín.–máx.) da janela com os da aba Status. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f6` **DEF e MDEF suaves**: É o número depois do "+" no DEF e no MDEF da janela de Status. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f7` **Troca STR → DEX com arma à distância**: Com arco ou revólver, veja se o ATK passa a vir do DEX em vez do STR. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

## Bônus de equipamento

*Prioridade baixa* · Casos que a ferramenta deixa de fora por não ter certeza.

**Em aberto (3)**

- [ ] `e1` **Conjunto da Grand Peco Card**: Junto com a carta parceira (Peco Peco), o DEF+5 do conjunto aplica? A ferramenta não soma porque não achou a parceira na base. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `e2` **Bônus de escolha (Metal Boots)**: "STR, INT or DEX +2": qual atributo recebe o bônus? ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `e3` **"Piece Bonus" de shadow em +0**: Uma peça de shadow sozinha, sem o conjunto: o "Piece Bonus" aplica? ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

## Habilidades passivas

*Prioridade média* · A ferramenta só soma a passiva com o tipo de arma que tem certeza. Compare o Status com e sem a skill (ou com nível 0 e nível máximo).

**Em aberto (4)**

- [ ] `s1` **Long Sword conta como espada?**: Com Long Sword equipada, veja se Blade Mastery / Advanced Blade Mastery somam o ATK e o HIT. ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `s2` **Two-Handed Sword, Knight Sword e Bone Sword contam como espada?**: Mesmo teste com cada uma (ex.: Dark Knight com Knight Sword e Blade Mastery). ([enviar resultado](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
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
