# Checklist de testes em jogo

English: [CHECKLIST.md](CHECKLIST.md)

Não temos acesso aos arquivos do jogo: o planner só conhece o que a **base de itens pública** do servidor disponibiliza. Tudo abaixo não está publicado lá, então precisa ser medido no jogo. Escolha um item **em aberto**, siga o passo a passo e mande o resultado na **[thread Refuge Build Planner](https://discord.com/channels/1500898812942745602/1557950291347771462)** do Discord do servidor, com um print da janela de Status (classe, level, atributos base e equipamento com refino). Informe o código do item (ex.: `r2`).

⚠️ Nunca poste login, senha, e-mail da conta ou qualquer dado pessoal.

**Progresso:** 40 de 58 itens confirmados.

## Refino

*Prioridade alta* · A ferramenta já soma o refino de armas (nível 4 pela regra, falta medir) e da armadura de corpo. Falta testar escudo, capa, calçado e chapéu.

**Em aberto (4)**

- [ ] `r7` **Quanto DEF/MDEF o refino dá no escudo?**
  1. Equipe um escudo em +0 e abra a janela de Status (Alt+A).
  2. Anote o DEF e o MDEF (o número da esquerda, antes do "+").
  3. Repita com a mesma peça em +1, +2 e +4 (pode ser outra cópia dela).
  4. Mande os prints com o nome da peça e o refino de cada um.
  - Resultado: A pista diz uma regra geral para "armadura" (+1 DEF a cada 2 refinos), sem separar por peça. Um teste com escudo confirma; se bater, aplico nos quatro (escudo, capa, calçado e chapéu).
- [ ] `r8` **Quanto DEF/MDEF o refino dá na capa?**
  1. Equipe uma capa em +0 e abra a janela de Status (Alt+A).
  2. Anote o DEF e o MDEF (o número da esquerda, antes do "+").
  3. Repita com a mesma peça em +1, +2 e +4 (pode ser outra cópia dela).
  4. Mande os prints com o nome da peça e o refino de cada um.
- [ ] `r9` **Quanto DEF/MDEF o refino dá no calçado?**
  1. Equipe um calçado em +0 e abra a janela de Status (Alt+A).
  2. Anote o DEF e o MDEF (o número da esquerda, antes do "+").
  3. Repita com a mesma peça em +1, +2 e +4 (pode ser outra cópia dela).
  4. Mande os prints com o nome da peça e o refino de cada um.
- [ ] `r10` **Quanto DEF/MDEF o refino dá no chapéu de cima?**
  1. Equipe um chapéu de cima em +0 e abra a janela de Status (Alt+A).
  2. Anote o DEF e o MDEF (o número da esquerda, antes do "+").
  3. Repita com a mesma peça em +1, +2 e +4 (pode ser outra cópia dela).
  4. Mande os prints com o nome da peça e o refino de cada um.

<details>
<summary>Confirmados (7)</summary>

- [x] `r1` **ATK por refino: arma nível 1**: Confirmado: Knife (arma nível 1) dá +0,5 ATK e MATK por refino, arredondado para baixo (ATK +0: 5, +1: 5, +2: 6, +4: 7; MATK 0, 0, 1, 2).
- [x] `r2` **ATK por refino: arma nível 2**: Confirmado: Gemstone Knife (arma nível 2) dá +1 ATK e +1 MATK por refino (+0: 4/16, +1: 5/17, +2: 6/18, +4: 8/20). Bate com a pista de 0,5 × nível da arma por refino.
- [x] `r3` **ATK por refino: arma nível 3**: Confirmado: Cowardice Blade (arma nível 3) dá +1,5 ATK e MATK por refino, arredondado para baixo (ATK +0: 13, +1: 14, +2: 16, +4: 19).
- [x] `r4` **ATK por refino: arma nível 4**: Decidido pelo jogador: arma nível 4 dá +2 ATK e MATK por refino (0,5 × nível, a mesma regra confirmada nos níveis 1 a 3).
- [x] `r5` **MATK por refino**: Confirmado: o refino sobe o MATK no mesmo ritmo do ATK (0,5 × nível da arma), inclusive em armas sem MATK base (Knife e Cowardice Blade).
- [x] `r6` **DEF/MDEF por refino: armadura**: Confirmado: Padded Armor (DEF base 22) ficou com 23 em +1, 23 em +2 e 24 em +4. Ou seja, +1 DEF a cada 2 refinos, arredondado para cima, e nenhum MDEF.
- [x] `r11` **Refino de conjunto ("Per total set refine")**: Resolvido pelo texto das peças: o refino do conjunto é a soma dos refinos das peças equipadas. A ferramenta já calcula "Set refine N+:" e "Per (N) total set refine(s):" com o conjunto completo. Formas condicionais ("Set refine 9+, while poisoned:") ficam de fora.

</details>

## ASPD

*Prioridade alta* · Hoje a ferramenta só mostra o teto de ASPD, não o valor real. Pistas a confirmar: a AGI dá +1 ASPD a cada 10 pontos, e os bônus de ASPD % são proporcionais à AGI total.

**Em aberto (1)**

- [ ] `a3` **Quanto cada tipo de arma muda o ASPD?**
  1. Tire a arma e anote o ASPD da janela de Status (sem buffs nem itens que mexam em ASPD).
  2. Equipe uma arma de cada tipo que sua classe usa (adaga, espada, arco, cajado…), sem cartas ou opções de ASPD, e anote o ASPD de cada.
  3. Não mude AGI nem DEX entre as trocas.
  4. Mande a classe, a AGI e a DEX base e a lista "tipo de arma → ASPD".
  - Resultado: Primeiro dado: a adaga (com Blade Mastery 10) fica de 6 a 0 abaixo de "sem arma" conforme a AGI sobe (ver a1). Falta comparar outros tipos de arma.

<details>
<summary>Confirmados (4)</summary>

- [x] `a1` **Curva de ASPD pela AGI**: Legend nível 105, sem itens, DEX 1, com Shadow Mastery 10 e Blade Mastery 10 (passivas de ASPD %). AGI 1/10/20/40/60/80/99 → sem arma: 148, 151, 155, 162, 169, 176, 182; com Gemstone Knife (adaga): 142, 146, 150, 158, 166, 175, 182. A curva inclui as passivas desse personagem. Extra: com AGI 101 (99 + 2 de bônus) o ASPD foi a 184.
- [x] `a2` **Efeito do DEX no ASPD**: Confirmado: o DEX não mexe no ASPD. Com AGI 99 e a adaga, DEX 1 e DEX 50 deram 182 (abaixo do teto de 185 desse Legend). O tooltip do DEX no jogo só fala em ATK/MATK.
- [x] `a4` **Classe**: Confirmado: o teto base é 180 para todas as classes. Só skills sobem o limite: Jester (Card Mastery e Sleight Mastery no máximo, +1 cada), Legend (Frenzy, +3 passivo; ativo fixa o ASPD em 193) e Dracomancer com espada (Weapon Quicken, +1).
- [x] `a5` **Teto máximo de ASPD**: Confirmado: o teto máximo do servidor é 190. Skills podem passar disso: o Legend chega a 193 com Frenzy.

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

## HP e SP máximos

*Prioridade média* · Hoje ficam fora do cálculo porque dependem da classe.

**Em aberto (2)**

- [ ] `h1` **Qual é o HP e o SP máximo base de cada classe em cada level?**
  1. Tire todo o equipamento e espere os buffs acabarem.
  2. Abra a janela de Status e anote o HP e o SP máximos, a classe, o level base, a VIT e a INT.
  3. Se puder, repita em outros levels (ex.: 1, 30, 60, 99, 120 e 150) ou com amigos de outras classes.
  4. Mande os prints.
  - Resultado: Nenhuma das duas bases tem tabela de HP/SP por classe. Caminho: prints da janela de status (HP/SP máximos) sem equipamento, por classe, em alguns níveis (ex.: 1, 50, 99, 120, 150).
- [ ] `h2` **Quanto cada ponto de VIT soma no HP máximo?**
  1. Sem equipamento, anote o HP máximo e a VIT base.
  2. Suba a VIT (ou use um reset de atributos) e anote o HP de novo em pelo menos dois valores (ex.: VIT 1, 30 e 60).
  3. Mande a classe, o level e os pares "VIT → HP máximo".

<details>
<summary>Confirmados (1)</summary>

- [x] `h3` **INT não muda o SP máximo**: Confirmado: INT não aumenta o SP máximo, só a regen de SP.

</details>

## Fórmulas que a ferramenta já usa

*Prioridade média* · Vêm do Codex do site, que já errou uma vez (INT/SP). Como testar: sem equipamento, coloque na ferramenta o mesmo level e os mesmos atributos do personagem e compare cada número da janela de Status com a aba Status da ferramenta.

**Em aberto (3)**

- [ ] `f3` **O Critical do planner bate com o do jogo?**
  1. Sem equipamento, anote a LUK base e o Critical da janela de Status.
  2. Mude a LUK (ou equipe um item com LUK) e anote de novo, em 2 ou 3 valores.
  3. Mande os prints. O planner usa: 1 + LUK ÷ 3 + 2 a cada 10 de LUK.
- [ ] `f7` **Com arma à distância, o ATK usa a DEX no lugar da STR?**
  1. Equipe um arco e anote o ATK de status (o número antes do "+").
  2. Repita nas combinações STR 1/DEX 1, STR 1/DEX 50, STR 50/DEX 1 e STR 50/DEX 50 (com reset de atributos ou personagens diferentes).
  3. Se puder, repita com chicote ou deck.
  4. Mande os prints com os atributos de cada um.
  - Resultado: Confirmado pelo jogador: armas que não precisam ficar a 1 quadrado do mob são à distância e usam DEX: arco, arco pesado, revólver, deck, chicote, codex, corrente e shuriken (luva e taco de golfe são corpo a corpo). Aplicado como espelho do corpo a corpo: DEX vira o atributo principal e STR o secundário. Falta só um print com arco para conferir os números.
- [ ] `f10` **Quanto de dano a DEF e a MDEF reduzem?**
  1. Deixe alguém (ou o mesmo monstro) acertar sempre o mesmo ataque ou skill em você.
  2. Anote o dano recebido com DEF e MDEF diferentes (troque armadura ou escudo entre as tentativas).
  3. Mande o dano de cada tentativa junto com o DEF e o MDEF da janela de Status.
  4. Referência do tooltip de Defenses: 100 DEF ≈ 18%, 275 ≈ 1/3, 500 = 50%; 50 MDEF ≈ 30%, 100 MDEF ≈ 55%.

<details>
<summary>Confirmados (7)</summary>

- [x] `f1` **HIT**: Corrigido: HIT = Level + 2×DEX + LUK÷5 + 200 (a ferramenta usava 175). Bateu em dois prints (307 e 405).
- [x] `f2` **FLEE**: Confirmado: a fórmula bate. Os +70 que sobravam eram Improve Dodge 10 (+40) e Shadow Mastery 10 (+30).
- [x] `f4` **Perfect Dodge**: Confirmado: 1 + (AGI + LUK)÷10 (1 com tudo em 1; 11 com AGI 99). É o número depois do "+" no FLEE.
- [x] `f5` **ATK e MATK de status**: Corrigido: ATK e MATK de status somam o nível base ÷ 4, e cada 10 de DEX dá +1 MATK. ATK = nível÷4 + STR + DEX÷5 + DEX÷20 + LUK÷3; MATK = nível÷4 + INT×1,5 + DEX÷5 + DEX÷10 + LUK÷3. Bateu em dois prints (27/27 e 39/45).
- [x] `f6` **DEF e MDEF suaves**: Confirmado: DEF suave = nível + VIT (+5 a cada 10 de VIT, pelo tooltip) e MDEF suave = nível÷4 + INT + DEX÷5 + VIT÷5. Bateu com VIT 1 (106/27 e 106/39) e VIT 2 (107/37).
- [x] `f8` **Bônus a cada 10 pontos de atributo**: Confirmado pelos tooltips do jogo (a cada 10 do total do atributo): STR +1 ATK; AGI +1 FLEE e +1 ASPD; VIT +5 DEF e MDEF (fixos); INT +1 MATK; DEX +1 ATK e MATK; LUK +2 Critical e +1% de dano crítico.
- [x] `f9` **Conjuração e dano crítico**: Confirmado pelos tooltips do jogo: o crítico dá 1,2× de dano (+1% a cada 10 de LUK) e ignora FLEE. Cada DEX reduz 0,25% do cast variável e cada INT 0,125%; DEX×2 + INT = 400 zera o cast variável. O cast fixo só cai com equipamento. A ferramenta mostra os dois no Status.

</details>

## Habilidades passivas

*Prioridade média* · A ferramenta só soma a passiva com o tipo de arma que tem certeza. Compare o Status com e sem a skill (ou com nível 0 e nível máximo).

**Em aberto (4)**

- [ ] `s1` **A Long Sword conta para a Blade Mastery?**
  1. Monte a mesma build no planner (classe, level, atributos, equipamento e skills).
  2. No jogo, equipe a Long Sword e anote ATK e HIT da janela de Status.
  3. Se o jogo mostrar a mais exatamente o bônus da Blade Mastery, a arma conta.
  4. Mande o print e o nível da Blade Mastery.
- [ ] `s2` **Two-Handed Sword, Knight Sword e Bone Sword contam para a Blade Mastery?**
  1. Monte a mesma build no planner (classe, level, atributos, equipamento e skills).
  2. No jogo, equipe cada uma delas (Two-Handed Sword, Knight Sword, Bone Sword) e anote ATK e HIT da janela de Status.
  3. Se o jogo mostrar a mais exatamente o bônus da Blade Mastery, a arma conta.
  4. Mande o print e o nível da Blade Mastery.
- [ ] `s3` **O Heavy Bow conta para a Bow Mastery?**
  1. Monte a mesma build no planner (classe, level, atributos, equipamento e skills).
  2. No jogo, equipe o Heavy Bow e anote a DEX da janela de Status.
  3. Se o jogo mostrar a mais exatamente o bônus da Bow Mastery, a arma conta.
  4. Mande o print e o nível da Bow Mastery.
- [ ] `s4` **O MATK extra da Perfection Mastery vale só no nível 5 ou do 5 em diante?**
  1. Com uma espada de uma mão, anote o MATK com a Perfection Mastery no nível 5.
  2. Suba a skill para o nível 6 e anote o MATK de novo.
  3. Se o MATK cair do 5 para o 6, o "+25" vale só no nível 5; se subir +15, vale do 5 em diante.
  4. Mande os dois prints.
  - Resultado: Confirmado no jogo: com espada de uma mão, Critical +25 e +3 por nível, HIT -300, MATK +15 por nível (igual à descrição do site; a outra fórmula, 30 + 2/nível, estava desatualizada). · Falta: o "+25 more at Lv 5" do MATK vale só no nível 5 ou do 5 em diante? Comparar o MATK nos níveis 5 e 6.

<details>
<summary>Confirmados (1)</summary>

- [x] `s5` **Bônus de crítico/FLEE das masteries de foice e katar sem a arma**: Confirmado: Katar Mastery e as masteries de foice só dão os bônus com a arma equipada. No jogo, a maioria das masteries tem a linha "Requires a \[arma\] to take effect", mesmo quando a descrição do site não tem.

</details>

## Bônus de equipamento

*Prioridade baixa* · Casos que a ferramenta deixa de fora por não ter certeza.

**Em aberto (2)**

- [ ] `e1` **O bônus do conjunto da Grand Peco Card (DEF +5) funciona?**
  1. Equipe a Grand Peco Card junto com a carta parceira (Peco Peco Card).
  2. Compare o DEF da janela de Status com e sem a Peco Peco Card.
  3. Mande os dois prints.
- [ ] `e2` **Na Metal Boots, qual atributo recebe o "STR, INT ou DEX +2"?**
  1. Sem a Metal Boots, anote o bônus de STR, INT e DEX (o número depois do "+").
  2. Equipe a Metal Boots e veja qual dos três subiu 2.
  3. Se puder, teste com outra classe (o bônus pode depender da classe).
  4. Mande os prints.

<details>
<summary>Confirmados (1)</summary>

- [x] `e3` **"Piece Bonus" de shadow em +0**: Confirmado: o Piece Bonus vale com a peça sozinha, sem o conjunto completo.

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

- [ ] `o1` **No nível 60 do Orfanato, Juperos, Crystal Caves, Thanatos Tower e Kiel Hyre aparecem na Skia Nerius?**
  1. Com o Orfanato no nível 60, fale com a Skia Nerius (Dungeon Caravan).
  2. Veja se esses quatro destinos aparecem na lista.
  3. Mande um print da lista.
- [ ] `o2` **No nível 105 do Orfanato, Abyss Lake e Sky Garden liberam?**
  1. Com o Orfanato no nível 105, fale com a Skia Nerius (Dungeon Caravan).
  2. Veja se Abyss Lake e Sky Garden aparecem na lista.
  3. Mande um print da lista.

---

*Os resultados estão como os testadores anotaram.*
